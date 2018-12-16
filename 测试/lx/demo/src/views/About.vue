<template>
<div class="nav">
  <div class="about">
    <div class="top">
      <img src="../../public/img/summer.png" alt="" width="20%" height="60%">
      <h3>hi!</h3>
    </div>
    <div class="about-nav">
      <ul>
        <li v-for="(item,index) in objArr" :key="index"  @click="add(index)" v-bind:class="{active:item.isselected}">{{item.name}}</li>
      </ul>
    </div>
  </div>
</div>
</template>
<style scoped>
.top{
  height: 100px;
  width: 100%;
}
.top img{
  margin-left: -70%;
}
.top h3{
  margin-top: -20%;
  margin-left: -10%;
}
.about-nav{
  width: 100%;
}
ul{
  margin-left: -40px;
}
li{
  height: 30px;
  list-style: none;
  width: 100%;
  border:1px solid red;
  margin: 5px 0;
}
</style>
<script>
export default {
  data(){
    return{
      objArr:[
        {
          id:1,
          name:'选项一',
          isselected:false,
        },
        {
          id:2,
          name:'选项二',
          isselected:false,
        },
        {
          id:3,
          name:'选项三',
          isselected:false,
        },
      ]
    }
  },
  methods:{
    add(index){
      this.isselected=!isselected;
      if(this.isselect){
        var oli=document.getElementsByTagName("li");
        oli[index].style.backgroundColor = "red";
        
      }    
    },
  }
}
</script>

