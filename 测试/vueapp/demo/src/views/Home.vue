<template>
  <div class="home">
    <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
  </div>
</template>

<script>

export default {
  data(){
    return{
      images:[
        'http://i2.chuimg.com/9b43432a38b54a429287c5f81516f15a_3024w_3024h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90',
        'http://i2.chuimg.com/c24e69c6d39c4fe0a102b977eb36413b_4096w_2730h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90',
        'http://i1.chuimg.com/2088b96dfff0418182ae232d9abc7fd0_1920w_1080h.jpg@2o_50sh_1pr_1l_490w_260h_1c_1e_90q_1wh'
      ]

    }
  },
  name: 'home',
 
}
</script>
<style lang="scss" scoped>
.home{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
van-swipe{
  width: 1000px;
}
van-swipe-item{
  float: left; 
}
img{
  width: 320px;
  height: 200px;
}

</style>
