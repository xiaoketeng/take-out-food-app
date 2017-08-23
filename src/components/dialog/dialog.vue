<template>
  <div id="dialog">
      <div class="dialog-con"></div>
      <div class="dialog-con white">
          <h3>{{sellerInfo.name}}</h3>
          <div class="stars-num">
             
              <Stars class="stars-num-s" :sevScore="sellerInfo.score" :key="sellerInfo.score" ></Stars> 
          </div>
          <div class="title">
              <span class="title-line"></span>
              <span class="title-w">优惠信息</span>
              <span class="title-line"></span>
          </div>
          <div class="discount">
              <ul>
                  <li v-for="(item,index) in sellerInfo.supports" :key="index">
                      <img :src="require('../business/img/price'+(index+1)+'.png')">
                      <span>{{item.description}}</span>
                  </li>
              </ul>
          </div>
           <div class="title">
              <span class="title-line"></span>
              <span class="title-w">商家公告</span>
              <span class="title-line"></span>
          </div>
          <div class="goods-com">
              {{sellerInfo.bulletin}}
          </div>
          <div class="dialog-close" @click="closeDialog">X</div>
          
      </div>
  </div>
</template>
<script>
import Stars from '../score-stars/stars.vue';
import {mapState} from 'Vuex';
    export default{
        data(){
            return{
               sellerInfo:''

            };
        },
       computed:{
            ...mapState({
               isShow(state){
                   return state.isShow;
               }
            })
        },
         components:{
            Stars
          },
          mounted(){
              this.getDialogInfo();
          },
          methods:{
              closeDialog(){
                  this.$store.state.isShow=false;
              },
               getDialogInfo(){
                   let self=this;
                 self.$http.get('../../../static/data.json').then((res)=>{
                     self.sellerInfo=res.body.seller;
                 });
            }
          }
    };
</script>
<style lang="scss">
  #dialog{
       .dialog-con{
        position: fixed;
        overflow:auto;
        z-index:10001;
        top:0;
        left: 0;
        width:100%;
        height:100%;
        background: rgba(0,0,0,0.7);
        h3{
            margin-top:100px;
            text-align: center;
            display: block;
            font-size: 35px;
            margin-bottom:48px;
        }
        .stars-num{
            clear:both;
            height: 40px;
            width:auto;
            .stars-num-s{
                position: absolute;
                left:-105px;
                margin-left:50%;
            }
        }
        .title{
            width:auto;
            height:40px;
            margin-left:70px;
            margin-right:70px;
            display: flex;
            margin-top:60px;
            margin-bottom: 15px;
            .title-line{
                flex:1;
                height: 1px;
                margin-top:20px;
                border-top:1px solid red;
            }
            .title-w{
              display: inline-block;
              height: 40px;
              font-size: 30px;
              text-align: center;
              line-height: 40px;
              flex:0 0 150px;
            }
            
        }
        .discount{
            margin-left:70px;
            margin-right:70px;
            li{
                height: 50px;
                margin-bottom: 20px;
                padding-left:15px;
                display: flex;
                img{
                    width:40px;
                    height:40px;
                    flex:0 0 40px;
                }
                span{
                    display: inline-block;
                    flex: 1;
                    line-height: 50px;
                    font-size: 18px;
                    padding-left:20px;
                }
            }

            
        }
        .goods-com{
            width:auto;
            height:auto;
            margin-left:85px;
            margin-right:85px;
            line-height: 40px;
            font-size: 25px;
            margin-bottom: 100px;
        }
        .dialog-close{
           
            padding:60px 0;
            text-align: center;
            font-size: 40px;
            font-weight: 700;
        }
       }
       .white{
          color:#fff;
       }
  }
</style>


