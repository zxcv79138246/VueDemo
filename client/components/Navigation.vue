<template>
  <div class="navigation">
    <el-menu theme="dark"
             :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
      <el-menu-item index="1"
                    @click="goTo('/')">首頁</el-menu-item>
      <el-menu-item index="2"
                    @click="goTo('/about')">關於我們</el-menu-item>
      <el-menu-item index="3"
                    @click="goTo('/professor')">指導老師
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    activeIndex() {
      var match = this.$route.matched[0].path
      switch (match) {
        case '': {
          return '1'
        }
        case '/about': {
          return '2'
        }
        case '/professor': {
          return '3'
        }
      }
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goTo(path) {
      this.$router.push({ path: path })
    }
  },
  created() { },
  components: {}
}
</script>

<style lang='scss'>

</style>