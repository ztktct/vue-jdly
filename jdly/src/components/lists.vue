<template>
	<div class="lists" v-el:lists @scroll="scrollLoadData">
		<div class="lists-item" transition="slideup" v-for="item in listsData">
			<figure @click="showContent(item)">
				<div class="imgwrap">
					<img :src="item.imgSrc" alt="item.title">
				</div>
				<figcaption>
					<p>{{item.title}}</p>
					<i class="icon-collection" @click.stop="addAndRemoveCollect(item)" :class="{checked:item.collected}"></i>
				</figcaption>
			</figure>
		</div>
		<!-- 上拉加载动画 -->
		<div class="loading" v-if="hasData">
			<div class="line-scale" ><div></div><div></div><div></div><div></div><div></div></div>
		</div>
		
	</div>
</template>

<script>

import {addAndRemoveCollect,setCurrentPage} from '../vuex/action';

	export default{
		data(){
			return{
				loading:false,	// 当前是否正在加载
				hasData:true,	// 是否还有数据
				listsData:[],	// 列表数据
				page:1 			// 当前页数
			}
		},
		vuex:{
			getters:{
				collections : state => state.collections,
				currentPage : state => state.currentPage
			},
			actions:{
				addAndRemoveCollect,
				setCurrentPage
			}
		},
		methods:{
			// 滚动加载
			scrollLoadData:function(){
				if(this.loading){
					return false;
				}
				// 如果滚动到底部则加载
				if( this.$els.lists.scrollTop >= this.$els.lists.scrollHeight - this.$els.lists.offsetHeight - 10 ){
					this.loading = true;
					getListsData(this);
				}
			},
			// 显示详情页
			showContent:function(item){
				location.hash="#showContent";
				this.setCurrentPage(item);	// 设置当前页面，title,ID
			}
		},
		ready(){
			// 第一页数据
			getListsData(this);
		}
	}

	// 得到第几页的数据
	function getListsData(vm){
		vm.$http.get('http://114.112.24.89:3001/api/index?page='+ vm.page)
			.then( results =>{
				let lists = results.data;
				if(lists.length > 0){
					vm.loading = false;	// 已结束加载
					vm.page++;			// 页数+1

					// 遍历数组，是否已经收藏
					lists.forEach( item =>{
						vm.collections.forEach( collected =>{
							if( item.pid == collected.pid){
								item.collected = true;
								return;
							}
						});
					});

					vm.listsData=vm.listsData.concat(lists);
				}else{
					vm.hasData = false;
				}
				
			});
	}
</script>

<style lang="scss" scoped>
	.lists{
		padding-top:64px;
		display:flex;
		flex-wrap:wrap;
		height:100%;
		overflow:auto;
	}
	.lists-item{
		width:50%;
		padding:5px;
		figure{
			border:1px solid #ccc;
			padding:8px;
			border-radius:5px;
		}
		figcaption{
			display:flex;
			align-items:center;
			justify-content:space-between;
			padding-top:10px;
			font-size:14px;
			p{
				margin:0;
				flex:1;
				padding-right:5px;
				white-space:nowrap;
				overflow:hidden;
				text-overflow:ellipsis;
			}
		}
	}

</style>