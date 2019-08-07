<template>
	<header>
		<div class="header_top"></div>
		<div class="header_middle">
			<div class="header_middle_1">
				<div class="header_middle_1_top">
					<h3>新人礼包 限时福利</h3>
				</div>
				<div class="header_middle_1_down">
					<a href=""><img src="../assets/img/m2.jpg" alt=""></a>
					<a href=""><img src="../assets/img/m3.jpg" alt=""></a>
					<a href=""><img src="../assets/img/m4.jpg" alt=""></a>
				</div>
				<div class="header_middle_1_sub">
					<p><a href="">立即领取</a></p>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default{
		name:'myNewgoodsh',
		data:function(){
			
		}
	}
</script>

<style>
	header{
		width:100%;
		height:520px;
		background: yellow;
	}
	.header_top{
		width:100%;
		height:200px;
		background: url("../assets/img/m1.png") no-repeat;
		background-size:100% 200px ;
	}
	.header_middle{
		width:100%;
		height:320px;
		background: #ffe2cf;
	}
	.header_middle_1{
		width:355px;
		height:320px;
		background:white;
		margin:0 10px;
	}
	.header_middle_1_top{
		width:355px;
		height:50px;
		text-align: center;
		line-height: 50px;
	}
	.header_middle_1_down{
		display: -webkit-flex;
		justify-content: space-around;
	}
	.header_middle_1_sub{
		margin-left:50px;
		margin-top:18px;
	}
	.header_middle_1_sub p{
		width:255px;
		height:50px;
		background: #ff5581;
		text-align: center;
		line-height: 50px;
		border-radius: 20px;
	}
	.header_middle_1_sub a{
		font-size: 14px;
		color:white;
	}
</style>
