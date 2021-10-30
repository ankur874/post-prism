import React from "react";
class PostsList extends React.Component{
    render(){
        const {post}=this.props;
        return(
            <div className='post bg-gray-100'>
               <div className='post-header flex flex-row'>
                   <div className='profile-img p-2'><i class="fas fa-user-circle text-3xl"></i></div>
                   <div className=' flex flex-col p-2'>
                       <div className='profile-name'>Ankur Attri</div>
                       <div className='post-time'>a minute ago</div>
                   </div>
               </div>
               <div className='post-content p-1 border-b-2 text-lg border-black'>Testing content</div>
               <div className=' post-actions w-1/6 p-1 border-b-2 border-black'>
                   <span><i class="far fa-heart"></i></span>
                   <span className='post-likes ml-1'>10</span>
                   <span><i class="far fa-comment ml-3.5"></i></span>
                   <span className='post-comments ml-1'>25</span>
               </div>
               <div className='post-comment-box'>
               <input className='p-2 m-2' placeholder='Start typing a comment'></input>
               </div>
               <div className='post-comment-list border-t-2 border-black mt-2 p-1'>
                   <div className='post-comment-header w-1/6 flex justify-between'>
                       <span className='post-comment-author'>Jack</span>
                       <span className='post-comment-time'>a minute ago</span>
                       <span className='post-comment-likes'>21</span>
                   </div>
                   <div className='post-comment-content'>
                       Random comment
                   </div>
               </div>
            </div>
        );
    }
}

export default PostsList;