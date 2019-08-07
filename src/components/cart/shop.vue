<template>
	<div class="shop">
		<input type="checkbox"><span>晴天真猪</span>
		<a href="">领劵></a>
	</div>
</template>

<script>
	export default{
		name:'cartShop',
		data:{
			
		}
	}
</script>

<style>
	.shop{
		width:100%;
		height:10px;
		padding:30px;
		/* background: red; */
	}
	.shop input{
		width:23px;
		height:23px;
		border-radius: 100%;
		margin-left:-12px;
		vertical-align: middle;
	}
	.shop span{
		margin-left:5px;
		margin-right:200px;
	}
	.shop a{
		color:black;
	}
</style>
