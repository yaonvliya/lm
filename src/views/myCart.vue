<template>
	<div>
		<cart-header></cart-header>
	  <div class="mycart_shop">
			<div>
				<cart-shop></cart-shop>
				<div>
						<cart-shoplist></cart-shoplist>
						<cart-shoplist></cart-shoplist>
						<cart-shoplist></cart-shoplist>
				</div>
				
			</div>
			<div>
				<cart-shop></cart-shop>
				<div>
						<cart-shoplist></cart-shoplist>
						<cart-shoplist></cart-shoplist>
						<cart-shoplist></cart-shoplist>
				</div>
				
			</div>
		</div>
				
		<cart-footer></cart-footer>
	</div>
</template>

<script>
	import cartHeader from '../components/cart/cartHeader'
	import cartShop from '../components/cart/shop'
	import cartShoplist from '../components/cart/shopList'
	import cartFooter from '../components/cart/footer'
	// import cartapi from '../api/CartApi'
	export default{
		name:'myCart',
		data:function(){
			return {
				cartinfo:{}
			}
		},
		components:{
			cartHeader,cartShop,cartShoplist,cartFooter
		},
// 		created:function(){
// 			this._init();
// 		},
// 		methods:{
// 			_init(){
// 				cartapi.getCartInfoByUserId((data)=>{
// 				this.cartinfo=data;
// 		})
// 	}
// 			
// 		}
	}
</script>

<style>
	.mycart_shop{
		height:567px;
		-webkit-flex: 1;
		overflow-y:auto;
		}
</style>
