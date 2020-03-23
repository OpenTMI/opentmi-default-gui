<template>
  <div class="dashboard-container">
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
      this.$notify({
        title: 'Online',
        message: 'Connected to server',
        type: 'success',
        duration: 2000
      })
    },
    disconnect() {
      this.$notify({
        title: 'Offline',
        message: 'Disconnected',
        type: 'warning',
        duration: 2000
      })
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
    this.$socket.client.io.opts.query = { token }
    this.$socket.client.open()
  }
}
</script>
