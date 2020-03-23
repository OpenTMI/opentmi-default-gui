<template>
  <testcase-detail :is-edit="true" />
</template>

<script>
import TestcaseDetail from './components/TestcaseDetail'

export default {
  name: 'EditForm',
  components: { TestcaseDetail }
}
</script>

