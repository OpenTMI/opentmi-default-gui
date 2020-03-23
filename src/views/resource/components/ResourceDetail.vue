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
  created() {
    getSchema(this._).then((schema) => {
      this.schema = schema
    })
  },
  methods: {
    handleChange(val) {
    }
  }
}
</script>

