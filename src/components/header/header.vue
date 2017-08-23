<template>
  <div class="header" v-loading="headerLoading"
    element-loading-text="拼命加载中">
      <div class="header-info" v-if="seller">
        <div class="header-img">
          <img :src="seller.avatar"/>
        </div>
        <div class="header-main">
          <p><img src="./img/brand@3x.png"><label>{{seller.name}}</label></p>
          <p>{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
          <p><img src="./img/decrease_1@2x.png">
          <label>{{seller.supports[0].description}}，满50减10</label>
            <span class="num" @click="showDialog">
              {{seller.supports.length}}个>
            </span>
          </p>
        </div>
         <div class="notice" @click="showDialog">
           <img src="./img/bulletin@3x.png"/>
           <span>{{seller.bulletin}}</span>
         </div>
         <div class="background"></div>
      </div>
      <div class="tab">
        <router-link to="/goods"><span>商品</span></router-link>
        <router-link to="/assess"><span>评价</span></router-link>
        <router-link to="/business"><span>商家</span></router-link>
      </div>
  </div>
</template>
<script>
import {mapState} from 'Vuex';
  export default{
    data(){
      return{
        seller:'',
        headerLoading:true    
      };
    },
    created(){
      
      this.getHeaderINfo();
    },
    comments:{
      ...mapState({
        isShow(state){
          return state.isShow;
        }
      })
    },
    methods:{
      getHeaderINfo(){
        let self=this;
          self.$http.get('../../../../static/data.json').then((res)=>{
          self.seller=res.body.seller;
          self.headerLoading=false;
     });
     
      },
      showDialog(){
         this.$store.state.isShow=true;
      }
    }
  };
</script>
<style lang="scss">
   .header{
       position: fixed;
       z-index: 1000;
       width:100%;
       height:320px;
       background: #fff;
       .header-info{
         position: relative;
         overflow: hidden;
         display: flex;
         flex-wrap:wrap;
        .background{
         width:100%;
         height:100%;
         position: absolute;
         top:0;
         left:0;
         background-image:url(http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg);
         filter:blur(10px);
         background-size: 100% 100%;
         z-index:-100;
       }
         .header-img{
            flex:0 0 134px;
            display: inline-block;
            width:134px;
            height:134px;
            background-size:100% 100%; 
            margin:32px;
            img{
              width: 100%;
              height:100%;
            }
         }
         .header-main{
           flex:1 1 0;
           margin-top:32px;
           font-size: 25px;
           font-weight: 700;
           p:first-child{
            margin-top:0;
            padding-top:0;
            font-size: 30px;
            display: flex;            
            img{
             flex: 0 0 60px;
             display: inline-block;
             margin:auto 0;
             height:35px;
             width:40px;
             margin-right:10px;
            }

           }
           p:last-child{
             position: relative;
             font-size: 18px;
              font-weight:normal;
              label{
                display: inline-block;
                height:20px;
                line-height: 20px;
                float: left;
                font-size: 20px;

              }
              img{
                display: inline-block;
                width:20px;
                float: left;
                height:20px;
                margin-right:10px;
              }
             span{
               display: inline-block;
               position: absolute;
               right:20px;
               top:-18px;
               width:80px;
               height:43px;
               line-height: 43px;
               text-align: center;
               color:#fff;
               border-radius: 20px;
               background: rgba(62,62,62,0.4);
             }
           }
         }
         .notice{
           margin-left:34px;
           margin-right:20px;
           margin-bottom: 10px;
             font-size: 20px;
             padding-right:20px ;
             text-overflow: ellipsis;
             overflow:hidden;
             white-space:nowrap;
          
           img{
             height: 23px;
             display: inline-block;
             margin-right:10px;
             width:45px;
             float: left;
           }
         }
         .header-main:after{
           clear:both;
           content: '.';
           visibility: hidden;
           display: block;
           height:0;
         }
       }
     .tab{
       width:100%;
       display:flex;
       height:85px;
       background: #fff;
       font-size: 20px;
       font-weight: 700;
       border-bottom: 1px solid #ccc;
       line-height: 85px;
       a{
         flex:1;
         display: block;
         text-align: center;
         color:black;
         
       }
     }
   }
</style>

