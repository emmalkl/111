<template>
  <div class="about">
    <div class="content" ref="sca">
       <div class="con-item1"></div>
       <div class="con-item2"></div>
       <div class="con-item3"></div>
       <div class="con-item4"></div>
       <div class="item1-image pic-1" style="animation-delay: 1s;"><img src="../assets/img/github.png" alt=""></div>
       <div class="item2-image pic-1" style="animation-delay: 2s;"><img src="../assets/img/graffiti-heart-shape.png" alt=""></div>
       <div class="item3-image pic-1" style="animation-delay: 3s;"><img src="../assets/img/instagram.png" alt=""></div>
       <div class="item4-image pic-1" style="animation-delay: 4s;"><img src="../assets/img/internet.png" alt=""></div>
       <div class="item1-text pic-1" style="animation-delay: 1s;">Github</div>
       <div class="item2-text pic-1" style="animation-delay: 2s;">Articles</div>
       <div class="item3-text pic-1" style="animation-delay: 3s;">Instagram</div>
       <div class="item4-text pic-1" style="animation-delay: 4s;">About me</div>
       <div class="crab" id="pic-crab"><img src="../assets/img/crab.png" alt=""></div>
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
.content{
  border:2px solid #000;
  display: flex;
  position: relative;
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
  top:213px;
}
.item1-text,.item2-text,.item3-text,.item4-text{
  position: absolute;
  top:273px; 
  font-size: 1.3vw!important;
  flex: 1;
}
.item1-text,.item3-text{
  color: aliceblue;
}
.item1-image,.item1-text{
  left: 56px;
}
.item2-image,.item2-text{
  left: 240px;
}
.item3-image,.item3-text{
  left: 420px;
}
.item4-image,.item4-text{
  left: 597px;
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


