<template>
  <schema-json-vue :schema="schema" :json="json" @onJsonChange="handleChange" />
</template>

<script>
import { getSchema, searchResult } from '@/api/results'

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
  async created() {
    this.schema = await getSchema(this._)
    this.json = await searchResult(this.$route.params.id)
  },
  methods: {
    handleChange(val) {
    }
  }
}
</script>

