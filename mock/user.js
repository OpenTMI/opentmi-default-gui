
const credentials = {
  admin: {
    token: 'admin-token',
    password: 'admin'
  },
  editor: {
    token: 'editor-token',
    password: 'admin'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default [
  // user login
  {
    url: '/auth/login',
    type: 'post',
    response: config => {
      const { email, password } = config.body
      const credential = credentials[email]

      // mock error
      if (!credential || credential.password !== password) {
        console.log('invalid account', config.body, credential)
        return Promise.reject({
          code: 401,
          message: 'Account and password are incorrect.'
        })
      }
      const { token } = credential
      return { token }
    }
  },

  // get user info
  {
    url: '/auth/me',
    type: 'get',
    response: config => {
      console.log({ config })
      let { headers } = config
      if (!headers) {
        headers = { token: 'admin-token' }
      }
      const { token } = headers
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 508,
          message: 'Login failed, unable to get user details.'
        }
      }

      return info
    }
  },

  // user logout
  {
    url: '/auth/logout',
    type: 'post',
    response: _ => {
      return {
        code: 200,
        data: 'success'
      }
    }
  }
]
