<template>
	<header>
		<div class="header_top">
			<img src="../../assets/img/g5.jpg" alt="" class="header_img1">
			<span>购物车（<span>72</span>）</span>
			<span class="header_span">编辑</span><img src="../../assets/img/find4.png" alt="" class="header_img2">
			
		</div>
	</header>
</template>

<script>
	export default{
		name:'cartHeader',
		data:{
			
		}
	}
</script>

<style>
	.header_top{
		width:100%;
		height:50px;
		/* background: yellow; */
		display: flex;
		align-items: center;
		border-bottom: 1px solid #9DA0A4;
	}
	.header_img1{
		width:30px;
		height:30px;
	}
	.header_top span:nth-child(2){
		margin:0 90px
	}
	.header_img2{
		width:30px;
		height:30px;
		display: inline;
	}
	
</style>
