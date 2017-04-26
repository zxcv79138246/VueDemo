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

.member-content {
  display: flex;
  justify-content: center;

  .member-block {
    width: 70vw;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .member {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100px;

      .img-box {
        width: 100%;
        height: 100px;
        overflow: hidden;
        border-radius: 100px;

        img {
          width: 100px;
        }
      }

      .name {
        font-size: 18px;
        text-align: center;
        margin-top: 10px;
      }
    }
  }
}
</style>