<template>
  <div id="app">
    <div id="nav">
      <div class="header">
        <router-link to="/" class="page">首页</router-link>
      </div>
      <div class="footer">
        <router-link to="/" class="page">电影</router-link>
        <router-link to="/music" class="page">音乐</router-link>
        <router-link to="/book" class="page">图书</router-link>
        <router-link to="/photo" class="page">图片</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {
  
  components:{
    
  },
  methods:{
    
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header,.footer{
  position: fixed;
  width: 100%;
  height: 52px;
  z-index: 2;
}
.header{
  top:0;
  line-height: 52px;
  color: aliceblue;
}
.footer{
  bottom: 0;
}
.page{
  float: left;
  line-height: 52px;
  width: 25%;
  color: aliceblue;
}
</style>
