<template>
  <div class="assess" v-loading="assessLoading"
    element-loading-text="拼命加载中">
      <div class="score">
          <div class="score-left">
              <h3>{{((seller.foodScore+seller.serviceScore)/2).toFixed(1)}}</h3>
              <p>综合评分</p>
              <span>高于周边商家{{seller.rankRate}}%</span>
          </div>
          <div class="score-right">
              <div class="score-ass"><label>服务态度</label>
                <Stars class="stars" :isImgSmain="0"  :sevScore="seller.foodScore" :key="seller.foodScore"></Stars>
                <span class="stars-score">{{seller.foodScore}}</span>
              </div>
              <div class="score-ass"><label>服务态度</label>
                <Stars class="stars" :isImgSmain="0"  :sevScore="seller.serviceScore" :key="seller.serviceScore"></Stars>
                <span class="stars-score">{{seller.serviceScore}}</span>
              </div>
              <div class="score-ass"><label>送达时间</label>
              <span class="time">{{seller.deliveryTime}}分钟</span></div>
          </div>
      </div>
      <div class="assess-con">
        <div class="isLove">
             <span class="bg-blur1">全部&nbsp;57</span>
             <span class="bg-blur2">满意&nbsp;47</span>
             <span class="bg-blur3">不满意&nbsp;10</span>
        </div>
        <div class="choose">
            <el-checkbox v-model="checked" >只看有内容的评价</el-checkbox>
        </div>
        <div class="assess-main" v-for="(item,index) in ratings" :key="index">
            <div class="photo">
                 <img :src="item.avatar"> 
            </div>
            <div class="ass-main">
                <div class="ass-name-time">
                    <span class="ass-name">{{item.username}}</span>
                    <span class="ass-time">2016-07-13&nbsp;20.33</span>
                </div>
                <Stars class="ass-stars" :isImgSmain="1" :sevScore="item.score"></Stars>
                <div class="description">
                    <span>{{item.text}}</span>
                </div>
                <div class="praise">
                    <div class="good-or-bad"></div>
                    <div class="nick">
                        <span>天王香菇卤鸭肉嘻嘻嘻</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <fooders :shoppingNum="shoppingNum" :totalPrice="totalPrice"></fooders>
  </div>
</template>
<style lang="scss">
.assess{
    background: rgba(0,0,0,0.1);
    padding-top:311px;
    padding-bottom: 98px;
    .score{
        display:flex;
        width:100%;
        height:210px;
        background: #fff;
        border-bottom:1px solid #ccc;
        .score-left{
            flex: 0 0 268px;
            height:auto;
            text-align:center;
            h3{
               font-size:45px;
               padding-top:25px;
               color:#f8a732;
               margin:0;
            }
            p{
                font-size:25px;
                display: block;
                 margin:0;
                 margin-top:10px;
                font-weight: 700;
            }
            span{
                display: block;
                font-size: 18px;
                font-weight: 700;
                margin-top:15px;
                color:#666;
            }
        }
        .score-right{
            flex:1;
            margin:auto 0;
            height:180px;
            padding-left:40px;
            border-left:1px solid #ccc;
            .score-ass{
                display: flex;
                label{
                  display:block;
                  height:30px;
                  font-size: 18px;
                  font-weight: 700;
                  line-height: 30px;
                  margin:auto 0;
                  margin-right:18px;
                }
                .stars{
                    height: 45px;
                    display:block;
                    margin:auto 0;
                    padding-top:15px;
                }
                .stars-score{
                    height: 35px;
                    margin:auto 0;
                    font-size: 25px;
                    line-height: 38px;
                    color:#f8a732;
                    display: block;
                }
                .time{
                    height: 35px;
                    margin:auto 0;
                    font-size: 25px;
                    line-height: 38px;
                    color:#ccc;
                    display: block;
                }
            }
        }

    }
    .assess-con{
        width:100%;
        margin-top:20px;
        background: #fff;
        .isLove{
            height:80px;
            border-bottom:1px solid #ccc;
            padding-top:25px;
            margin-left:25px;
            display: block;
            margin-right:25px;
            span{
                display: inline-block;
                margin-right:20px;
                padding:15px 20px;
            }
            .bg-blur1{background: #00a0dc;}
            .bg-blur2{background: #ccecf7;}
            .bg-blur3{background: #eaebed;}
        }
        .choose{
            border-bottom:1px solid #ccc;
            height: 50px;
            padding-left: 20px;
            line-height: 50px;
            font-size: 18px;
            color:#b6babb;
        }
        .assess-main{
            display: flex;
            padding:10px 20px;
            .photo{
                flex:0 0 60px;
                width:60px;
                img{
                    width:60px;
                    height: 60px;
                    border-radius: 100%;
                }
            }
            .ass-main{
                flex:1;
                padding-left:10px;
                .ass-name-time{
                    position: relative;
                    .ass-name{
                        padding-left:5px;
                    }
                    .ass-time{
                      position: absolute;
                      color:#b6babb;
                      right:0;
                    }
                }
               .ass-stars{
                   margin-top:5px;
               }
              .description{
                  clear: both;
                  padding-top:8px;
                  padding-bottom: 10px;
                  font-size:18px;
                  font-weight: 700;
                  display: block;
              }
              .praise{
                  display: flex;
                  width:100%;
                  height:40px;
                  .good-or-bad{
                      flex:0 0 30px;
                      width:30px;
                      height: 30px;
                      margin:auto 0;
                      background-image:url('./img/good.svg'); 
                       background-size:100% 100%;
                  }
                  .nick{
                      flex:1;
                      padding-left:5px;
                      margin-top:5px;
                      span{
                          display: block;
                          font-size: 20px;
                          padding:0 15px;
                          color:#b6babb;
                          width:120px;
                          white-space:nowrap;
                          overflow:hidden;
                          text-overflow: ellipsis;
                          border:1px solid #ccc;
                      }
                  }

              }
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
              ratings:'',
              sevScore:0,
              customerStars:0,
              checked:true,
              assessLoading:true
            };
        },
        components:{
            fooders,
            Stars
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
        created(){
            this.getServerInfo();
        },
        methods:{
            getServerInfo(){
                 this.$http.get('../../../static/data.json').then((res)=>{
                     this.assessLoading=false;
                     this.seller=res.body.seller;
                     this.ratings=res.body.ratings;
                 });
            }
        }
        
    };
</script>
