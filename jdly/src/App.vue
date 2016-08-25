<template>
	<jdly-home></jdly-home>
	<jdly-collections v-if="showCollect" transition="slideleft"></jdly-collections>
	<jdly-content v-if="showContent" transition="slideleft"></jdly-content>
</template>

<script>
	// 引入基础样式
	import style from './components/styles';
	import jdlyHome from './views/home';
	import jdlyContent from './views/content';
	import jdlyCollections from './views/collections';
	import {toggleCollections,toggleContent} from './vuex/action';

	export default{
		components:{
			jdlyHome,
			jdlyContent
		},
		vuex:{
			getters:{
				showCollect : state => state.showCollect,
				showContent : state => state.showContent,
			},
			actions:{
				toggleCollections,
				toggleContent
			}
		},
		ready(){
			let _self = this;
			location.hash='';
			// 监听hashchange事件
			window.addEventListener('hashchange',()=>{
				let hashArr = location.hash.split('#');
				let hash = hashArr.length >1 ? hashArr[1] : hashArr[0];
				
				switch(hash){
					// 切换到收藏页面
					case 'showCollections':
						_self.toggleCollections(true);
						break;
					// 切换到详情页面
					case 'showContent':
						_self.toggleContent(true);
						break;
					// 首页
					default:
						_self.toggleCollections(false);
						_self.toggleContent(false);
						break;
				}
			});
		}
	}
</script>

<style>

</style>