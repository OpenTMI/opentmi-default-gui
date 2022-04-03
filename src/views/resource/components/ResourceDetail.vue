<template>
  <schema-json-vue :schema="schema" :json="json" @onJsonChange="handleChange" />
</template>

<script>
import { getSchema } from '@/api/resources'

export default {
  name: 'ResourceDetail',
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      json: {},
      schema: {}
    }
  },
  async created() {
    this.schema = await getSchema(this._)
  },
  methods: {
    handleChange(val) {
    }
  }
}
</script>

