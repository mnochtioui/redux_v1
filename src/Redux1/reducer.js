 const initialState={
        tasks:[
            {                id:Math.random(), description: "task1", isDone : false            },
            {                id:Math.random(), description: "task2", isDone : false            },
            {                id:Math.random(), description: "task3", isDone : false            },
            {                id:Math.random(), description: "task4", isDone : false            },
            {                id:Math.random(), description: "task5", isDone : false            },
            {                id:Math.random(), description: "task6", isDone : false            }
        ]
    }
const reducer=(state=initialState, action)=>{
        switch(action.type){
            case  "AddNewTask" :
            return {
                tasks:[...state.tasks, action.payload]
            }
            case  "CheckTask" :
            return {
                tasks:[...state.tasks].map((t)=>t.id===action.payload?{...t, isDone: !t.isDone}:t)
            }
            case  "DeleteTask" :
            return {
                tasks:[...state.tasks].filter((t)=>t.id !== action.payload)
            }

            case  "FilterTask" :                 
            return {
                tasks:[...state.tasks].filter((t)=>t.isDone===action.payload)
            }

            case  "ModifTask" :
            return {
                tasks:[...state.tasks].map((t)=>t.id===action.payload.id?{...t, description: t.description}:t)
            }
            
            default :
            return state
        }

    }
   
 

export default reducer


 