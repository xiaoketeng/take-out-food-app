<template>
        <div class="fooder">
         <div class="fooder-car">
          <div :class="[shoppingNum>0?bgCar2:bgCar1]">
            <img src="./img/cart_fill.svg"/>
          </div>
        </div>
         <transition name="slide-fade">
        <div v-if="shoppingNum" :class="[shoppingNum>0?shoppingfood:'']">{{shoppingNum}}</div>
         </transition>
        <div class="price">
          <div  class="total-price">
            <span class="price-num">￥{{totalPrice}}</span>
            <span class="freight">另需配送费￥4元</span>
          </div>
          <div class="start-price">￥20起送</div>
        </div> 
      </div>
</template>
<script>
    export default{
        props:[
            'totalPrice',
            'shoppingNum'
        ],
       data(){
           return{
             shoppingfood:'shoppingfood',
             bgCar1:'bg-car1',
             bgCar2:'bg-car2'
           };
       }
    };
</script>
<style lang="scss">
     .fooder{
    /* 可以设置不同的进入和离开动画 */
      /* 设置持续时间和动画函数 */
      .slide-fade-enter-active {
        transition: all .3s ease;
      }
      .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
      }
      .slide-fade-enter, .slide-fade-leave-to
      /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateY(10px);
        opacity: 0;
      }
      height:98px;
      line-height: 98px;
      width:100%;
      position:fixed;
      bottom: 0;
      z-index: 1000;
      background:#141c27;
      .shoppingfood{
        width:50px;
        height:50px;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        position: absolute;
        top:-40px;
        left:90px;
        background: red;
        border-radius: 100%;
      }
      .fooder-car{
        width:120px;
        height:98px;
        position: absolute;
        left:25px;
        top:-30px;
        border-radius: 100%;
        background:#141c27; 
        .bg-car1{
          width:92px;
          height:92px;
          margin:15px auto;
          border-radius: 100%;
          color:#80858a;
          background: rgba(250,250,250,0.2);
          img{
            width:80px;
            height:80px;
            margin:9px;
          }
        }
        .bg-car2{
          width:92px;
          height:92px;
          margin:15px auto;
          border-radius: 100%;
          color:#80858a;
          background: #00a0dc;
          img{
            width:80px;
            height:80px;
            margin:9px;
            fill:#fff;
          }
        }
      } 
      .price{
        margin-left:160px;
        height:100%;
        display: flex;
        .total-price{
          flex: 1;
          height:100%;
          .price-num{
           font-size: 20px;
           font-weight: 700;
           color:#9b9fa2;
           padding:0 20px;
           border-right:1px solid #9b9fa2;
          }
          .freight{
            padding-left:20px;
            color:#6f7478;
            font-size: 18px;
          }
        }
        .start-price{
          flex:0 0 150px;
          height:100%;
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          color:#9b9fa2;
          background: #2b343b;
        }
      }
    }
</style>

