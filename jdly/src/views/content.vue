<template>
	<div id="page-content" class="page">
		<jdly-header is-content='1'></jdly-header>
		<div class="content-lists">
			<div class="item" v-for="item in imgLists">
				<img :src="item" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	import jdlyHeader from '../components/header';
	export default{
		data(){
			return{
				imgLists:[]		// 存放页面的列表数据
			}
		},
		components:{
			jdlyHeader
		},
		vuex:{
			getters:{
				currentPage: state => state.currentPage
			}
		},
		ready(){
			loadContent(this);
		}
	}

	// 加载详情页
	function loadContent(vm){
		vm.$http.get('http://114.112.24.89:3001/api/inner?id='+vm.currentPage.pid)
			.then( results =>{
				vm.imgLists = results.data.imgLists;
			});
	}
</script>

<style lang="scss" scoped>
	#page-content{
		height:100%;
		position:absolute;
		background:#fff;
		z-index:20;
	}
	.content-lists{
		padding:45px 5px 10px;
		height:100%;
		overflow:auto;
		img{
			margin-bottom:5px;
		}
	}
</style>