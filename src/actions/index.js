import jsonPlaceholder from '../apis/jsonPlaceHolder';

export const fetchposts =  ()=> async (dispatch)=>{
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type : 'FETCH_POSTS',payload:response.data})
};
