<template>
  <div class="business" v-loading="businessLoading"
    element-loading-text="拼命加载中">
    <div class="seller-food">
      <div class="seller-top">
        <div class="seller-stars">
          <h3>粥品香坊（大运村）</h3>
          <div class="seller-num">
            <Stars></Stars>
            <span>(661)</span>
            <span>月售690单</span>
          </div>
          
        </div>
        <div class="love">
           <img :src="isLove?require('./img/love.svg'):require('./img/noLove.svg')" @click="collection"/>
            <transition name="slide-fade">
              <span v-if="isLove">
                已收藏
              </span>
            </transition>
            <transition name="slide-fade">
              <span v-if="!isLove">
                未收藏
              </span>
            </transition>
        </div>
      </div>
      <div class="seller-bottom">
        <span>
          <p class="label-name">起送价</p>
          <p><label>20</label>元</p>
        </span>
        <span>
          <p class="label-name">商家配送</p>
          <p><label>4</label>元</p>
        </span>
        <span>
          <p class="label-name">平均配送时间</p>
          <p><label>39</label>分钟</p>
        </span>
      </div>
    </div>
    <div class="common">
      <div class="com-activ">
        <h3>公告与活动</h3>
        <p>
          {{seller.bulletin}}
        </p>
      </div>
      <ul class="activ">
        <li v-for="(item,index) in seller.supports" :key="index">
           <img :src="require('./img/price'+(index+1)+'.png')"> 
          <span>{{item.description}}</span>
        </li>
      </ul>
    </div>
    <div class="scenery">
      <h3>商家实景</h3>
      <div class="photo">
        <div class="photo-box">
           <img v-for="item in seller.pics" :key="item.name" :src="item">
        </div>
       
      </div>
    </div>
    <div class="good-info">
      <h3>商家信息</h3>
      <ul class="info">
        <li v-for="item in seller.infos" :key="item">
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
      <fooders :shoppingNum="shoppingNum" :totalPrice="totalPrice"></fooders>
  </div>
</template>
<style lang="scss">
   .business{
     padding-top:320px;
     padding-bottom:98px;
     background: rgba(0,0,0,0.1);
     .seller-food{
       background: #fff;
       .seller-top{
         margin-left:20px;
         margin-right:20px;
         width:auto;
         height:152px;
         display: flex;
         border-bottom: 1px solid #ccc;
         .seller-stars{
           flex:1;
           margin:auto 0;
           h3{
             font-size: 20px;
             padding:15px 0;
           }
           .seller-num{
             height:40px;
             span{
               display:inline-block;
               width:auto;
               height: 40px;
               line-height: 40px;
               padding-left:10px;
             }
           }
         }

         .love{
           flex:0 0 80px;
           text-align: center;
           padding-top:10px;
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
           img{
             width:70px;
             height:70px;
           }
           span{
             display: block;
             width:100%;
             font-size: 20px;
             font-weight: 700;
           }
         }
       }
       .seller-bottom{
           height:152px;
           display:flex;
           label{
             font-size: 35px;
           }
           span{
              flex:1;
              height: 120px;
              margin:auto 0;
              text-align: center;
              border-right:1px solid #ccc;
           }
           .label-name{
             color:#666;
           }
           span:last-child{
              border-right:0;
           }
         }
     }
     .common{
       width:auto;
       margin-top:20px;
       padding-left:20px;
       padding-right:20px;
       background: #fff;
       .com-activ{
         h3{
           padding:16px 0;
           font-size:20px;
           font-weight: 700;
         }
         p{
           margin-left:10px;
           margin-right:10px;
           margin-top:0;
           line-height: 28px;
           font-size: 18px;
           color:#e51e17;
         }
        }
      .activ{
          list-style: none;
          
          li{
            height:100px;
            line-height: 100px;
            border-top:1px solid #ccc;
            display: flex;
          }
          img{
            width:40px;
            height:40px;
            display:inline-block;
            flex:0 0 40px;
            margin:auto 0;
            margin-right:20px;
          }
          span{
            display: inline-block;
            flex: 1;
          }
        }
     }
     .scenery{
       width:auto;
       height:300px;
       padding-left:20px;
       padding-right:20px;
       margin-top:20px;
       background: #fff;
       h3{
         padding:16px 0;
         font-size:20px;
         font-weight: 700;
       }
       .photo{
         width:auto;
         overflow-x:auto;
         overflow-y:0;
         display:block;
         height:185px;
         .photo-box{
            width:840px;
         }
         img{
           width:180px;
           height:180px;
           display: inline-block;
           float: left;
           margin:auto 0;
           border:1px solid #ccc;
           margin-right:24px;
         }
       }
     }
     .good-info{
       margin-top:20px;
       padding-left:20px;
       padding-right:20px;
       background: #fff;
       h3{
         padding:16px 0;
         font-size:20px;
         font-weight: 700;
       }
       .info{
          list-style: none;
          li{
            height:100px;
            padding-left:15px;
            line-height: 100px;
            border-top:1px solid #ccc;
          }
       }
       
     }
   }
</style>
<script>
import fooders from '../fooder/fooder.vue';
import Stars from '../score-stars/stars.vue';
import {mapState} from 'Vuex';
    export default{
      data(){
        return{
           seller:'',
           addNum:0,
           index:0,
           isLove:false,
           show: false,
           businessLoading:true
        };
      },
      computed:{
        ...mapState({
           totalPrice(state){
          return state.totalPrice;
        },
        shoppingNum(state){
          return state.shoppingNum;
        }
        })
      },
      components:{
         fooders,
         Stars
        
      },
      created(){
        this.activeAndNotive();
      },
      methods:{
        activeAndNotive(){
           this.$http.get('../../../static/data.json').then((res)=>{
              this.seller=res.body.seller;
              this.businessLoading=false;
           });
        },
        collection(){
            if(this.isLove===true){
              this.isLove=false;
            }else{
              this.isLove=true;
            }
        }
      }
        
    };
</script>

