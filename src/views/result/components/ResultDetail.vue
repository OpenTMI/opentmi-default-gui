<template>
  <schema-json-vue :schema="schema" :json="json" @onJsonChange="handleChange" />
</template>

<script>
import { getSchema } from '@/api/results'

export default {
  name: 'ResultDetail',
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

