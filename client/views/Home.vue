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
    <el-button type="info"
               @click="showModal = true">顯示Modal
    </el-button>
    <transition name="modal">
      <Modal v-show="showModal"
             @close="showModal = false">
        <h3 slot="header">custom header</h3>
      </Modal>
    </transition>
  
  </div>
</template>

<script>
import Counter from 'components/Counter'
import Modal from 'components/Modal'

export default {
  data() {
    return {
      count: 0,
      showModal: 0
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
    Counter,
    Modal
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

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>
