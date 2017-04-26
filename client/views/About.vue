<template>
  <div class="about">
    <div class="block">
      <el-button type="success"
                 @click="goTo('thirteen')">1324</el-button>
      <el-button type="warning"
                 @click="goTo('fourteen')">1421</el-button>
      <el-button type="info"
                 @click="goTo('sixteen')">1623</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {
    goTo(routerName) {
      this.$router.push({ name: routerName })
    }
  },
  created() { },
  components: {}
}
</script>

<style lang='scss'>
.about {
  .block {
    width: 300px;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
  }
}
</style>