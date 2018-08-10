<template>
    <div>
        <div class="movie">
            <div class="header">
                <h3>电影</h3>
            </div>
            <div>
              <ul>
                  <li v-for="(items,index) in dataList" :key='index+"nl"'>
                      {{items}}
                  </li>
              </ul>
            </div>
            <div class="footer"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
      return {
          dataList:[]
        }
    },
    created(){
      this.getData();
    },
    methods:{
        getData(){
           axios.get(API_PROXY+'http://route.showapi.com/1498-1')
           .then((response)=>{

               this.dataList=response.subjects
               console.log(this.dataList);
               
           })
           .catch((error)=>{
                console.log(error);
           })
        }
    }
}
</script>
<style scoped>
.movie .header,.movie .footer{
    background-color: rgb(33, 150, 243);
    z-index: 1;
  }
</style>

