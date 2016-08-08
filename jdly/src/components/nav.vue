<template>
	<nav @click="toggleNav" class="slide-transition" :class="{'slide-show':showNave}">
		<ul>
			<li v-for="item in navData" data-href="{{ website + item.href }}">
				{{ item.tit }}
			</li>
		</ul>
	</nav>
</template>

<script>
	import {toggleNav} from '../../vuex/action.js';

	// 网站前缀
	const WEBSITPREFIX = 'http://www.jdlingyu.moe/';
	const navData = [
		{
			tit:'首页',
			href:''
		},
		{
			tit:'专题',
			href:'专题/'
		},
		{
			tit:'特点',
			href:'特点/'
		},
		{
			tit:'弄潮',
			href:'弄潮/'
		},
		{
			tit:'COS',
			href:'COS/'
		},
		{
			tit:'写真',
			href:'写真/'
		}
	];
	export default {
		data(){
			return{
				website:WEBSITPREFIX,
				navData:navData
			}
		},
		vuex:{
			getters:{
				showNave: state => state.showNave
			},
			actions:{
				toggleNav
			}
		}
	}
</script>

<style lang="scss" scoped>
	nav{
		height:100%;
		overflow:auto;
		color:#fff;
		position:absolute;
		top:0;
		left:0;
		z-index:5;
		width:100%;
		ul{
			height:100%;
			background:#333;
			margin:0;
			list-style:none;
			padding-top:10vh;
			padding-left:0;
			width:40%;
		}
		li{
			padding:.75em 0;
			text-align:center;
		}
	}

	.slide-transition{
		transition:all .5s ease;
		opacity:0;
		transform:translate3d(-100%,0,0);
	}
	.slide-show{
		opacity:1;
		transform:translate3d(0,0,0);
	}
</style>