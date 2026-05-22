import  { useReducer ,useState} from 'react'

function Reducer(state,action){
  if(action.type==="input"){
    return{
      ...state,name:action.payload
    }
  }
  if(action.type==="email"){
    return{
    ...state,email:action.payload
    }
  }
  return state;
}

const App = () => {
  const [show,setShow]=useState(null)
   const [state,dispatch]=useReducer(Reducer,{
    name:"",
    email:""
   });
   const handle=()=>{
    setShow(state);
   }
  return (
    <div>
    <input value={state.name} placeholder='enter name' onChange={(e)=>dispatch({type:"input",payload:e.target.value})}/>
    <br/><br/>
    <input value ={state.email} placeholder='enter email' onChange={(e)=>dispatch({type:"email",payload:e.target.value})}/>
    <br/><br/>
    <button onClick={handle}>click</button>
     {show&&(
      <div>
         <h1>{state.name}</h1>
         <h4>{state.email}</h4>
         </div>
    )}
    </div>
   
  )
}

export default App