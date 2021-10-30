import React from "react";


class Navbar extends React.Component{
    render(){
        return(
            <div className='navbar h-12 p-1 flex flex-row justify-between bg-yellow-200'>
                <div className='left-div'>
                    <img className='h-10' src='https://pngimage.net/wp-content/uploads/2018/06/prism-png-7.png'></img>
                </div>
                <div className='search relative'>
                <i class="fas text-gray-500 absolute right-2 top-3 fa-search"></i>
                    <input className='border-gray-500 border-2 rounded-md px-2 py-1 w-96 hover:border-gray-600 hover:rounded-none' placeholder='Search'></input>
                    <ul className='bg-white rounded-sm p-1'>
                        <li><div className='navbar-user flex'>
                        <div className='navbar-user--profile'>
                        <i class="fas fa-user-circle text-3xl"></i>
                        </div>
                        <div className='navbar-user--name p-2 font-semibold'>Ankur Attri</div>
                    </div></li>
                        <li><div className='navbar-user flex'>
                        <div className='navbar-user--profile'>
                        <i class="fas fa-user-circle text-3xl"></i>
                        </div>
                        <div className='navbar-user--name p-2 font-semibold'>Sam Kukreja</div>
                    </div></li>
                    </ul>
                </div>
                
                    <div className='navbar-user flex'>
                        <div className='navbar-user--profile'>
                        <i class="fas fa-user-circle text-3xl"></i>
                        </div>
                        <div className='navbar-user--name p-2 font-semibold'>Ankur Attri</div>
                    </div>
                    <div className='navbar-actions flex flex-row justify-evenly'>
                        <span className='p-2 font-semibold'>Log In</span>
                        <span className='p-2 font-semibold'>Log Out</span>
                        <span className='p-2 font-semibold'>Register</span>
                    </div>
                

            </div>
        )
    }
}

export default Navbar;