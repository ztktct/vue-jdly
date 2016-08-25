// Actions: 组件内部用来分发 mutations 事件的函数
// 切换显示收藏页
export const toggleCollections=({dispatch},status) =>{
	dispatch('TOGGLE_COLLECTIONS',status);
}

// 切换详情页
export const toggleContent=({dispatch},status) =>{
	dispatch('TOGGLE_CONTENT',status);
}
// 收藏与取消收藏
export const addAndRemoveCollect=({dispatch},data) =>{
	dispatch('ADD_AND_REMOVE_COLLECT',data);
}
// 设置当前页面数据
export const setCurrentPage=({dispatch},data) =>{
	dispatch('SET_CURRENT_PAGE',data);
}
