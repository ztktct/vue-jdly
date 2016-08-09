<template>
	<div id="lists" v-el:lists @scroll="scrollLoadData(currentPage)">
		<div class="item" v-for="item in listData" transition='slide' @click="toggleContent()&setCurrentItem(item)" >
			<figure>
				<img :src="item.imgSrc || 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='"  alt="">
				<figcaption>
					<span class="title">{{item.title}}</span>
					<i class="icon-collection" :class="{checked:item.collected}" @click.stop="toggleCollection(item)"></i>
				</figcaption>
			</figure>
		</div>
		<!-- 加载动画 -->
		<div class="line-scale" v-if="hasData"><div></div><div></div><div></div><div></div><div></div></div>
	</div>
</template>

<script>
	import {toggleContent,setCurrentItem,toggleCollection} from '../../vuex/action';
	// 当前是否在加载
	let IS_LOADING = false;
	// 是否还有数据
	let HAS_DATA = true;

	const WEBSIT = 'http://114.112.24.89:3001/api/';

	export default {
		data(){
			return {
				listData:[],		// 列表数据
				currentPage:1,		// 当前页数
				hasData: HAS_DATA	// 是否还有数据
			}
		},
		methods:{
			// 加载分类下的第几页数据
			loadDataPage(page,type=""){
				this.$http.get(`${WEBSIT}index?page=${page}&type=${type}`)
					.then(function(result){
						if(result.length<=0){
							HAS_DATA = false;
							return false;
						}
						IS_LOADING = false;
						this.currentPage++;
						
						// 判断数据是否已经收藏
						for(let i=0,j=result.data.length;i<j;i++){
							let res = result.data[i];
							
							this.collections.forEach(item =>{
								// 如果已收藏
								if(res.pid == item.pid){
									res.collected = true;
								}
								
							});
						}
						// 保存数据
						this.listData = this.listData.concat(result.data);
					},function(err){
						console.log(err);
					});

			},
			// 滚动加载
			scrollLoadData:function(page){
				if(IS_LOADING){
					return false;
				}
				// 如果滚动到底部则加载
				if( this.$els.lists.scrollTop >= this.$els.lists.scrollHeight - this.$els.lists.offsetHeight - 10 ){
					IS_LOADING = true;
					this.loadDataPage(page);
				}
			}
		},
		// 页面数初始化时加载第一页数据
		ready(){
			this.loadDataPage(1);
		},
		vuex:{
			getters:{
				showContent : state => state.showContent,
				currentContent : state => state.currentContent,
				collections : state => state.collections
			},
			actions:{
				toggleContent,
				setCurrentItem,
				toggleCollection
			}
		}
	};
</script>

<style lang="scss" scoped>
	
	#lists{
		height:100%;
		overflow:auto;
		padding-top:76px;
		display:flex;
		flex-wrap:wrap;
		justify-content: center;
	}
	.item{
		width:50%;
		padding:5px;
		img{
			width:100%;
		}
		figure{
			border:1px solid #ccc;
			padding:8px;
		}
		figcaption{
			display:flex;
			align-items:center;
			padding-top:10px;
			justify-content:space-between;
			font-size:14px;
			span{
				display:inline-block;
				max-width:80%;
				white-space:nowrap;
				text-overflow:ellipsis;
				overflow:hidden;
			}
		}
	}
	.slide-transition{
		transition:all ease .5s;
		transform:translate3d(0 ,0,0);
		opacity:1;
	}
	.slide-enter,.slide-leave{
		transform:translate3d(0,50%,0);
		opacity:0;
	}

	@keyframes line-scale {
		0% {transform: scaley(1); }
		50% {transform: scaley(0.4); }
	 	100% {transform: scaley(1); } 
	}

	.line-scale > div:nth-child(1) {
	          animation: line-scale 1s 0.1s infinite cubic-bezier(.2, .68, .18, 1.08); }
	.line-scale > div:nth-child(2) {
	          animation: line-scale 1s 0.2s infinite cubic-bezier(.2, .68, .18, 1.08); }
	.line-scale > div:nth-child(3) {
	          animation: line-scale 1s 0.3s infinite cubic-bezier(.2, .68, .18, 1.08); }
	.line-scale > div:nth-child(4) {
	          animation: line-scale 1s 0.4s infinite cubic-bezier(.2, .68, .18, 1.08); }
	.line-scale > div:nth-child(5) {
	          animation: line-scale 1s 0.5s infinite cubic-bezier(.2, .68, .18, 1.08); }
	.line-scale > div {
	  background-color: pink;
	  width: 4px;
	  height: 35px;
	  border-radius: 2px;
	  margin: 2px;
	  animation-fill-mode: both;
	  display: inline-block; }

</style>