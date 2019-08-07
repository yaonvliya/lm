<template>
	<div class="footer">
		<span>
			<input type="checkbox" class="checkb" id="checkb">
			<label for="checkb">全选（<span>0</span>）<span class="allprice">￥0.00</span></label>
		</span>
		<span class="pay">去结算</span>
	</div>
</template>

<script>
	export default{
		name:'cartFooter',
		data:{
			
		}
	}
</script>

<style>
	.footer{
		width:100%;
		height:50px;
		/* background: yellow; */
	    line-height:50px;
		}
	.footer span:nth-child(1){
		margin-top:20px
		}
	.checkb{
		width: 23px;
		height: 23px;
		margin-left:20px ;
		vertical-align: middle;
		}
	.allprice{
		color: red;
		font-size: 14px;
	}
	.pay{
		width: 91px;
		height: 50px;
		margin-left: 111px;
		background: red;
		color: white;
		font-size: 21px;
		display: inline-block;
		text-align: center;
		line-height: 50px;
		margin-top: -81px;
	}
</style>
