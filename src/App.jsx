import { useRef, useState } from 'react'
import Nav from './nav'

function App() {
  const [todo, settodo]=useState("")
  const [todos, settodos]=useState([])
  const dataref= useRef
  const editref=useRef
  
       const handlesave=()=>
       { console.log('this is my todo', todo)
       console.log('this is the todos', todos)



              console.log('this is the final todos')

             settodos([...todos, {todo, iscomplete:false}])
             console.log('this is the finaltods',todos)
       }

        const handleedit=()=>
        {

        }
        const handledelete=()=>
        {

        }
         const handlechange=(e)=>
         {
               settodo(e.target.value)
               console.log(e.target.value)
         }

  return (
    <>
      <div className=" mt-9 w-screen  h-screen" >
              <Nav />

          <div className=" border-2">

                <div className="  border-solid border-2 h-[10vh] mx-[140px]  p-4mx-8 my-8">
                   <div className="text-xl font-semibold text-slate-600"> Add a todo</div>
                  <input type="text" value={todo} onChange={handlechange}   placeholder="Enter the todo" className="w-[40vw]  rounded-md border-2 border-slate-400   my-2 h-[35px]" />
                  <button className="mx-[100px]  h-[35px] w-[100px] rounded-xl text-white  hover:text-black  bg-gradient-to-r  from-[#994ECC] to-[#3E187A]"   onClick={handlesave} >Save</button>
                  </div>    

           </div> 

       {todos.map((e)=>{
             return (
             <>
         <div div className=" flex flex-col overflow-auto  ml-[120px]  m-0  w-[80vw] h-[10vh] ">
         <div className='flex   gap-4 w-[70vw] mx-5 h-[10vh]'>
           <div  className=" w-[40vw] h-[6vh]   text-white bg-gradient-to-r from-[#994ECC] to-[#3E187A]	 border-solid  rounded-lg bg-voilet text-wrap p-2  text-xl   text-slate-300  "  > <input type="checkbox" className='w-5 h-4  rounded-md mr-3' />{e.todo}
          </div>
          <button className="  h-[35px] w-[100px] rounded-xl text-white  hover:text-black  bg-gradient-to-r  from-[#994ECC] to-[#3E187A]" onClick={handleedit}>Edit</button>
         <button className="  h-[35px] w-[100px] rounded-xl text-white  hover:text-black  bg-gradient-to-r  from-[#994ECC] to-[#3E187A]" onClick={handledelete} >Delete</button>
         </div>
         </div>  
           </>  ) 
          })}


       </div>   
                 
</>   
)
}


      export default App