<template>
    <div>
        <div class="book">
            <div class="header">
                <h3>图书</h3>
            </div>
            <div>
                <swipe class="my-swipe" :speed="10">
                <swipe-item  class = "slide1 "> </swipe-item >
                <swipe-item  class = "slide2 "> </swipe-item >
                <swipe-item  class = "slide3 "> </swipe-item >
                </swipe >
            </div>
            <div class="footer"></div>
        </div>
    </div>
</template>
<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
    components :{
     swipe: Swipe,
     'swipe-item': SwipeItem
  }
}
</script>
<style scoped>
.my-swipe {
   height:200px;
  color:#fff;
  font-size:30px;
  text-align:center;
}

.slide1 {
   background:url('../../../public/img/01.jpg') no-repeat center/cover;/*background-size和background-position同时出现要加/  居中/充满*/
  color:#fff ;
}

.slide2 {
   background:url('../../../public/img/02.jpg') no-repeat center/cover;
  color:＃000 ;
}
.slide3 {
   background:url('../../../public/img/03.jpg') no-repeat center/cover;
  color:#fff ;
}
.book .header,.book .footer{
    background-color: rgb(121, 85, 72);
      z-index: 1;
  }
</style>
