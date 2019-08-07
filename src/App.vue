<template>
  <div id="app">
		<router-view></router-view>
  </div>
</template>

<script>
	
export default {
  name: 'App',
	data:function(){
		return{
			
		}
	},
	
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 /* text-align: center; */
  color: #2c3e50;
 /* margin-top: 60px; */
}
@charset "utf-8";
/* CSS Document */
body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,input,select,textarea,td{
	margin:0;
	padding:0;
}
ul,ol,li{
	list-style:none;
}
a{
	text-decoration: none;
}
img{
	border:0;
	display:block;
}
html,body{
	height: 100%;
}
</style>
