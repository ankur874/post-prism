import React from 'react';

class SignUp extends React.Component {
  render() {
    return (
        <div className='h-screen bg-blue-100 w-full flex flex-col  items-center'>
      <form className="w-4/12 bg-white mt-10 rounded-sm login-form flex flex-col font-semibold  p-4 ">
        <div className="text-3xl text-yellow-500 m-1.5 text-center">Sign Up</div>

        <input
          className="border-gray-400   rounded-lg border-2 p-1.5 m-1.5"
          type="email"
          required
          placeholder="Email"
        ></input>

        <input
          className="border-gray-400 rounded-lg   border-2 p-1.5 m-1.5"
          type="password"
          required
          placeholder="Password"
        ></input>

        <button className="login-btn mt-4   p-2 hover:bg-yellow-600 text-center  bg-yellow-500">
          SIGN UP
        </button>
      </form>
      </div>
    );
  }
}
export default SignUp;
