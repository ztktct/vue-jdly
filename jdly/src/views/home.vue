<template>
	<div class="home-header">
		<img :src="logo" alt="" style="opacity:0">
		<a href="#showCollections" class="collections">收藏a</a>
	</div>
	<jdly-list></jdly-list>
</template>

<script>
	import jdlyList from '../components/lists';
	let imgsrc = require('../assets/logo.png');
	export default{
		data(){
			return{
				logo:imgsrc
			}
		},
		components:{
			jdlyList
		}
	}
</script>

<style lang="scss" scoped>
	.home-header{
		background:#fff;
		position:fixed;
		left:0;
		right:0;
		top:0;
		box-shadow: 0 0 5px #333;
		text-align:center;
		padding:10px;
		z-index:3;
	}
	.collections{
		position:absolute;
		right:10px;
		color:pink;
		text-decoration:none;
		top:50%;
		transform:translateY(-50%);
		font-size:14px;
		padding:5px 10px;
		border:1px solid currentColor;
		border-radius:5px;
	}
</style>