<template>
    <div class="mnav">
        <div class="header">
                   <h3>音乐</h3>
        </div>
        <div>
          <aplayer autoplay v-if="isIf" 
            :list='dataList'
            :music='dataList[0]'
            :showlrc='true'
        
        />
        </div>
        <div class="footer"></div>
    </div>
</template>
<script>
import Aplayer from 'vue-aplayer'
import axios from 'axios'

export default {
     components:{
         Aplayer
     },
     data(){
      return {
         dataList:[],
         isIf:false
        }
    },
    created(){
        this.getData()
    },
     methods:{
        getData(){
           axios.get('./data/musicdata.json')
           .then((response)=>{
                console.log(response);
                this.dataList=response.data.musicData;
                this.isIf=true;
                // console.log(this.dataList);   
                for(var i=0;i<response.data.musicData.length;i++){
                    this.dataList[i].lrc='http://localhost:8080/'+response.data.musicData[i].lrc
                }            
           })
           .catch((error)=>{
                console.log(error);
           })
        },
     },
}
</script>
<style scoped>
.mnav .header,.mnav .footer{
    background-color: rgb(0, 150, 136);
    z-index: 1;
  }
</style>



