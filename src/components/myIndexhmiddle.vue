<template>
		
			<div class="header_middle">
				<div class="header_middle_1">
					<ul>
						<li >
							<router-link :to='{ "name": "newgoods"}'>
								
							<a href="">
								<img src="../assets/img/h1.jpg" alt="">
								<span>新人福利</span>
							</a>
							</router-link>
						</li>
						<li>
							<a href="">
								<router-link :to='{"name":"girlclose"}'>
								<img src="../assets/img/h2.jpg" alt="">
								<span>女装</span>
								</router-link>
							</a>
						</li>
						<li>
							<a href="">
								<img src="../assets/img/h3.jpg" alt="">
								<span>新人福利</span>
							</a>
						</li>
						<li>
							<a href="">
								<img src="../assets/img/h4.jpg" alt="">
								<span>新人福利</span>
							</a>
						</li>
						<li>
							<a href="">
								<img src="../assets/img/h5.jpg" alt="">
								<span>新人福利</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="header_middle_1">
					<ul>
						<li>
							<a href="">
								<img src="../assets/img/h1.jpg" alt="">
								<span>新人福利</span>
							</a>
						</li>
						<li>
							<a href="">
								<img src="../assets/img/h2.jpg" alt="">
								<span>新人福利</span>
							</a>
						</li>
						<li>
							<a href="">
								<img src="../assets/img/h3.jpg" alt="">
								<span>新人福利</span>
							</a>
						</li>
						<li>
							<a href="">
								<img src="../assets/img/h4.jpg" alt="">
								<span>新人福利</span>
							</a>
						</li>
						<li>
							<a href="">
								<img src="../assets/img/h5.jpg" alt="">
								<span>新人福利</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="header_middle_1">
					<ul>
						<li>
							<a href="">
								<img src="../assets/img/h1.jpg" alt="">
								<span>新人福利</span>
							</a>
						</li>
						<li>
							<a href="">
								<img src="../assets/img/h2.jpg" alt="">
								<span>新人福利</span>
							</a>
						</li>
						<li>
							<a href="">
								<img src="../assets/img/h3.jpg" alt="">
								<span>新人福利</span>
							</a>
						</li>
						<li>
							<a href="">
								<img src="../assets/img/h4.jpg" alt="">
								<span>新人福利</span>
							</a>
						</li>
						<li>
							<a href="">
								<img src="../assets/img/h5.jpg" alt="">
								<span>新人福利</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			
</template>
 
<script>
	export default{
		 name:'myIndexhmiddle',
		 data:function(){
			
		 },
		 
	}
</script>

<style scoped="scoped">
.header_middle{
	 width: 100%;
	height: 15.75rem;
	/* background: cyan; */
	}
.header_middle_1 ul {
	display: flex;
	margin-top:6px;
}
.header_middle_1 li{
	margin:0 0.6875rem;
}
.header_middle_1 li span{
	font-size: 0.75rem;
	color:black;
}

	
	
</style>
