import React from "react";


const Nav= ()=>
{
    return (
        <> 
        <div className="flex items-center w-screen justify-between ]">
        <img src="./src/assets/img.jpeg" alt="" className=" w-16  object-cover  h-16  ml-10 rounded-full"/>
        <span className=" text-gray-800 font-semibold text-2xl">To-do lists</span>
        <ul className=" flex gap-8 mr-10">
            <li> <img src="./src/assets/search.svg" alt="" /></li>
            <li> <img src="./src/assets/setting.svg" alt="" /></li>
        </ul>

      </div>


        </>
    )
}


export default Nav