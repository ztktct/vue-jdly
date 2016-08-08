<template>
  <jdly-header></jdly-header>
  <jdly-nav></jdly-nav>
  <jdly-lists></jdly-lists>
  <jsly-content></jsly-content>
</template>

<script>
import jdlyHeader from './components/header';
import jdlyNav from './components/nav';
import jdlyLists from './components/list';
import jslyContent from './components/content';

export default {
  components: {
    jdlyHeader,
    jdlyNav,
    jdlyLists,
    jslyContent
  }
}
</script>

<style lang="scss">
  *{
    box-sizing: border-box;
  }
  html,body{
    height: 100%;
    overflow: hidden;
  }
  .icon-collection{
    display:inline-block;
    width:18px;
    height:18px;
    background:url('assets/icon_favorite_grey.png') no-repeat center center;
    background-size:contain;
    &.white{
      background-image:url('assets/icon_favorite_white.png');
    }
    &.checked{
      background-image:url('assets/icon_favorite.png');
    }
  }
  .icon-back{
    display:inline-block;
    width:18px;
    height:18px;
    background:url('assets/left.png') no-repeat center center;
    background-size:contain;
  }
</style>
