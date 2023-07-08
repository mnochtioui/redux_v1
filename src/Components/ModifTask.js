import React from 'react'
import {Button, Modal, Form} from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { modifTask } from '../Redux1/action';
 

const ModifTask = ({props}) => {

    // const tasks=useSelector((state)=>state.reducer.tasks)

    // let task=tasks.filter((t)=>{
    //   return t.id===props
    // })
    //const task=props;

    const dispatch=useDispatch()
    const [desc, setDesc]=useState(props.description)
    

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

     
    
    const editFnct=()=>{
        
            props.description=desc;
            dispatch(modifTask({props}));
        
            handleClose();
          
    }
    
  return (
    <div>
    <Button variant="primary" onClick={handleShow}>
        Modifier
      </Button>

      <Modal show={show} onHide={handleClose}> 
     
      
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          
          <Form >
            <i >{props.id}</i>
          <Form.Control
                type="text"
                value={desc}
                onChange={(e)=>setDesc(e.target.value)}
              />

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}  >Close</Button>
          <Button variant="primary" onClick={editFnct} >Valider</Button>
        </Modal.Footer>
       
     </Modal>
     </div>
  )
}

export default ModifTask