// Actions: 组件内部用来分发 mutations 事件的函数

export const toggleNav = ({ dispatch }) =>{
	dispatch('TOGGLE_NAV');
}

export const toggleContent = ({ dispatch }) =>{
	dispatch('TOGGLE_CONTENT');
}

export const addCollection = ({ dispatch },data) =>{
	dispatch('ADD_COLLECTION',data);
}

export const deleteCollection = ({ dispatch },pid) =>{
	dispatch('DELECT_COLLECTION',pid);
}

export const setCurrentId = ({ dispatch },pid)=>{
	dispatch('SET_CURRENT_ID',pid);
}