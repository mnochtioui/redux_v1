import React from 'react'
import { useDispatch } from 'react-redux'
import { checkTask, deleteTask } from '../Redux1/action';
import { Button } from 'react-bootstrap';
import ModifTask  from './ModifTask';

const Task = ({t}) => {
    const dispatch=useDispatch()

  return (
    <div key={t.id}  className="d-flex justify-content-between align-items-start" >
            <input className='pull-left' type="checkbox"  onClick={()=>{dispatch(checkTask(t.id))}} defaultChecked={t.isDone} />
            <h5>{t.description}</h5>
             
            <Button  onClick={()=>{dispatch(deleteTask(t.id)) }} >Fassa5</Button>
            <ModifTask props={t} />
             {/* <Button  onClick={()=>{dispatch(modifTask(t.id)) }} >Editer</Button> */}
    </div>
  )
}

export default Task