import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const TaskList = () => {
  const {tasks, filter} = useSelector(state => state)
  return (
    <div className='tasklist'>
      <h1>TO DO</h1>
      {
        !filter?
        tasks.map((el, i) => (<Task task={el} key={i} /> ))
        :
        tasks.filter(task=>!task.isdone).map((el, i) => (<Task task={el} key={i} /> ))
      }
   
    </div>
  )
}

export default TaskList
