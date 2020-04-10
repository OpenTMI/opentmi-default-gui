<template>
  <div class="logPage-container">
    <log-viewer :log="log" :loading="isLoading" />
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import LogViewer from '@femessage/log-viewer'

export default {
  name: 'ErrorLog',
  components: {
    'log-viewer': LogViewer
  },
  data() {
    return {
      isLoading: false,
      log: ''
    }
  },
  sockets: {
    connect() {
      this.$notify({
        title: 'Online',
        message: 'Connected',
        type: 'success',
        duration: 2000
      })
      this.log += '============ Connected ============\n'
      this.$socket.client.emit('join', { room: 'logs' }, (error) => {
        if (error) {
          console.error('oh no')
        }
      })
    },
    disconnect(reason) {
      this.$notify({
        title: 'Offline',
        message: `Disconnected, reason: ${reason}`,
        type: 'warning',
        duration: 2000
      })
      this.log += '============ Disconnected ============\n'
    },
    log(line) {
      this.log += line
    }
  },
  created() {
    const token = getToken()
    this.$socket.client.io.opts.query = { token }
    this.$socket.client.open()
  }
}
</script>

<style scoped>
  .logPage-container {
    padding: 30px;
  }
</style>
