<template>
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide"><img src="../assets/img/m1.png" alt=""></div>
	        <div class="swiper-slide"><img src="../assets/img/m2.jpg" alt=""></div>
	        <div class="swiper-slide"><img src="../assets/img/m3.jpg" alt=""></div>
	    </div>
		 <!-- Add Pagination -->
		<div class="swiper-pagination"></div>
	    
	    <!-- 如果需要导航按钮 -->
	   <!-- <div class="swiper-button-prev"></div>
	    <div class="swiper-button-next"></div> -->
	    
	</div>
</template>

<script>
import Swiper from 'swiper';//模块化的使用。
// import '../assets/css/swiper.min.js';	
  // import swiper.min from '../assets/css';
export default{
	name:"banner",
	data:function(){
		return {
			
		}
	},
	mounted:()=>{
		var mySwiper = new Swiper ('.swiper-container', {
		    loop: true, // 循环模式选项
		    autoplay: {
		    	delay: 2500,
		    	stopOnLastSlide: false,
		    	disableOnInteraction: true,
		    },
		    // 如果需要分页器
		    pagination: {
		      el: '.swiper-pagination',
		    },
		    
		    // 如果需要前进后退按钮
		    navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    }
		  })        

	}
}	
</script>

<style scoped="scoped">
@import '../assets/css/swiper.min.css';

.swiper-container{
	width: 100%;
    height: 150px;
	background-color: hotpink;
}	

img{
	width: 100%;
    height: 150px;
}

div{
	font-size:12px;
}

.swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
	
</style>
