<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <DemoFooter></DemoFooter>
  </div>
</template>

<script>
import Navigation from './Navigation'
import DemoFooter from './DemoFooter'
export default {
  data() {
    return {}
  },
  components: {
    Navigation,
    DemoFooter
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont,
  'avenir next', avenir,
  helvetica, 'helvetica neue',
  Ubuntu,
  'segoe ui', arial,
  sans-serif;
}

.page {
  text-align: center;
  /* nesting for the need to test postcss */
  code {
    background-color: #f0f0f0;
    padding: 3px 5px;
    border-radius: 2px;
  }
}
</style>
