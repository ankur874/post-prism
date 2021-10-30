import React from "react";
import PostsList from './PostsList';

class Home extends React.Component{
    render(){
        const {post}=this.props;
        return(
            <div className='flex flex-col '>
                {
                post.map(SinglePost=>(
                  <PostsList SinglePost={SinglePost}></PostsList>
                )) 
    }
                </div>
        )
    }
}
export default Home;