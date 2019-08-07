<template>
	<section>
		<div class="section_1" v-for="item in goodslist">
			<div class="section_1_one" >
				<router-link :to='index'>
					<div class="section_1_one_top">
						<a href=""><img :src="'../assets/img/'+item.goodspath1" alt=""></a>
						<p class="xq">{{item.goodsxq}}</p>
					</div>
					<div class="section_1_one_down">
						<div class="section_1_one_down_left">
							<a href=""><img :src="'../assets/img/'+item.goodspath2" alt=""></a>
						</div>
						<div class="section_1_one_down_right">
							<a href=""><h6>{{item.goodsauthur}}</h6></a>
							<p class="length">{{item.goodslength}}</p>
						</div>
					</div>
				</router-link>
			</div>
			</div>
			 </section>
</template>

<script>
	export default{
		name:'myindexs1',
		// props:['typeList'],
		data:function(){
			goodslist:[]
			
		},
		created:function(){
			fetch('http://localhost:3000/typeLists')
			.then((res)=>{
				return res.json();
				// return res;
			})
			.then((datas)=>{
				 this.goodslist = datas;
				
// 				for(let i in typeLists){
// 					if(goodslist[i].goodsid==this.$route.params.goodsid){
// 						this.goodsdetail = goodslist[i];
// 						console.log(this.goodsdetail);
// 						break;
// 				console.log(datas)
// 				this.typeLists = datas;
// 				let typeLists=this.typeLists;
// 				console.log(this.typeLists)
				console.log(this.goodslist)
				//console.log(this.goodslist.item)
// // 			
// 		}
// 		}
	})
	},
	}
</script>



<style scoped>
	section{
		width:100%;
		height:100%;
		/* background: #FF0000; */
		overflow: auto;
	}
	.section_1{
		width:100%;
		height:295px;
		/* background:yellowgreen; */
		padding:5px 5px;
		display: flex;
	}
	.section_1_one{
		width:7.1875rem;
		height:18.125rem;
		/* background:cyan; */
		margin: 4px;
	}
	.section_1_one_top{
		width:7.1875rem;
		height:14.9375rem;
		/* background:cyan; */
	}
	.section_1_one_down{
		width:7.1875rem;
		/* height:/* 4.9375rem; */ 
		/* background:red; */
		display: flex;
		padding-top: 0.625rem;
	}
	.xq{
		width:7.1875rem;
		/* height:14.9375rem; */
		font-size: 12px;
		color:#999999;
		 overflow: hidden;
	      text-overflow: ellipsis;
	      display: -webkit-box;
	      -webkit-line-clamp:2;
	      -webkit-box-orient:vertical;
		  margin-top: 10px;
	}
	.section_1_one_down_right{
		margin-left: 10px;
	}
	.length{
		font-size: 12px;
		
	}
</style>
