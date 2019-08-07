<template>
	<header>
		<h3 class="sub">登录</h3>
		<div class="weixins">
			<img src="img/w1.jpg" alt="">
			<span>微信登录</span>
		</div>
		<p class="xian"></p>
		<p class="other">其他登录方式</p>
		<div class="others">
			<ul>
				<li><a href=""><img src="img/w2.jpg" alt=""><span>QQ登录</span></a></li>
				<li><a href=""><img src="img/w3.jpg" alt=""><span>免密登录</span></a></li>
				<li><a href=""><img src="img/w5.jpg" alt=""><span>账号登录</span></a></li>
			</ul>
		</div>
	</header>
</template>

<script>
	export default{
		name:'submit',
		data:function(){
			
		}
	}
</script>

<style>
	header{
		width:100%;
		height:29.3125rem;
		/* background: #FF0000; */
		
		padding-top:80px;
	}
	.sub{
		font-weight:10;
		font-size:30px;
		/* margin-left: 155px; */
	}
	
	.weixins{
		width:15.6875rem;
		height:3.25rem;
		background: #09bb07;
		display:flex;
		justify-content: center;
		align-items: center;
		border-radius: 20px;
		margin-left: 66px;
		margin-top: 40px;
	}
	.weixins img{
		margin-right: 10px;
	    margin-top: 5px;
	}
	.xian{
		width:20px;
		height:20px;
		border-bottom:1px solid #999999;
		margin-left: 178px;
	    margin-top: 54px;
	}
	.weixins span{
		color:white;
		font-size: 14px;
	}
	.other{
		color:#999999;
		font-size: 14px;
		margin-top: 39px;
		/* margin-left: 153px; */
	}
	.others{
		display: flex;
		width:15.6875rem;
		height:88px;
		/* background: #09bb07; */
		margin-left: 66px;
		margin-top: 43px;
	}
	.others ul{
		display: flex;
		
	}
	.others li {
		margin:10px 15px 0 21px;
		text-align: center;
	}
	.others span{
		color:#999999;
		font-size: 12px;
		margin-top: 20px;
	}
	.others img{
		margin-bottom: 20px;
	}
	
</style>
