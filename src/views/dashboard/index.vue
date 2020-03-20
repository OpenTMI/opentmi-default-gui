<template>
  <div class="dashboard-container">
    <span>{{ $socket.connected ? 'Connected' : 'Disconnected' }}</span>
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
import { getToken } from '@/utils/auth'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  sockets: {
    connect() {
      console.log('socket connected')
    },
    customEmit(val) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
    const token = getToken()
    console.log(token, this.$socket)
    this.$socket.client.io.opts.query = { token }
    this.$socket.client.open()
  }
}
</script>
