<template>
  <div class="about">
    <div class="content" ref="sca">
       <div class="con-item1"></div>
       <div class="con-item2"></div>
       <div class="con-item3"></div>
       <div class="con-item4"></div>
       <div class="item1-image pic-1" style="animation-delay: 1s;"><img src="../../public/img/github.png" alt=""></div>
       <div class="item2-image pic-1" style="animation-delay: 2s;"><img src="../../public/img/graffiti-heart-shape.png" alt=""></div>
       <div class="item3-image pic-1" style="animation-delay: 3s;"><img src="../../public/img/instagram.png" alt=""></div>
       <div class="item4-image pic-1" style="animation-delay: 4s;"><img src="../../public/img/internet.png" alt=""></div>
       <div class="item1-text pic-1" style="animation-delay: 1s;"><a href="https://github.com/emmalkl">Github</a></div>
       <div class="item2-text pic-1" style="animation-delay: 2s;"><a href="https://blog.csdn.net/qq_42779387">CSDN</a></div>
       <div class="item3-text pic-1" style="animation-delay: 3s;"><a href="https://segmentfault.com/u/alin_lee">segmentfault</a></div>
       <div class="item4-text pic-1" style="animation-delay: 4s;"><a @click="$router.push('/2')">About me</a></div>
       <div class="crab" id="pic-crab"><img src="../../public/img/crab.png" alt=""></div>
    </div>
    <div class="com">
      <i class="iconfont icon-iconfont-left" @click="$router.push('/'),$emit('changeRouter','fade')"></i>
      <i class="iconfont icon-iconfontplatformentrance" @click="$router.push('/2'),$emit('changeRouter','fade2')"></i>
     </div>
  </div>
</template>
<script>
export default {
// created(){

// }
}
</script>
<style scoped>
/* .about{
  display: table;
} */
a{
  text-decoration: none;
  cursor: pointer;
}
.pic-1 a:nth-child(odd){
  color: aliceblue;
}
.pic-1 a:nth-child(even){
  color: #000;
}
.about .content{
  width: 75%;
  height: 80%;
  font-weight: 400;
  /* display: table-cell;
  vertical-align: middle; */
  border:2px solid #000;
  display: flex;
  position: relative;
}
@media (min-width: 1125px) {
  .about .content{
  width: 67%;
  height: 95%;
  display: flex;
}
}
@media (max-width: 1125px){
  .about .content{
  width: 890px;
  height: 660px;
  display: flex;
}
}
@media (max-width: 960px) {
  .about .content{
  width: 800px;
  height: 660px;
  display: flex;
}
}
.con-item1,.con-item2,.con-item3,.con-item4{
  flex: 1;
}
.con-item1,.con-item3{
  background: #000;
}
#pic-1 img{
  height: 55px;
  width:55px;
}
.item1-image,.item2-image,.item3-image,.item4-image{
  position: absolute;
  top:50%;
  margin-top: -100px;
}
.item1-text,.item2-text,.item3-text,.item4-text{
  position: absolute;
  top:50%;
  margin-top: -10px;
  font-size: 1.8vw!important;
  flex: 1;
}
.item2-text a,.item4-text a{
  color: #000!important;
}
.item3-text,.item4-text{
  margin-left: -25px;
}
.item1-image,.item1-text{
  left: 8%;
}
.item2-image,.item2-text{
  left: 33%;
}
.item3-image,.item3-text{
  left: 58%;
}
.item4-image,.item4-text{
  left:84%;
}
  .pic-1{
    animation: github;
    animation-duration: 500ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  @keyframes github{
    from {opacity: 0;transform: translateY(-50px)}
    to {opacity: 1;transform: translateY(0)}
  }
  .crab img{
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
    #pic-crab{
    animation: crab;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes crab{
    from {transform: translateX(-50px)}
    to {transform: translateX(0)}
  }
</style>


