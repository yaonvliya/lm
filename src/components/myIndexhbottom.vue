<template>
		
			<div class="header_bottom">
				<ul>
					<li><span>发现</span></li>
					<li><span>关注</span></li>
					<li><span>流行</span></li>
				</ul>
			</div>
		
</template>
 
<script>
	export default{
		 name:'myIndexhbottom',
		 data:function(){
			
		 },
		 
	}
</script>

<style scoped="scoped">
	
.header_bottom{
	width: 100%;
	height: 3.125rem;
	/* background: royalblue; */
	text-align: center;
	line-height:3.125rem ;
}
.header_bottom ul{
	display: flex;
	}
.header_bottom li{
	height:2.5rem;
	margin:0 2.625rem;
	
}
.header_bottom li:hover{
	border-bottom: 1px solid red;
}	
	
	
</style>
