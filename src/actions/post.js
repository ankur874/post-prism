import {UPDATE_POSTS} from '../actions/action_types';
export function fetchPost(){
    return (dispatch)=>{
        const url='http://codeial.codingninjas.com:8000/api/v2/posts?page=2&limit=10';
        fetch(url).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log('data',data);
            dispatch(updatePost(data.data.posts));
        });
    }
}
export function updatePost(posts){
   return{
       type:UPDATE_POSTS,
       posts:posts,
   };
}