<template>
  <resource-detail :is-edit="false" />
</template>

<script>
import ResourceDetail from './components/ResourceDetail'

export default {
  name: 'CreateResource',
  components: { ResourceDetail }
}
</script>

