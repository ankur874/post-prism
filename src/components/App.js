import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/post";
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Page404 from './Page404';
import Login from './Login';
import SignUp from "./SignUp";




class App extends  React.Component{
  componentDidMount(){
    this.props.dispatch(fetchPost());
  }
  render(){
    const {post}=this.props;
    return(
      <Router>
      <div className="">
        <Navbar></Navbar>
         <Switch>
        <Route exact={true} path='/' render={(props)=>{return <Home {...props} post={post}></Home>}}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/login" component={Login} ></Route>
        <Route component={Page404}></Route>
        </Switch>
   </div>
   </Router>
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
