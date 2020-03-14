<template>
  <article-detail :is-edit="true" />
</template>

<script>
import ResultDetail from './components/ResultDetail'

export default {
  name: 'EditForm',
  components: { ResultDetail }
}
</script>

