<template>
  <div class="social-signup-container">
    <div class="sign-btn" @click="githubHandleClick('github')">
      <span class="github-svg-container"><svg-icon icon-class="github" class="icon" /></span>
    </div>
    <!--
    <div class="sign-btn" @click="googleHandleClick('google')">
      <span class="google-svg-container"><svg-icon icon-class="google" class="icon" /></span>
      Google
    </div> -->
  </div>
</template>

<script>

import request from '@/utils/request'
import { githubId } from '@/api/user'
import Vue from 'vue'
import GAuth from 'vue-google-oauth2'

export default {
  name: 'SocialSignin',
  data() {
    return {
    }
  },
  created() {
    this.loadAuthInfo()
  },
  methods: {
    loadAuthInfo() {
      githubId()
        .then(({ data }) => {
          const gauthOption = {
            clientId: data.clientID,
            scope: ['user:email', 'read:org']
          }
          return Vue.use(GAuth, gauthOption)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    githubHandleClick(thirdpart) {
      this.$store.commit('SET_AUTH_TYPE', thirdpart)
      this.$gAuth.getAuthCode()
        .then(authCode => request({
          url: '/auth/google',
          data: { code: authCode, redirect_uri: '/auth/github' },
          method: 'post'
        }))
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.error(error)
          throw error
        })
    }/*
    googleHandleClick(thirdpart) {
      alert('not implemented')
      // this.$store.commit('SET_AUTH_TYPE', thirdpart)
      // const client_id = 'xxxxx'
      // const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
      // const url = 'https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirect_uri
      // openWindow(url, thirdpart, 540, 540)
    }*/
  }
}
</script>

<style lang="scss" scoped>
  .social-signup-container {
    margin: 20px 0;
    .sign-btn {
      display: inline-block;
      cursor: pointer;
    }
    .icon {
      color: #000;
      font-size: 24px;
      margin-top: 8px;
    }
    .github-svg-container,
    .google-svg-container {
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      padding-top: 1px;
      border-radius: 4px;
      margin-bottom: 20px;
      margin-right: 5px;
    }
    .github-svg-container {
      background-color: #ffffff;
    }
    .google-svg-container {
      background-color: #6BA2D6;
      margin-left: 50px;
    }
  }
</style>
