

   export const addNewTask = newTask => {
    return {
        type: "AddNewTask",
        payload: {
            id: Math.random(),
            description: newTask,
            isDone: false
        }
    }
}

export const checkTask= (ind)=>{
    return {
        type: "CheckTask",
        payload: ind
        
    }
}

export const deleteTask= (ind)=>{
    return {
        type: "DeleteTask",
        payload: ind
        
    }
}

export const filterTask= (trueOrFalse)=>{
    return {
        type: "FilterTask",
        payload: trueOrFalse
        
    }
}

export const modifTask= (task)=>{
    return {
        type: "ModifTask",
        payload: {
            id: task.id,
            description: task.description

        }
        
    }
}

