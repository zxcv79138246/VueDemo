.<template>
  <div class="fourteen">
    <h2>1421</h2>
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
        name: "陳柏峻",
        img: "/image/chun2.jpg"
      }, {
        name: "張偉哲",
        img: "/image/way.jpg"
      }, {
        name: "蔡名億",
        img: "/image/me.jpg"
      }, {
        name: "林政憲",
        img: "/image/shen.jpg"
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
.fourteen {
  padding: 0 60px;

  h5 {
    margin-left: 25px;
  }
}
</style>