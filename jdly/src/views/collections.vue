<template>
    <div class="page">
        <jdly-header></jdly-header>
        <div class="normal-lists" >
            <div class="lists-item" transition="slideup" v-for="item in collections">
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
        </div>
    </div>
</template>

<script>
    import jdlyHeader from '../components/header';
    import {addAndRemoveCollect,setCurrentPage} from '../vuex/action';

    export default{
        components:{
            jdlyHeader
        },
        vuex:{
            getters:{
                collections: state => state.collections
            },
            actions:{
                addAndRemoveCollect,
                setCurrentPage
            }
        },
        methods:{
            showContent:function(item){
                location.hash="#showContent";
				this.setCurrentPage(item);	// 设置当前页面，title,ID
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page{
        height:100%;
		position:absolute;
		background:#fff;
		z-index:10;
    }
</style>
