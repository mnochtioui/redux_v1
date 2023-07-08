import React from 'react'
import { useDispatch } from 'react-redux'
import { checkTask, deleteTask } from '../Redux1/action';
import { Button } from 'react-bootstrap';
import ModifTask  from './ModifTask';
import { useRef } from 'react';

const Task = ({t}) => {
    const dispatch=useDispatch()

    const descRef=useRef(null)

    const handleClick=()=>{
        descRef.current.contentEditable = "true";
        descRef.current.focus();
    }

    const handleBlur = () => {
        descRef.current.contentEditable = "false";
         
    };
     

  return (
    <div key={t.id}  className="d-flex justify-content-between align-items-start" >
            <input className='pull-left' type="checkbox"  onClick={()=>{dispatch(checkTask(t.id))}} defaultChecked={t.isDone} />
            <h5>{t.description}</h5>
            <span 
            className="desc"
                ref={descRef}
                onClick={handleClick}
                onBlur={handleBlur}
            >
                {t.description}
                </span>
            <Button  onClick={()=>{dispatch(deleteTask(t.id)) }} >Fassa5</Button>
            <ModifTask props={t} />
             
    </div>
  )
}

export default Task