<template>
    <div>
        <div class="movie">
            <div class="header">
                <h3>电影</h3>
            </div>
            <div>
              <ul class="mov">
                  <li v-for="(items,index) in dataList" :key='index+"nl"' @click="$router.push({name:'moviedetail',params:{id:items.id}})">
                      <div class="p">
                          <h3>{{items.title}}</h3>
                          <span v-for="(items,index) in items.casts" :key="index">{{items.name}}</span>
                          <p>{{items.collect_count}}人已观看</p>
                          <!-- <p>{{items.}}</p> -->
                      </div>
                      
                      <img :src="items.images.small">
                      
                  </li>
              </ul>
            </div>
            <div class="loading" v-show="!isFinitea">
                <div class="load-content">
                    <img src="@/assets/loading.gif" alt="">
                </div>
            </div>
            <div class="footer"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
      return {
          dataList:[],
          isFinitea:true,
          startIndex:0
        }
    },
    created(){
      this.getData();
      
    },
    methods:{
        getData(){
            this.isFinitea=false;
        axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters'+'?start='+this.startIndex+'&count=10')
        // axios.get('https://api.myjson.com/bins/nsb9g'+'?start='+this.startIndex+'&count=10')
           .then((response)=>{

               this.dataList=this.dataList.concat(response.data.subjects)
                console.log(response);
                this.isFinitea=true;
                
           })
           .catch((error)=>{
                console.log(error);
           })
        },
    },
    mounted(){
    window.onscroll=()=>{
      console.log(document.documentElement.scrollTop);
      console.log('可视高度'+document.documentElement.clientHeight);
      console.log('滚动高度'+document.documentElement.scrollHeight);
        let sTop = document.documentElement.scrollTop;
        let sHeigth = document.documentElement.scrollHeight;
        let cHeight = document.documentElement.clientHeight;
        if(sTop+cHeight==sHeigth){
            console.log('end');
            if(this.isFinitea==true){
                this.startIndex+=10;
                this.getData();
            }
            
        }
    }
    }
}
</script>
<style scoped>
.movie .header,.movie .footer{
    background-color: rgb(33, 150, 243);
    z-index: 1;
  }
  .mov{
      position: absolute;
      left: 0;
      top: 52px;
      width: 100%;
      margin-bottom: 52px;
  }
  li{
      border-bottom: 1px solid #000;
      position: relative;
  }
  .p{
      width: 50%;
      float: right;
  }
  li img{
    width: 50%;
    height: 50%;
  }
  .loading{
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(0,0,0,.5);

  }
  .load-content{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      padding: 1rem;
      border-radius: .1rem;
      background: rgba(255,255,255)
  }
</style>

