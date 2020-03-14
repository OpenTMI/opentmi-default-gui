<template>
  <div class="app-container documentation-container">
    <a class="document-btn" target="_blank" href="https://github.com/opentmi/opentmi/">Github backend</a>
    <a class="document-btn" target="_blank" href="https://github.com/opentmi/opentmi-ui/">Github Repository</a>
    <dropdown-menu class="document-btn" :items="addonList" title="Addons" />
  </div>
</template>

<script>
import DropdownMenu from '@/components/Share/DropdownMenu'

export default {
  name: 'Documentation',
  components: { DropdownMenu },
  data() {
    return {
      addonList: [
        { title: 'opentmi-jenkins', href: 'https://github.com/opentmi/opentmi-jenkins' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.documentation-container {
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .document-btn {
    flex-shrink: 0;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    width: 200px;
    margin-bottom: 16px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
