<template>
  <div class="introduction">
    <div class="content">
       <div class="con-img">
         <img src="../assets/img/bird.png" alt="" class="bird">
         <img src="" alt="">
         <div class="con-line"></div>
       </div>
       <div class="con-que">
         <p>Name:</p>
         <p>Birthday:</p>
         <p>Location:</p>
         <p>Email:</p>
       </div>
       <div class="con-text">
         <p>Alin Lee</p>
         <p>1999.06</p>
         <p>HENAN JZ</p>
         <p>emma_lkl@163.com</p>
       </div>
    </div>
    <div class="com">
      <i class="iconfont icon-iconfont-left" @click="$router.push('/1'),$emit('changeRouter','fade')"></i>
      <i class="iconfont icon-iconfontplatformentrance" @click="$router.push('/3'),$emit('changeRouter','fade2')"></i>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.con-img{
  width: 200px;
  height: 200px;
  position: absolute;
  top:50%;
  left: 24%;
  margin-top: -100px;
  animation: que;
  animation-duration: 500ms;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.con-img .bird{
  width: 50px;
  height: 50px;
}
.con-img .con-line{
  width: 100px;
  height: 2px;
  background: #000;
  position: absolute;
  bottom: 30px;
  left: 40px;
}
.con-que,.con-text{
  width: 150px;
  height: 200px;
  position: absolute;
  top:50%;
  margin-top: -100px;
}
.con-que{
  left: 45%;
  animation: que;
  animation-duration: 500ms;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
}
@keyframes que{
    from {opacity:0;transform: translateX(-40px)}
    to {opacity:1;transform: translateX(0)}
  }
.con-text{
  left: 60%;
  animation: text;
  animation-duration: 500ms;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
}
@keyframes text{
    from {opacity:0;transform: translateX(40px)}
    to {opacity:1;transform: translateX(0)}
  }
.con-que p{
  font-size: 1.5vw;
  font-weight: 500;
  margin: 20px 0;
  text-align: right;
}
.con-text p{
  font-size: 1.5vw;
  font-weight: 500;
  margin: 20px 0;
  text-align: left; 
}
.bird{
    animation: summer;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transition-duration: 0.6s;
    transition-delay: 0.6s;
}

</style>
