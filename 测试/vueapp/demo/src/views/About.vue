<template>
  <div>
        <van-nav-bar title="商品详情" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>
        <img src="http://i2.chuimg.com/e66bb43b645c4787a76e463eac97220e_1500w_1126h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90" alt="" class="detail-img"> 
        <div class="detail">
            
        </div>
        <div class="toolbar">
            <van-goods-action>
            <van-goods-action-mini-btn
                icon="chat-o"
                text="客服"
            />
            <van-goods-action-mini-btn
                icon="cart-o"
                text="购物车"
            />
            <van-goods-action-big-btn
                text="加入购物车"
               
            />
            <van-goods-action-big-btn
                primary
                text="立即购买"
            />
            </van-goods-action>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.detail{
   padding: 0.2rem;
   &-img{
     width: 100%;
     height: 5rem;
   }
   &-name{
       color: #333;
       font-weight: bolder;
   }
   &-price{
       color: coral;
       font-size: 0.4rem
   }
}
</style>
