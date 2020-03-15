<template>
  <testcase-detail :is-edit="false" />
</template>

<script>
import TestcaseDetail from './components/TestcaseDetail'

export default {
  name: 'CreateTestcase',
  components: { TestcaseDetail }
}
</script>

