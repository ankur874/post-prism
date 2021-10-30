import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state={
        email:'',
        password:'',
    }
  }
 handleForm=(e)=>{
     e.preventDefault();
     console.log("email and pass",this.state);
 }
 handleEmail=(e)=>{
     this.setState({
        email:e.target.value,
     });
 }
 handlePassword=(e)=>{
    this.setState({
       password:e.target.value,
    });
}
  render() {
    return (
      <div className=" h-screen bg-blue-100 w-full flex flex-col  items-center">
        <form className="w-4/12 bg-white mt-10 rounded-sm login-form flex flex-col font-semibold  p-4 ">
          <div className="text-3xl text-yellow-500 m-1.5 text-center">
            Log In
          </div>

          <input
            className="border-gray-400   rounded-lg border-2 p-1.5 m-1.5"
            type="email"
            required
            // value={this.state.email}
            onChange={this.handleEmail}
            placeholder="Email"
          ></input>

          <input
            className="border-gray-400 rounded-lg   border-2 p-1.5 m-1.5"
            type="password"
            required
            onChange={this.handlePassword}
            // value={this.state.password}
            placeholder="Password"
          ></input>

          <button onClick={this.handleForm} className="login-btn mt-4   p-2 hover:bg-yellow-600 text-center  bg-yellow-500">
            LOG IN
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
