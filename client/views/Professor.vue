<template>
  <div class="professor">
    <h2>指導教授</h2>
    <div class="professor-member">
      <div class="member-block">
        <div class="member"
             v-for="professor in professors">
          <div class="img-box">
            <img :src="professor.img"
                 alt="">
          </div>
          <div class="name">{{professor.name}}</div>
          <div class="graduate">{{professor.graduated}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      professors: [{
        name: "陳偉凱",
        img: "/image/pro1.jpg",
        graduated: "美國北卡州立大學計算機工程博士"
      }, {
        name: "劉建宏",
        img: "/image/pro2.jpg",
        graduated: "美國德州大學阿靈頓分校計算機科學博士"
      }]
    }
  },
  computed: {},
  methods: {},
  created() { },
  components: {}
}
</script>

<style lang='scss'>
.professor {
  padding: 0 60px;

  .professor-member {
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
        width: 200px;

        .img-box {
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-radius: 200px;

          img {
            width: 200px;
          }
        }

        .name {
          font-size: 18px;
          text-align: center;
          margin-top: 10px;
        }

        .graduate {
          font-size: 16px;
          text-align: center;
        }
      }
    }
  }
}
</style>