<template>
	<div id="newgoods">
		<my-newgoodsh></my-newgoodsh>
		<my-newgoodss></my-newgoodss>
	</div>
		
	
</template>

<script>
	import myNewgoodsh from '../components/myNewgoodsh'
	import myNewgoodss from '../components/myNewgoodss'
	export default{
		name:'newgoods',
		data:function(){
			
		},
		components:{
			myNewgoodsh,myNewgoodss
		}
	}
</script>

<style>
</style>
