<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <div class="router-trans">
      <transition :name="tmode">
         <router-view @changeRouter="changeRouter"/><!-- 切换的位置 -->
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      tmode:'fade2'
    }
  },
  methods:{
    changeRouter(name){
      this.tmode=name
    }
  },
    mounted(){    
    window.onresize = ()=>{
      let clih=document.documentElement.clientHeight;
      let cliw=document.documentElement.clientWidth;
      if(cliw/clih<=1.26){
        this.$refs.sca.style.transform='translate(-50%, -50%) scale('+cliw/clih+')';
      }else{
         this.$refs.sca.style.transform='translate(-50%, -50%) scale('+clih/500+')';
      }
    }
  },
}
</script>

<style>
.fade-enter{
  width: 100%;
  transform: translateX(-100%);
}
.fade-enter-active{
  transition: all 1s ease;
}
.fade-enter-to{
  position: absolute;
  top:0;
  width: 100%;
  transform: translateX(0);
}
.fade-leave{
  width: 100%;
  transform: translateX(0);
}
.fade-leave-active{
  transition: all 1s ease;
}
.fade-leave-to{
  position: absolute;
  top:0;
  width: 100%;
  transform: translateX(100%);
}

.fade2-enter{
  width: 100%;
  transform: translateX(100%);
}
.fade2-enter-active{
  transition: all 1s ease;
}
.fade2-enter-to{
  position: absolute;
  top:0;
  width: 100%;
  transform: translateX(0);
}
.fade2-leave{
  width: 100%;
  transform: translateX(0);
}
.fade2-leave-active{
  transition: all 1s ease;
}
.fade2-leave-to{
  position: absolute;
  top:0;
  width: 100%;
  transform: translateX(-100%);
}
</style>
