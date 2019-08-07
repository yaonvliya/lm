<template>
		<header>
			<div class="header_top">
				<div class="header_top_1">
					<router-link :to="{'name':'xq'}">
					<a href="#"><img src="../assets/img/w4.jpg" alt=""></a>
					</router-link>
				</div>
				<div class="header_top_2">
					<img src="../assets/img/search.jpg" alt="">
					<input type="text" placeholder="睡衣">
				</div>
				<div class="header_top_3">
					<router-link :to="{'name':'submit'}">
					<a href=""><img src="../assets/img/find4.png" alt=""></a>
					</router-link>
				</div>
			</div>
		</header>
	</div>
</template>
 
<script>
	export default{
		 name:'myIndexh1',
		 data:function(){
			
		 },
		 
	}
</script>

<style scoped="scoped">
	
header{
	width:100%;
	/* height:31.6875rem; */
	/* background: yellow; */
	position:relative;
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
.header_top_3 img{
	width: 1.125rem;
    height: 1.125rem;
	margin-left: 1.625rem;
}

	
	
</style>
