<template>
	<div id="page-content" class="page">
		<jdly-header is-content='1'></jdly-header>
		<div class="content-lists">
			<div class="item" v-for="item in imgLists">
				<img data-src="{{item}}" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	import jdlyHeader from '../components/header';
	import Lazyload from '../assets/lazyload';

	let imgload = null;

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
				currentPage: state => state.currentPage,
				showContent: state => state.showContent
			}
		},
		ready(){
			loadContent(this,function(){
				imgload = null;
				setTimeout(function(){
					imgload = new Lazyload({
						attr:'data-src',
						wrap:'.content-lists'
					});
				},5);
			});
		}
	}

	// 加载详情页
	function loadContent(vm,cb){
		vm.$http.get('http://localhost:3001/api/inner?id='+vm.currentPage.pid)
			.then( results =>{
				vm.imgLists = results.data.imgLists;
				cb && cb();
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
			width:100%;
		}
	}
	
</style>