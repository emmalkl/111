<template>
  <div class="home">
     <div class="content" ref="sca">
         <img src="../../public/img/summer.png" alt="" class="summer" id="pic-summer">
         <p id="pic-name">Alin  Lee</p>
         <img src="../../public/img/island.png" alt="" class="island" id="pic-island">
         <div class="line"></div>
     </div>
    <div class="com">
      <i class="iconfont icon-iconfont-left" @click="$router.push('/'),$emit('changeRouter','fade')"></i>
      <i class="iconfont icon-iconfontplatformentrance" @click="$router.push('/1'),$emit('changeRouter','fade2')"></i>
     </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // num:20
    }
  },

  // created(){
  //     this.change()
  // },
  // methods:{
  //   change(){
      
  //   }
  // }
  
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
.home,.about,.introduction,.learn{
   /* position: fixed;
   top:0;
   bottom: 0;
   right: 0;
   left: 0; */
   height: 100%;
   width: 100%
 }
.content{
   /* width: 720px;
   height: 520px;
   position: absolute;
   top:50%;
   left: 50%;
   transform: translate(-50%,-50%) scale(1.26); */
  width: 95%;
  height: 95%;
  margin:0 auto;
   font-weight: 100;
   box-sizing: border-box;
   margin: 0;
   position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
 }
.home p{ 
  width: 100%;
  height: 1.3em;
  margin: 0;
  padding: 0;
  text-align: center;
  position: absolute;
  top:40%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 70px;
 }
 .summer{
   position: absolute;
   top:5%;
   right: 20%;

 }
 .island{
   position: absolute;
   bottom: 25%;
   left:50% ;
   margin-left: -30px;
 }
 .content img{
      width: 70px;
      height: 70px;
  }
  .com{
    position: fixed;
    bottom: 2.4em;
    right: 4.5em;
    height: 5%;
    width: 5%;
  }
  i{
    width: 3.6em;
    color: #287ad1;
    font-size: 55px!important;
    font-weight: 700;
    cursor: pointer;
  }
  #pic-summer{
    animation: summer;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes summer{
    from {transform: rotate(0)}
    to {transform: rotate(45deg)}
  }
  .line{
    width: 120px;
    height: 2px;
    background: #000;
    position: absolute;
    bottom: 27%;
    margin-bottom: 0;
    left: 50%;
    margin-left: -60px;
  }
  #pic-name{
    animation: name;
    animation-duration: 500ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-delay: .6s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  @keyframes name{
    from {transform: translate(-58%,-50%)}
    to { opacity: 1;transform: translate(-50%,-50%)}
  }
  #pic-island{
    animation: island;
    animation-duration: 500ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-delay: .6s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  @keyframes island{
    from {transform: translateY(50px)}
    to {opacity:1;transform: translateY(0)}
  }
</style>

