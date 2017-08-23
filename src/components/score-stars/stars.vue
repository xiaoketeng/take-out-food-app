<template>
  <div class="stars">
       <ul v-if="sevScore">
           <li v-for="item in on" :key="item" :class="[bgOn,(isImgSmain>0?imgBig:'')]"></li>
           <li v-if="half" :class="[bgHalf,(isImgSmain>0?imgBig:'')]"></li>
           <li v-for="item in off" :key="item" :class="[bgOff,(isImgSmain>0?imgBig:'')]"></li>
      </ul> 
  </div>
</template>
<script>
    export default{
        props:[
          'isImgSmain',
          'sevScore'
        ],
        data(){
            return{
                seller:'',
                bgOn:'bg-on',
                bgHalf:'bg-half',
                bgOff:'bg-off',
                imgBig:'img-big',
                on:0,
                half:0,
                off:0
            };
        },
        created(){
            this.getSellerInfo();
        },
        methods:{
        
            getSellerInfo(){
                if(this.sevScore>=0){
                    this.on=parseInt(this.sevScore);
                    let temp=this.sevScore%this.on;
                    temp=temp.toFixed(1);
                    if(temp>5){
                       this.on=this.on+1;
                    }else if(temp<0){
                       this.half=1;
                    }
                    this.off=5-(this.on+this.half);
                }
                
            }
        }
    };
</script>
<style lang="scss">
   .stars{
       ul,ul li{
           list-style: none;
       }
       .img-big{
           width:18px;
           height: 18px;
           display: inline-block;
           float: left;
       }
       li{
           width:30px;
           height: 30px;
           margin-right:10px;
           display: inline-block;
           float: left;
       }
       .bg-on{
           background-image:url(img/star24_on@3x.png);
           background-size: 100% 100%;
           background-repeat: no-repeat;
       }
       .bg-half{
           background-image:url(img/star24_half@3x.png);
           background-size: 100% 100%;
           background-repeat: no-repeat;
       }
       .bg-off{
           background-image:url(img/star24_off@3x.png);
           background-size: 100% 100%;
           background-repeat: no-repeat;
       }
   }
</style>

