import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/post";
import PostsList from "./PostsList";


class App extends  React.Component{
  componentDidMount(){
    this.props.dispatch(fetchPost());
  }
  render(){
    const {post}=this.props;
    return(
      <div className="h-screen bg-blue-50">
       <PostsList post={post}></PostsList>
       
   </div>
    );
  }
}


 function mapStateToProps(state){
  return {
     post:state.post,
  };
}
export default connect(mapStateToProps)(App);
