import React, { useState } from 'react'
import Data from './Data'

const App = () => {
  const [count,setcount] =useState(0)
  const [text,settext] = useState([])
  const submitdata = (e)=>{
    let amount = parseInt(count)
    e.preventDefault()
    if(count <= 1){
      amount = 1
    }
    if(count > 8){
      amount = 8
    }
    settext(Data.slice(0, amount))
  }

  return (
    <div>
     <h2>TIRED OF BORING LOREM IPSUM?</h2>
     <form onSubmit={submitdata}>
      <label htmlFor="">Paragraphs</label>
      <input className='inp' type='number' name='amount' id='amount' value={count} onChange={(e)=>setcount(e.target.value)}/>
      <button>Generate lorem</button>
     </form>
     <div>
      <p>
        {text.map((ele, idx)=>{
          return(
            <p key={idx}>{ele}</p>
          )
        })}
      </p>
     </div>
      
    </div>
  )
}

export default App


