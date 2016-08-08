<template>
    <header>
        <button class="menu" @click ="toggleNav">
            <span class="menu-bar"></span>
            <span class="menu-bar"></span>
            <span class="menu-bar"></span>
        </button>
        <a href="/"><img src="../assets/logo.png" alt="绝对领域"></a>
    </header>
</template>

<script>
    import {toggleNav} from '../../vuex/action';
    export default {
        vuex:{
            actions:{
                toggleNav
            }
        }
    }
</script>

<style scoped lang="scss">
    header{
        display:flex;
        position:relative;
        z-index:4;
        justify-content:center;
        align-items:center;
        padding:10px;
        position:relative;
        box-shadow:0 0 5px #333;
        position:fixed;
        top:0;
        right:0;
        left:0;
        height:67px;
        background:#fff;
    }
    .menu{
        border:1px solid #333;
        background:#fff;
        width:30px;
        padding:5px;
        position:absolute;
        left:20px;
        top:50%;
        transform:translateY(-60%);
        border-radius:3px;
    }
    .menu-bar{
        display:block;
        height:2px;
        background:#666;
        &:not(:first-child){
            margin-top:5px;
        }
    }
</style>
