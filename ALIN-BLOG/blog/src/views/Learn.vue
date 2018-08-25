<template>
  <div class="learn">
    <div class="content">
      <div class="lea-con">
        <div><span>Html5</span></div>
        <div><span>CSS3</span><span>VUE</span></div>
        <div><span>JQUERY</span><span>NODE</span><span>WEBPACK</span></div>
        <div><span>VSCODE</span><span>DOM</span><span>ES6</span><span>CSS</span></div>
      </div>  
      <img src="../assets/img/yandex-disk.png" alt="">
      <img src="../assets/img/cloud.png" alt="">
      <img src="../assets/img/cloudy.png" alt="">
      <img src="../assets/img/dog.png" alt="">
      <img src="../assets/img/spideroak.png" alt="">
      <img src="../assets/img/spideroak.png" alt="">
      <img src="../assets/img/sugarsync.png" alt="">
    </div>
    <div class="com">
      <i class="iconfont icon-iconfont-left" @click="$router.push('/2'),$emit('changeRouter','fade')"></i>
      <i class="iconfont icon-iconfontplatformentrance" @click="$router.push('/4'),$emit('changeRouter','fade2')"></i>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.learn span{
  font-size: 12px
}
.lea-con{
  margin: 0 auto;
  width: 300px;
}
.lea-con div{
  height: 20px;
}
.learn img{
  width: 50px;
  height: 50px;
}
img:nth-child(2){
  position: absolute;
  top:70px;
  left: 131px;
  animation: disk;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes disk{
    from {transform:rotate(0) scale(1)}
    to {transform: rotate(15deg) scale(1.8)}
  }
img:nth-child(3){
  width: 100px;
  height: 100px;
  position: absolute;
  top:50px;
  right: 177px;
}
img:nth-child(4){
  width: 90px;
  height: 90px;
  position: absolute;
  top:83px;
  right: 100px;
}
img:nth-child(5){
  position: absolute;
  bottom:30px;
  right: 162px;
}
img:nth-child(6){
  width: 60px;
  height: 60px;
  position: absolute;
  bottom:30px;
  left: 130px;
}
img:nth-child(7){
  width: 90px;
  height: 90px;
  position: absolute;
  bottom:30px;
  left: 147px;
}
img:nth-child(8){
  width: 30px;
  height: 30px;
  position: absolute;
  top:73px;
  right: 145px;
  animation: bird;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes bird{
    from {transform:translateX(15px)}
    to {transform: translateX(0)}
  }
</style>
