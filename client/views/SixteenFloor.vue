<template>
  <div class="sixteen">
    <h2>1623</h2>
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
        name: "劉至峻",
        img: "/image/chun1.jpg"
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
.sixteen {
  padding: 0 60px;

  h5 {
    margin-left: 25px;
  }
}
</style>