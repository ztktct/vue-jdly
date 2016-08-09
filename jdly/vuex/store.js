import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// state: 包含所有应用级别状态的对象
// Getters: 在组件内部获取 store 中状态的函数
// Mutations: 修改状态的事件回调函数
// Actions: 组件内部用来分发 mutations 事件的函数

// 应用级别的状态对象
const state = {
    showNave: false,    // 左侧导航存储状态，用于控制导航条
    showContent:false,  // 内容展示状态，用于控制详情页
    currentContent:{},  // 当前浏览的页面
    collections: []
};

// 如果已有收藏，则获取
localStorage.getItem("collections") ?
    state.collections = JSON.parse(localStorage.getItem("collections")) : [];

// 修改状态的事件回调函数
const mutations = {
    // 切换导航栏的状态，显示||隐藏
    TOGGLE_NAV(state) {
        state.showNave = !state.showNave;
    },
    // 切换详情页的状态，显示||隐藏
    TOGGLE_CONTENT:function(state){
        state.showContent = !state.showContent;
    },
    // 切换收藏与取消收藏
    TOGGLE_COLLECTION(state, data){
        // data 是收藏的项目
        // {
        //      imgSrc:'',
        //      pid:'',
        //      title:'',
        //      collected:true
        // }
        let hasAlready = false; // 是否已有该收藏？
        
        state.collections.forEach((item, index) => {
            // 如果已有该收藏
            if (item.pid === data.pid ) {
                data.collected = false;
                state.collections.$remove(item);
                hasAlready = true;
                return;
            }
        });
        // 如果没有该收藏
        if(!hasAlready){
            data.collected = true;
            state.collections.push(data);
        }
        localStorage.setItem("collections", JSON.stringify(state.collections));
    },

    // 设置当前浏览的页面的ID
    SET_CURRENT_ITEM(state,data){
        state.currentContent = data;
    }

}

export default new Vuex.Store({
    state,
    mutations
})
