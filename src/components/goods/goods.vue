<template>
  <div class="goods"  v-loading="goodsLoading"  element-loading-text="拼命加载中">
     <div class="menu">
       <ul>
         <li class="menu-style"  v-for="(item,index) in goods" :key="index">
          <a href="javaScript:void(0)" @click="getMenuList(item.name,'#test'+index)">
            <span class="menu-name"> {{item.name}}</span></a>
         </li>
       </ul>
     </div>
     <div class="menu-list">
       <ul>
         <li class="menu-li " v-for="(item,index) in goods" :key="index" :id="'test'+index"  ref="good">
           <h3 class="goods-name" :name="item.name">{{item.name}}</h3>
           <span v-for="foodInfo in item.foods" :key="foodInfo.num">
             <div class="menu-img">
               <img :src="foodInfo.image"/>
             </div>
             <div class="menu-con">
               <h3>{{foodInfo.name}}</h3>
               <span class="food-desc">{{foodInfo.description}}</span>
               <span class="food-desc">月售{{foodInfo.sellCount}}份&nbsp;&nbsp;好评率{{foodInfo.rating}}%</span>
               <div class="food-desc price">￥<i class="price-num">{{foodInfo.price}}</i>
               &nbsp;&nbsp;<label class="old-price" v-if="foodInfo.oldPrice">￥{{foodInfo.oldPrice}}</label>
               <div class="add-dec">
                 <span class="dec" @click="decFoodNum(item.name,foodInfo.name)" v-if="foodInfo.num>0">-</span>
                 <span class="num" v-if="foodInfo.num>0">{{foodInfo.num}}</span>
                 <span class="add" @click="addFoodNum(item.name,foodInfo.name)" >+</span>
               </div>
               </div>
               </div>
           </span>
         </li>
       </ul>
     </div>
     <fooders :shoppingNum="shoppingNum" :totalPrice="totalPrice"></fooders>
  </div>
</template>
<style lang="scss">
.goods{
  position: fixed;
  height:auto;
  top:308px;
  bottom: 98px;
  z-index:-1;
  display: flex;
  .menu{
    flex: 0 0 162px;
    width:162px;
    overflow-y: auto;
    padding-bottom: 20px;
    max-height:1200px;
    background:#f4f5f7;
   .menu-style{
     width:100%;
     list-style: none;
   .menu-name{
      display: table;
      margin:0 auto;
      width:65px;
      padding:45px 0;
      border-bottom: 1px solid #ccc;
     }
    }
   }
.menu-list{
     overflow-y: auto;
     max-height:1200px;
     padding-bottom: 20px;
    .menu-li{
      margin-bottom:20px;
    }
    ul,li{
       list-style: none;
       margin:0;
       padding:0;
    }
    .goods-name{
      display: block;
      height:57px;
      margin:0;
      padding-left:30px;
      line-height: 57px;
      color:#666;
      border-left:1px solid #ccc;
      background:#f4f5f7;
    }
    span{
      display: flex;
      .menu-img{
        flex: 0 0 112px;
        height:112px;
        padding:30px  0 0 30px;
        img{
          width: 100%;
          height:100%;
        }
      }
      .menu-con{
        flex:1;
        margin-top:30px;
        margin-left:15px;
        
        h3{
          padding:0;
          margin:0;
        }
        .food-desc{
          font-size: 15px;
          position:relative;
          color:#666;
          display: block;
          margin-top:8px;
          .old-price{
              color:#666;
              text-decoration: line-through;
            }
          .add-dec{
            width:138px;
            height:52px;
            position: absolute;
            text-align: center;
            top:0;
            right:20px;
            color:#00a0dc;
            font-size: 700;
            display: flex;
            .dec{
              flex:1;
              flex:0 0 45px;
              width:45px;
              height: 45px;
              font-size: 35px;
              line-height: 45px;
              display: block;
              border-radius: 100%;
              border:2px solid #00a0dc;
            }
            .num{
              flex:0 0 45px;
              width:45px;
              display: block;
              height: 45px;
              text-align: center;
              line-height: 45px;
            }
            .add{
              flex:0 0 45px;
              display: block;
              position: absolute;
              right:0;
              width:45px;
              height: 45px;
              font-size: 35px;
              line-height: 45px;
              border:2px solid #00a0dc;
              border-radius: 100%;
            }
          }
        }
        .price{
          color:red;
          .price-num{
            font-weight: 700;
            font-size: 25px;
            font-style: normal;
          }
        }
      }

    }
  }

}  
</style>
<script>
import {mapState} from 'Vuex';
import fooders from '../fooder/fooder.vue';
  let num=0;
  let typeNum=0;
  let menuNum=0;
  export default {
    computed:{
      ...mapState({
        goodNum(state){
        return state.goodNum;
        },
         foodNum(state){
          return state.foodNum;
        },
        totalPrice(state){
          return state.totalPrice;
        },
        shoppingNum(state){
          return state.shoppingNum;
        }
      })
     },
  data(){
    return{
      goods:[],
      foodsInfo:'',
      newFoods:0,
      show:false,
      goodsLoading:true
      // totalPrice:0,
      // shoppingNum:0
     
      };
  },
  created(){
    this.getMenuInfo();
  },
  components:{
    fooders
  },
  methods:{
    addFoodNum(goodName,foodName){
      let self = this;
        self.goods.forEach((good)=>{
            if(good.name===goodName){
                good.foods.forEach((food)=>{
                     if(food.name===foodName){
                       self.$store.state.shoppingNum+=1;
                        food.num=food.num+1;
                        let foodPrice=food.price;
                        self.$store.state.totalPrice+=foodPrice;
                        self.show=true;
                     }
                });
            }
        });
    },
    decFoodNum(goodName,foodName){
        let self = this;
        self.goods.forEach((good)=>{
            if(good.name===goodName){
                good.foods.forEach((food)=>{
                     if(food.name===foodName){
                        if(food.num!==0){
                        self.$store.state.shoppingNum-=1;
                        food.num=food.num-1;
                         let foodPrice=food.price;
                         self.$store.state.totalPrice-=foodPrice;
                        }
                     }
                });
            }
        });
    },
    getMenuInfo(){
      let self=this;
      self.$http.get('../../../static/data.json').then((res)=>{
        self.goodsLoading=false;
         self.goods=res.body.goods;
         self.$store.state.seller=res.body.seller;
      });
    },
   //获取对应的菜单列表
   getMenuList(name,index){
     let self=this;
     window.location.hash=index;
    self.goods.forEach((item)=>{
      if(item.name===name){
           self.foodsInfo=item;
       }
     });
   }
  }
};
</script>


