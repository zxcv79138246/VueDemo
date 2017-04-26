<template>
  <div class="navigation">
    <el-menu theme="dark"
             :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
      <el-menu-item index="1">
        <router-link :to="{path: '/' }"
                     tag="div">首頁</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link :to="{path:'/about'}"
                     tag="div">關於我們</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link :to="{path:'/professor'}"
                     tag="div">指導老師</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  computed: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() { },
  components: {}
}
</script>

<style lang='scss'>

</style>