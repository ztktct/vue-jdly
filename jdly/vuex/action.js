// Actions: 组件内部用来分发 mutations 事件的函数

export const toggleNav = ({ dispatch }) =>{
	dispatch('TOGGLE_NAV');
}

export const toggleContent = ({ dispatch }) =>{
	dispatch('TOGGLE_CONTENT');
}

export const toggleCollection = ({ dispatch },data) =>{
	dispatch('TOGGLE_COLLECTION',data);
}

export const setCurrentItem = ({ dispatch },data)=>{
	dispatch('SET_CURRENT_ITEM',data);
}