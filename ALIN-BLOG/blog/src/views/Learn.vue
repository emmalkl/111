<template>
  <div class="learn">
    <div class="content">
       
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