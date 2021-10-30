import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/post";
import PostsList from "./PostsList";
import PropTypes from 'prop-types';
import Navbar from './Navbar';



class App extends  React.Component{
  componentDidMount(){
    this.props.dispatch(fetchPost());
  }
  render(){
    const {post}=this.props;
    return(
      <div className=" bg-blue-100">
        <Navbar></Navbar>
        {
          post.map(SinglePost=>(
            <PostsList SinglePost={SinglePost}></PostsList>
          ))
        }
   </div>
    );
  }
}

App.propTypes={
  post:PropTypes.array.isRequired,
}
 function mapStateToProps(state){
  return {
     post:state.post,
  };
}
export default connect(mapStateToProps)(App);
