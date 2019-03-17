const postReducer = (state = {
  list: [{
    id: 1,
    title: '加载中...'
  }]
}, action) => {
  switch (action.type) {
    case 'LOAD_POSTS':
      return {
        ...state,
        list: action.payload
      }
    case 'LIKE_POST':
      const like_list = state.list;
        like_list.findIndex(function (value, index, arr) {
        if (value && value.id === action.id) {
          like_list[index].like = (like_list[index].like === undefined ? 0 : like_list[index].like);
          like_list[index].like++;
        }
      });
      return {
        list: [...like_list]
      }
    case 'DEL_POST':
      const del_list = state.list;
      del_list.findIndex(function (value, index, arr) {
        if (value && value.id === action.id) {
          arr.splice(index, 1)
        }
      });
      return {
        list: [...del_list]
      }
    default:
      return state
  }
}

export default postReducer