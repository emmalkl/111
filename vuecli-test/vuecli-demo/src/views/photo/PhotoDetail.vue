<template>
        <div class="photo">
            <div class="header">
                <h3>图片</h3>
            </div>
                <v-touch @swipeleft="onSwipeLeft" @swiperight="onSwipeRight" class="img">
                    <img  @click="onSwipeTap" :src="'../../../img/'+ imgid+'.jpg'" alt="">
                    </v-touch>
            <div class="footer"></div>
        </div>
</template>

<script>
import Vue from 'vue'
import VueTouch from 'vue-touch'
Vue.use(VueTouch,{name:'v-touch'})
export default {
    data(){
        return{
          imgid:this.$route.params.id
        }
    },
    created(){
         if(!this.imgid){
             this.$router.push('/photo')
         }
         
    },
    methods:{
            onSwipeLeft(){
                if(this.imgid==20){
                    this.imgid=1
                }else{
                    this.imgid++;  
                }                     
            },
            onSwipeRight(){
                if(this.imgid==1){
                    this.imgid=20
                }else{
                    this.imgid--;  
                }   
            },
            onSwipeTap(){
                this.$router.go(-1) 
            },
        },
        // computed:{
        //     add(){
        //         return background(url("'../../../img/'+ this.imgid+'.jpg'"))
        //     }
        // }
}
</script>

<style scoped>
.photo .header,.photo .footer{
    background-color: rgb(63, 81, 181);
    z-index: 1;
  }
  img{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      width: 100%;
      height: 50%;
  }
  .photo .img{
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: #000;
      
  }
</style>