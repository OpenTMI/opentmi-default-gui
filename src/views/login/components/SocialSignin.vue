<template>
  <div class="social-signup-container">
    <div class="sign-btn" @click="authenticate('github')">
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

import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)
import Vue from 'vue'

export default {
  name: 'SocialSignin',
  data() {
    return {
    }
  },
  methods: {
    authenticate(provider) {
      this.$auth.authenticate(provider)
        .then((data) => {
          // Execute application logic after successful social authentication
          console.log('login success', data)
        })
        .catch((error) => {
          console.error(`login failed ${error.message}`)
          console.error(error)
        })
    }
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
      font-size: 50px;
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
