<template>
  <div class="thirteen">
    <h2>1324</h2>
    <h5>碩一成員：</h5>
    <div class="member-content">
      <div class="member-block">
        <div class="member"
             v-for="member in members">
          <div class="img-box">
            <img :src="member.img"
                 alt="">
          </div>
          <div class="name">{{member.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [{
        name: "劉人傑",
        img: "/image/jay.jpg"
      }, {
        name: "陳肇陽",
        img: "/image/yan.jpg"
      }, {
        name: "林采嬑",
        img: "/image/yi.jpg"
      }, {
        name: "蔡博凱",
        img: "/image/kai.jpg"
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
.thirteen {
  padding: 0 60px;

  h5 {
    margin-left: 25px;
  }
}
</style>