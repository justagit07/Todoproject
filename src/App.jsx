import { useEffect, useState } from 'react'
import Nav from './nav'
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [todo, settodo]=useState("")
  const [todos, settodos]=useState([])
  const [showfinished, setshowfinished]=useState(false)
  useEffect(()=>{
      let todo= JSON.parse(localStorage.getItem("todos"))
      settodos(todo)
  },[])
       const handleshowfinished=()=>{
       
       setshowfinished(!showfinished)

      }
        
       const handlesave=()=>
       {     settodos([...todos, {id:uuidv4(),todo, iscomplete:false}])
               settodo('')
            savetolocal()}

        const handleedit=(e, id)=>
        {
           console.log('this is the id', id)
           const filter= todos.filter((e)=>{return e.id == id})
           console.log('this is the all todos', todos)
           console.log( 'this is the filter id removing afte teh filter',filter)
           settodo(filter[0].todo)
           const find= todos.filter((e)=>{ return e.id !== id})
            settodos(find)
            savetolocal()
        

        }
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
              console.log('Enter key pressed');
              if(todo.length>0)
              {

                    settodos([...todos, {id:uuidv4(),todo, iscomplete:false}])
                }
              settodo('')
              savetolocal()

            }
          };

          const savetolocal= ()=>
          {
            localStorage.setItem("todos", JSON.stringify(todos))
          }

        const handledelete=(e, id)=>
        {
            const find= todos.filter((e)=>{ return e.id !== id})
            settodos(find)
            savetolocal()


        }
         const handlechange=(e)=>
         {
               settodo(e.target.value)
         }
         const handlecheck= (e,id)=>
         {

             const index= todos.findIndex((e)=>{ return e.id===id})
             let newtodos= JSON.parse(JSON.stringify(todos))
             const find= todos.filter((e)=>{ return e.id === id})[0].iscomplete
             newtodos[index].iscomplete= !find
             settodos(newtodos)
         }
          console.log(todos)
       console.log('this is the value of the showfinished', showfinished)
  return (
    <>
      <div className=" mt-9 w-screen  h-screen" >
              <Nav />

          <div className="">

                <div className="  h-[10vh] mx-[140px]  p-4mx-8 my-8">
                   <div className="text-xl font-semibold text-slate-600"> Add a todo</div>
                  <input type="text" value={todo} onChange={handlechange}   onKeyPress={handleKeyPress} placeholder="Enter the todo" className="w-[40vw]  rounded-md border-2 border-slate-400   my-2 h-[35px]" />
                  <button className="mx-[100px]  h-[35px] w-[100px] rounded-xl text-white  hover:text-black  bg-gradient-to-r  from-[#994ECC] to-[#3E187A]"   onClick={handlesave} >Save</button>
                  </div>    
                  <input  className='w-4 h-5 mx-[10px] p-24 ml-[140px]  text-centre align-bottom ' type="checkbox" checked={showfinished} onChange={handleshowfinished}/>show finished

           </div> 
           {todos.length ==0 && <div className='mx-[130px] text-xl text-slate-600'> There is nothing to display</div>}
       
     
       {todos.map((e)=>{
             
             
             return (showfinished|| !e.iscomplete)&& <div div className=" flex flex-col overflow-scroll  ml-[120px]  m-0  w-[80vw] min-h-[10vh] ">
         <div className='flex   gap-4 w-[70vw] mx-5 h-[10vh]'>


           <div  className=" w-[40vw]    min-h-0 my-2  text-white bg-gradient-to-r from-[#994ECC] to-[#3E187A]	checked ?'line-through:'' border-solid  rounded-lg bg-voilet text-wrap p-2  text-xl  text-slate-300  "  >
           <input type="checkbox"   className='w-5 h-4 rounded-md mr-3' key={e.id}  value={e.iscomplete} onChange={(x)=>handlecheck(x,e.id)}  /> 
                <span className={e.iscomplete?'line-through':''}>{e.todo}</span> 
          </div>
          <button className="  h-[35px] w-[40px] hover:bg-slate-400 "  onClick={(x)=>{handleedit(x,e.id)}}><img src="./src/assets/edit.svg" alt="edit" /></button>
         <button className="  h-[35px] w-[100px] " onClick={(x)=>{handledelete(x, e.id)}} > <img src="./src/assets/delete.svg" alt="svg" /></button>
         </div>
         </div>  
      
       
          })}


       </div>   
                 
</>   
)
}


      export default App