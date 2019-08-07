<template>
	<header>
		<div class="header_top">
			<div class="header_top_1">
				<img src="../assets/img/w4.jpg" alt="">
			</div>
			<div class="header_top_2">
				<img src="img/search.jpg" alt="">
				<input type="text" placeholder="汉服">
				<img src="img/g5.jpg" alt="">
			</div>
			<div class="header_top_3">
				<router-link :to="{'name':'mycart'}">
				<a href=""><img src="../assets/img/n7.jpg" alt=""></a>
				</router-link>
			</div>
		</div>
		<div class="section_right_middle">
			<ul>
				<li><span>&nbsp;&nbsp;综合&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span></li>
				<li><span>&nbsp;&nbsp;销量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span></li>
				<li><span>&nbsp;&nbsp;新品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span></li>
				<li>
					<span>&nbsp;&nbsp;价格</span>
					<span><img src="../assets/img/g3.jpg" alt=""></span>
				</li>
	
			</ul>
		</div>
	</header>
</template>

<script>
	export default{
		name:'myGirlclose',
		data:function(){
			
		}
	}
</script>

<style>
	header{
		width:100%;
		height:5.8125rem;
	}
	.header_top{
		width:100%;
		height:3.125rem;
		/* background: yellowgreen; */
		display:-webkit-flex;
		-webkit-flex: 1;
		align-items: center;
		border-bottom:1px solid #999999;
	}
	.header_top_1 img{
		width:2.125rem;
		height:2.125rem;
	}
	.header_top_2{
	    width: 16.25rem;
	    height: 2.125rem;
		background: #ececec;
		display: -webkit-flex;
		/* margin-top: 0.625rem; */
		margin-left: 1.625rem;
	}
	.header_top_2 img:nth-child(1){
		width: 1.125rem;
	    height: 2.125rem;
		
	}
	.header_top_2 img:nth-child(3){
		width: 25px;
	    height: 28px;
	}
	.header_top_2 input{
		width: 16.25rem;
	    height: 2.125rem;
		border:none;
		background: #ececec;
	}
	.header_top_3 img {
	    width: 2.125rem;
	    height: 2.125rem;
	    margin-left: 0.625rem;
	}
</style>
