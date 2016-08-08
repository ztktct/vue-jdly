<template >
	<div id="content" v-if="showContent" transition="slide" >
		<header class="head">
			<i class="icon-back" @click="toggleContent"></i>
			<h2>{{content.title}}</h2>
			<i class="icon-collection white" :class="{checked:content.collected}"></i>
		</header>
		<div class="lists">
			<div class="item" v-for="img in content.imgLists" track-by="$index">
				<img :src="img">
			</div>
		</div>
	</div>
</template>

<script>
	import {toggleContent} from '../../vuex/action';

	const WEBSIT = 'http://114.112.24.89:3001/api/';

	export default {
		data(){
			return{
				content:{
					title:'',
					pid:'',
					imgLists:[],
					collected:false
				}
			}
		},
		watch:{
			'currentContentId':function(){
				this.content={
					title:'',
					pid:'',
					imgLists:[],
					collected:false
				};
				this.$http.get(`${WEBSIT}inner?id=${this.currentContentId}`)
					.then(function(result){
						let data = result.data;
						this.content ={
							title:data.title,
							pid:data.pid,
							imgLists:data.imgLists,
							collected:data.collected
						}; 
						
					},function(err){
						console.log(err);
					});
			}
		},
		vuex:{
			getters:{
				showContent : state => state.showContent,
				currentContentId : state => state.currentContentId
			},
			actions:{
				toggleContent
			}
		}
	}
</script>

<style lang="scss" scoped>
	#content{
		position:absolute;
		z-index:10;
		height:100%;
		overflow:hidden;
		top:0;
		left:0;
		right:0;
		bottom:0;
		background:#fff;
	}
	.slide-transition{
		transition:transform .4s ease;
		transform:translate3d(0,0,0);
	}
	.slide-enter,.slide-leave{
		transform:translate3d(100%,0,0);
	}
	.head{
		display:flex;
		align-items:center;
		justify-content:space-between;
		padding:10px;
		background:pink;
		position:absolute;
		top:0;
		left:0;
		right:0;
		h2{
			margin:0;
			font-weight:normal;
			font-size:16px;
			color:#fff;
			max-width:80%;
			overflow:hidden;
			text-overflow:ellipsis;
			white-space:nowrap;
		}
	}
	.lists{
		height:100%;
		overflow:auto;
		padding:48px 10px 10px;
		.item{
			margin-bottom:10px;
			img{
				width:100%;
			}
		}
	}
</style>