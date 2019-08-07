<template>
	<div>
		<div class="shoplist">
			<div class="shoplist_left">
				<input type="checkbox">
				<a href=""><img src="../../assets/img/g1.jpg" alt=""></a>
			</div>
			<div class="shoplist_right">
				<p class="word">
					韩版新品显瘦裤子 春夏柔软棉弹高腰牛仔裤垂感宽松显瘦九分裤毛边不规则鱼尾下的聚会无二
				</p>
				<p class="sizecolor">颜色：<span>黑色</span> 尺码：<span>26</span></p>
				<span class="price">￥69.00</span><span class="price1">￥96.00</span>
				<p ><span class="jprice">降价27.00元</span></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'cartShoplist',
		data:{
			
		}
	}
</script>

<style>
	.shoplist{
		width:100%;
		height:143px;
		/* background: yellowgreen; */
		display: flex;
	}
	.shoplist_left{
		width:143px;
		height:143px;
		display:flex;
		/* background: #007AFF; */
	}
	.shoplist_left input{
		width: 23px;
		height: 23px;
		border-radius: 100%;
		margin: 49px 20px 0;
	}
	.shoplist_left img{
		width:80px;
		height:120px;
		
	}
	.shoplist_right{
		width:232px;
		height:143px;
		background:white;
	}
	.word{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-size: 14px;
		line-height: 20px;
	}
	.sizecolor{
		color:#9DA0A4;
		font-size: 12px;
		margin-bottom: 45px;
	}
	.price{
		color:black;
		font-size: 18px;
	}
	.price1{
		color:#9DA0A4;
		font-size: 12px;
		text-decoration: line-through;
	}
	.jprice{
		color:red;
		font-size: 14px;
		border:1px solid red;
	}
</style>
