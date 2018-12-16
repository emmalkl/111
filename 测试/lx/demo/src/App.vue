<template>
  <div id="app">
    <div id="header"><h3>hello</h3></div>
    <div id="nav"></div>
    <router-view/>
    <div id="footer">
      <router-link to="/">首页</router-link> 
      <router-link to="/about">投票</router-link> 
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#header{
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: red;
  color: aliceblue;
}
#footer{
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  line-height: 50px;
  width: 100%;
  background-color: red; 
}
a{
  color: aliceblue;
  display: inline-block;
  width: 25%;
  text-decoration: none;
}
</style>
