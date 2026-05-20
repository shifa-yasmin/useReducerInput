
import  { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  const [value,setValue]=useState([])
  const [type,setType]=useState("")
  const [result, setResult]=useState("")

  
  const handle=()=>{
    const res=value.find((n)=>n.name===type);
      if(res){
        setResult(res.name)
      }else{
        setResult("undefined")
      }
  }
    useEffect(()=>{
    axios.get("http://localhost:3000/user")
    .then(res=>{
      setValue(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
    },[])
  
  return (
 
    <>
    <ul>
       {value.map((n,index)=>(
      <li key={index}>{n.name}</li>
     ))}
    </ul>
    <input value={type} placeholder='select value' onChange={(e)=>setType(e.target.value)}/>
    <button onClick={handle}>click</button>
    <p>{result}</p>
    </>
  )
}

export default App