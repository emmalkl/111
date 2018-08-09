<template>
  <div>
    <h1>联系我们{{$store.state.count}}</h1>
    <!-- <router-link to="/connect/test1">test1</router-link> | -->
    <!--传参-->
    <router-link :to="{name:'test1',params:{name:'lisi',age:'30'}}">test1</router-link> |
    <!-- <router-link to="/connect/test2">test2</router-link>  -->
     <!--传参-->
    <router-link to="/connect/test2/zhangsan/20">test2</router-link> |
    <router-link to="/connect/backtest2/zhangsan/20">back test2</router-link> 
     <div><router-view/></div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style scoped>
   
</style>