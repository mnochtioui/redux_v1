import React from 'react'
import {Button, Modal, Form} from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../Redux1/action';
 

const AddTask = () => {

    const dispatch=useDispatch()
    const [newTask, setNewTask]=useState("")
    

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

     
    
    const addFnct=()=>{
        
         
            dispatch(addNewTask(newTask));
        
            handleClose();
          
    }
    
  return (
    <div>
    <Button variant="primary" onClick={handleShow}>
        Ajouter une nouvelle tache
      </Button>

      <Modal show={show} onHide={handleClose}> 
     
      
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          
          <Form >
          <Form.Control
                type="text"
                placeholder="Description de la tache"
                onChange={(e)=>setNewTask(e.target.value)}
              />

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}  >Close</Button>
          <Button variant="primary" onClick={addFnct} >Add</Button>
        </Modal.Footer>
       
     </Modal>
     </div>
  )
}

export default AddTask