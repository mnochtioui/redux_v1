import React from 'react'

const Task = (t) => {
  return (
    <div id={t.id} >
            <p>{t.description}</p>
            <input className='pull-right' type="checkbox" value={t.isDone} />
    </div>
  )
}

export default Task