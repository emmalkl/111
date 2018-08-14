<template>
    <div>
        <div class="music">
            <div class="header">
                   <h3>音乐</h3>
            </div>
            <div>
                <ul>
                    <li v-for="(items,index) in dataList" :key='index+"dl"' @click="$router.push('/test1')">
                        <img :src="items.bg"/>
                    </li>
                </ul>
                <router-view/>
            </div>
            <div class="footer"></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
      return {
          dataList:[]
        }
    },
    created(){
        this.getData()
    },
     methods:{
        getData(){
           axios.get('./data/musiclist.json')
           .then((response)=>{
                console.log(response);
                this.dataList=response.data.albums
           })
           .catch((error)=>{
                console.log(error);
           })
        }
     },
    
}
</script>
<style scoped>

.music .header,.music .footer{
    background-color: rgb(0, 150, 136);
    z-index: 1;
  }
  ul li{
    width: 50%;
    float: left;
  }
  ul li img{
      width: 100%;
  }
  ul{
      position: absolute; 
      left: 0;
      top: 52px;
  }
</style>