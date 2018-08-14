<template>
    <div>
        <div class="photo">
            <div class="header">
                <h3>图片</h3>
            </div>
            <div>
                <ul>
                    <li  @click="$router.push({name:'photodetail',params:{id:index+1}})"  v-for="(items,index) in imgList" :key="index+'il'">
                        <img :src="'../../../img/'+ items +'.jpg'" alt=""/>
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
       return{
            imgList:[
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20'
        ]
       }
    }
}
</script>
<style scoped>
.photo .header,.photo .footer{
    background-color: rgb(63, 81, 181);
    z-index: 1;
  }
  li{
      width: 50%;
      height: 150px;
      float: left;
  }
  li img{
      width:100%;
      height: 100%;
  }
  ul{
      position: absolute;
      left: 0;
      top: 52px;
      width: 100%;
      margin-bottom: 52px;
  }
</style>