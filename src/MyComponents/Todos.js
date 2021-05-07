import React from 'react'
import TodoItem from './TodoItem';

function Todos(props) {

    return (
        <div className="container">
            <h3 className="text-center my-3">Todo List</h3>

            {props.todos.length===0? "No Todo List":
                props.todos.map((todo)=>{
                    console.log(todo.sno);
                    return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
                    )
                })
            } 
            

            
        </div> 
    )
}

export default Todos
