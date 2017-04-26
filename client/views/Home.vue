<template>
  <div class="page">
    <!--<counter></counter>-->
    <h2>首頁</h2>
    <div class="count">
      <div class="number">{{count}}</div>
      <div class="button-box">
        <el-button type="danger"
                   class="btn"
                   @click="minute">-</el-button>
        <el-button type="success"
                   class="btn"
                   @click="plus">+</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from 'components/Counter'

export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    plus() {
      this.count++
    },
    minute() {
      this.count--
    }
  },
  components: {
    Counter
  }
}
</script>

<style lang="scss">
.page {
  .count {
    margin-top: 50px;

    .number {
      font-size: 72px;
    }

    .button-box {
      margin-top: 30px;

      .btn {
        font-size: 24px;
      }
    }
  }
}
</style>
