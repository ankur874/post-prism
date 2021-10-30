import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/post";


class App extends  React.Component{
  componentDidMount(){
    this.props.dispatch(fetchPost());
  }
  render(){
    return(
      <div className="App">
      hello
      {
        console.log('state via props',this.props)
      }
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
