<template>
	<header>
		<div class="header_top">
			<div class="header_top_1">
				<img src="img/w4.jpg" alt="">
			</div>
			<div class="header_top_2">
				<img src="img/search.jpg" alt="">
				<input type="text" placeholder="汉服">
			</div>
			<div class="header_top_3">
				<a href=""><img src="img/n7.jpg" alt=""></a>
			</div>
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
		height:3.125rem;
		position:fixed;
		left:0;
		top:0;
		z-index:100;
		background: white;
	}
	.header_top{
		width:100%;
		height:3.125rem;
		/* background: yellowgreen; */
		display:-webkit-flex;
		-webkit-flex: 1;
		align-items: center;
		
	}
	.header_top_1 img{
		width:2.125rem;
		height:2.125rem;
	}
	.header_top_2{
	    width: 16.25rem;
	    height: 2.125rem;
		/* background: red; */
		display: -webkit-flex;
		/* margin-top: 0.625rem; */
		margin-left: 1.625rem;
	}
	.header_top_2 img{
		width: 1.125rem;
	    height: 2.125rem;
	}
	.header_top_2 input{
		width: 16.25rem;
	    height: 2.125rem;
		border:none;
	}
	.header_top_3 img {
	    width: 2.125rem;
	    height: 2.125rem;
	    margin-left: 0.625rem;
	}
</style>
