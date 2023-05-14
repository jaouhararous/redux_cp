import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask, filtertask } from '../redux/actions'

const AddTask = () => {
    const [text, settext] = useState('')
    const dispatch = useDispatch()
    const handlesubmit =(e)=> {
        e.preventDefault();
        const newtask ={
            id: Math.random(),
            action : text , 
            isdone : false ,

        }
        dispatch(addtask(newtask))
        settext("")
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" value={text} onChange={(e)=>settext(e.target.value)}/>
            <button>add</button  >
        </form>
            <button onClick={()=> dispatch(filtertask())}>filter</button>
    </div>
  )
}

export default AddTask