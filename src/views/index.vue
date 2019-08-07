<template>
  <div id="app">
		<my-indexh1></my-indexh1>
		<banner></banner>
		<my-indexhmiddle></my-indexhmiddle>
		<my-indexhbottom></my-indexhbottom>
		<my-indexs1></my-indexs1>
  </div>
</template>

<script>
	import myIndexh1 from '../components/myIndexh1';
	import banner from '../components/banner';
	import myIndexhmiddle from '../components/myIndexhmiddle';
	import myIndexhbottom from '../components/myIndexhbottom';
	import myIndexs1 from '../components/myIndexs1';
export default {
  name: 'index',
	data:function(){
		return{
			
		}
	},
	components:{
		myIndexh1,banner,myIndexhmiddle,myIndexhbottom,myIndexs1
	}
}
</script>

<style>
</style>
