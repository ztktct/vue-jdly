<template>
	<header class="normal-header">
		<i class="icon-back" @click="goback"></i>
		<h2>{{isContent == 1 ? currentPage.title : '我的收藏'}}</h2>
		<!-- 如果是详情页则显示,0为不显示，1为详情页,显示 -->
		<i class="icon-collection white" @click="addAndRemoveCollect(currentPage)" :class="{checked:currentPage.collected}" v-if="isContent == 1"></i>
	</header>
</template>

<script>
	// action
	import {toggleContent,toggleCollections,addAndRemoveCollect} from '../vuex/action.js';

	export default{
		props:['isContent'],
		methods:{
			// 返回上一页
			goback:function(){
				window.history.go(-1);
			}
		},
		vuex:{
			getters:{
				showCollect: state => state.showCollect,
				showContent: state => state.showContent,
				currentPage: state => state.currentPage
			},
			actions:{
				toggleCollections,		// 切换显示收藏页
				toggleContent,			// 切换显示详情页
				addAndRemoveCollect		// 收藏与取消收藏
			}
		}
	}
</script>

<style lang="scss">

</style>