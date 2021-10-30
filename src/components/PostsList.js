import React from "react";
import PropTypes from 'prop-types';

class PostsList extends React.Component{
    render(){
        const {SinglePost}=this.props;
        return(
            <div className='post m-4 p-2 bg-gray-100 rounded-md'>
               <div className='post-header flex flex-row'>
                   <div className='profile-img p-2'><i className="fas fa-user-circle text-3xl"></i></div>
                   <div className=' flex flex-col p-2'>
                       <div className='profile-name'>{SinglePost.user.name}</div>
                       <div className='post-time text-gray-600'>a minute ago</div>
                   </div>
               </div>
               <div className='post-content p-1 border-b-2 text-lg border-gray-500'>{SinglePost.content}</div>
               <div className=' post-actions  p-1 border-b-2 border-gray-500'>
                   <span><i class="far text-gray-700 fa-heart"></i></span>
                   <span className='post-likes text-gray-600 ml-1'>10</span>
                   <span><i class="far fa-comment text-gray-700 ml-3.5"></i></span>
                   <span className='post-comments text-gray-600 ml-1'>25</span>
               </div>
               <div className='post-comment-box'>
               <input className='p-2 m-2' placeholder='Start typing a comment'></input>
               </div>
               <div className='post-comment-list  mt-2 ml-3'>
                   <div className='post-comment-header w-1/6 flex justify-between'>
                       <span className='post-comment-author text-gray-700'>Jack</span>
                       <span className='post-comment-time text-gray-600'>a minute ago</span>
                       <span className='post-comment-likes text-gray-600'>21</span>
                   </div>
                   <div className='post-comment-content'>
                       Random comment
                   </div>
               </div>
            </div>
        );
    }
}

PostsList.propTypes={
    SinglePost: PropTypes.array.isRequired,
}

export default PostsList;