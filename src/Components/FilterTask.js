import React from 'react'
//import useState from 'react'
import { useDispatch } from 'react-redux';
import { filterTask } from '../Redux1/action';
import {Button} from 'react-bootstrap';

const FilterTask = () => {

    const dispatch=useDispatch()

    const refreshPage = () => window.location.reload()

    //const [filter, setFilter]=useState(false)setFilter(true);setFilter(false);

  return (
    <div>
    <Button onClick={()=>{dispatch(filterTask(true));} } >Filter Done Tasks</Button>
    <Button onClick={()=>{dispatch(filterTask(false));} }>Filter No Done Tasks</Button>
    <Button onClick={refreshPage}>Annuler</Button>
    </div>
  )
}

export default FilterTask