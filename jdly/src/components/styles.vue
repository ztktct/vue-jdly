<style lang="scss">
	html,body{
		height:100%;
		overflow:hidden;
	}
	/* 通用样式 */
	[class*='icon-']{
		display: inline-block;
		background-size: contain;
		background-repeat:no-repeat;
		background-position:center;
	}
	// 返回图标
	.icon-back {
	    width: 18px;
	    height: 18px;
	    background-image: url('../assets/left.png');
	}
	// 收藏图标
	.icon-collection {
	    width: 18px;
	    height: 18px;
	    background-image: url('../assets/icon_favorite_grey.png');
	    &.white{
	    	background-image: url('../assets/icon_favorite_white.png');
	    }
	    &.checked{
	    	background-image: url('../assets/icon_favorite.png');
	    }
	}

	// 动画
	@keyframes fadeIn{
		from{opacity:0;}
		to{opacity:1;}
	}
	img[imgloaded]{
		animation:fadeIn .5s ease;
	}
	// 渐显
	.opacity-transition{
		opacity:1;
		transition:opacity .3s ease;
	}
	.opacity-enter,.opacity-leave{
		will-change:opacity;
		opacity:0;
	}
	// 上滑
	.slideup-transition{
		transform:translateY(0);
		transition:transform .3s ease;
	}
	.slideup-enter,.slideup-leave{
		will-change:transform;
		transform:translateY(50%);
	}
	// 左滑
	.slideleft-transition{
		transform:translateX(0);
		transition:transform .3s ease;
	}
	.slideleft-enter,.slideleft-leave{
		will-change:transform;
		transform:translateX(100%);
	}
	// 加载动画
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

	.loading{
		display:flex;
		justify-content:center;
		width:100%;
	}

	// 页面头部
	.normal-header{
		position:absolute;
		left:0;
		right:0;
		top:0;
		z-index:5;
		display:flex;
		justify-content:space-between;
		align-items:center;
		padding:10px;
		height:40px;
		background:pink;
		color:#fff;
		h2{
			margin:0;
			flex:1;
			text-align:center;
			font-size:17px;
			overflow:hidden;
			white-space:nowrap;
			text-overflow:ellipsis;
		}
	}

	// 图片容器
	.imgwrap{
		background:pink;
		overflow:hidden;
		img{
			width:100%;
		}
	}

	// 全屏页
	.page{
		position:absolute;
		left:0;
		right:0;
		bottom:0;
		top:0;
		background:#fff;
	}

	// 列表页
	.normal-lists{
		padding-top:64px;
		display:flex;
		flex-wrap:wrap;
		height:100%;
		overflow:auto;
		.lists-item{
			width:50%;
			padding:5px;
			figure{
				border:1px solid rgba(pink,.8);
				padding:8px;
				border-radius:5px;
				img{
					width:100%;
				}
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
	}
</style>