<!--工作台-->
<template>
  <div>
    <!-- 轮播图片 -->
      <swiper class="swiper-box" 
              dots-position="center" 
              dots-class="com-dot" 
              auto 
              :show-desc-mask="false"  
              :loop="true" 
              :list="bannerList"></swiper>

      <grid>
        <grid-item link="/workbench/party-cost" :label="'党费管理'">
          <img slot="icon" src="../assets/u60.png">
        </grid-item>
        <grid-item :link="{ path: '/workbench/contacts'}" :label="'通讯录'">
          <img slot="icon" src="../assets/u68.png">
        </grid-item>
        <grid-item :link="{ path: '/workbench/questionnaire'}" :label="'问卷调查'">
          <img slot="icon" src="../assets/u58.png">
        </grid-item>
      </grid>
      <grid>
        <grid-item link="/workbench/organization" :label="'组织管理'">
          <img slot="icon" src="../assets/u82.png">
        </grid-item>
        <grid-item :link="{ path: '/workbench/member-record'}" :label="'党员档案'">
          <img slot="icon" src="../assets/u62.png">
        </grid-item>
        <grid-item :link="{ path: '/workbench/member-develop'}" :label="'党员发展'">
          <img slot="icon" src="../assets/u80.png">
        </grid-item>
      </grid>
      <grid>
        <grid-item link="/workbench/database" :label="'资料库'">
          <img slot="icon" src="../assets/u56.png">
        </grid-item>
      </grid>
  </div>
</template>
<script>
import { Swiper, SwiperItem, Grid, GridItem } from 'vux'
export default {
  name: 'workbench',
  components: {
    Swiper, SwiperItem, Grid, GridItem
  },
  computed: {
  },
  created: () => {
    console.log(this.$store)
  },
  mounted: () => {
  },
  data () {
    return {
      // 轮播
      bannerList: [
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/1.jpg'
          // title: ''
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/2.jpg'
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/3.jpg'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
