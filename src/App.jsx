import {useState} from 'react'

const App = () => {
  const [show,setShow]=useState(false)
  const names=["shifa","safa","shahma","ashmil"];

  const handle=()=>{
    setShow((prev)=>!prev)
  }
  return (
    <div>
      <button onClick={handle}>{show?"close":"open"}</button>
      {show&&(
        <ul>
          {names.map((n,index)=>(
            <li key={index}>{n}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App