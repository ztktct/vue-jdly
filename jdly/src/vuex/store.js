import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// state: 包含所有应用级别状态的对象
// Getters: 在组件内部获取 store 中状态的函数
// Mutations: 修改状态的事件回调函数
// Actions: 组件内部用来分发 mutations 事件的函数

// 应用级别的状态对象
const state = {
	showCollect:false,	// 显示收藏页
	showContent:false,	// 显示详情页
	collections:[],		// 存放收藏
	currentPage:{}		// 当前页面的数据，title,id
};

// 如果已有收藏，则获取
localStorage.getItem("collections") ?
    state.collections = JSON.parse(localStorage.getItem("collections")) : [];

// 修改状态的事件回调函数
const mutations={
	// 切换显示收藏页
	TOGGLE_COLLECTIONS(state,status){
		state.showCollect = status;
	},
	// 切换详情页
	TOGGLE_CONTENT(state,status){
		state.showContent = status;
	},
	// 收藏与取消收藏
	ADD_AND_REMOVE_COLLECT(state,data){
		// data={
		// 		imgSrc:'',
		// 		id:'',
		// 		title:'',
		// 		collected:true
		// }
		
		let hasAlready = false;	// 是否已有该收藏
		state.collections.forEach((item, index) => {
            // 如果已有该收藏，则移除
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
	// 设置当前页面数据
	SET_CURRENT_PAGE(state,data){
		state.currentPage = data;
	}
};

export default new Vuex.Store({
    state,
    mutations
});
