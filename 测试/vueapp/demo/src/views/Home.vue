<template>
  <div class="home">
    <van-icon name="search" slot="left"></van-icon>
    <!-- search -->
    <form action="/">
    <i class="iconfont icon-Food-Icons-1">下厨房</i>
  <van-search
    placeholder="今日食材"
    background=#f1f4f8
    
  />
  </form>
  <!-- lunbo -->
    <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
  <!-- daohang -->
  <ul>
    <li><a><i class="iconfont icon-foodandappliances-2"></i><span>家常菜</span></a></li>
    <li><a><i class="iconfont icon-foodandappliances-1"></i><span>早餐</span></a></li>
    <li><a><i class="iconfont icon-foodandappliances-"></i><span>汤羹</span></a></li>
    <li><a><i class="iconfont icon-Food-Icons-3"></i><span>烘焙</span></a></li>
    <li><a><i class="iconfont icon-Food-Icons-2"></i><span>主食</span></a></li>
    <li><a><i class="iconfont icon-Food-Icons-1"></i><span>面</span></a></li>
    <li><a><i class="iconfont icon-Food-Icons-"></i><span>素食</span></a></li>
    <li><a><i class="iconfont icon-food"></i><span>下饭菜</span></a></li>
  </ul>
  

  <div class="f-two">
    <p>今日厨房</p>
                <ul class="flay">
                    <li class="Ri dlay"><img src="http://i2.chuimg.com/75c659d3935b462f950be85a518ab27b_5184w_3456h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90" width="185px" height="185px">
                        <ul class="infor-one">
                            <li>茄汁虾球</li>
                            <li>若有明天</li>
                            <li class="imp">￥51.9</li>
                        </ul>
                    </li>
                    <li class="Ri dlay"><img src="http://i2.chuimg.com/d968852a87e911e6a9a10242ac110002_4608w_3456h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90" width="185px" height="185px">
                        <ul class="infor-one">
                            <li>葡萄干蛋糕卷</li>
                            <li>烘焙帮阿涛</li>
                            <li class="imp">￥128</li>
                        </ul></li>
                        <li class="Ri dlay"><img src="http://i2.chuimg.com/4cf46b1066a843f6b8ddd05c78db529b_1920w_1080h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90" width="185px" height="185px">
                        <ul class="infor-one">
                            <li>菠萝包</li>
                            <li>烘焙帮阿涛</li>
                            <li class="imp">￥78</li>
                        </ul></li>
                        <li class="Ri dlay"><img src="http://i2.chuimg.com/2da31c80bb5c466f96863e49409cd74d_1242w_1207h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90" width="185px" height="185px">
                        <ul class="infor-one">
                            <li>紫薯蛋糕卷</li>
                            <li>烘焙帮阿涛</li>
                            <li class="imp">￥36</li>
                        </ul></li>
                </ul>
            </div>
  </div> 
</template>

<script>

export default {
  data(){
    return{
      images:[
        //'http://i2.chuimg.com/9b43432a38b54a429287c5f81516f15a_3024w_3024h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90',
        'http://i2.chuimg.com/c24e69c6d39c4fe0a102b977eb36413b_4096w_2730h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90',
        //'http://i1.chuimg.com/2088b96dfff0418182ae232d9abc7fd0_1920w_1080h.jpg@2o_50sh_1pr_1l_490w_260h_1c_1e_90q_1wh'
      ],


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
  overflow: scroll;
  background: #f1f4f8;
  margin-bottom: 20px;
  height: 100%;
}
form{
  margin-top: 20px;
  margin-bottom: 20px;
}
form i{
  color: rgb(221, 133, 133);
  font-size: 30px;
}
van-search{
  width: 100%;
  height: 40px;
}
van-swipe{
  width: 1000px;
  margin-bottom: 10px;
}
img{
  width: 320px;
  height: 200px;
}
ul{
  margin-top: 30px;
  padding: 0;
  margin: 0;
  height: 180px;
  background: white;
}
ul li{
  margin-top: 10px;
  list-style:none;
  float: left;
  width: 25%;
  height: 80px;
}
ul li i{
  color: hotpink;
  font-size: 30px
}
ul li span{
  display: block;
}
.flay .dlay{
  list-style:none;
  float: left;
  width: 50%;
  height: 200px;
}
.flay .dlay img{
  width: 100%;
  height: 110px;
}
.infor-one li{
  float: none;
  width: 100%;
  margin-bottom: 10px;
  height: 20px;
}
</style>
