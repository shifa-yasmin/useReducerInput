import { useEffect, useState} from 'react'
import axios from 'axios'
const App = () => {
  const [show,setShow]=useState([])
  const [search,setSearch]=useState("")
  useEffect(()=>{
    axios.get("http://localhost:3000/user")
    .then(res=>{
      console.log(res)
      setShow(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

   const filterData=show.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase())
   )

  return (
    <div>
      <input value={search} placeholder="enter value" onChange={(e)=>setSearch(e.target.value)}/>
      {filterData.map((n,index)=>(
        <h1 key={index}>{n.name}</h1>
      ))}
    </div>
  )
}

export default App