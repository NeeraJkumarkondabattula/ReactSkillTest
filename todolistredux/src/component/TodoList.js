import Todo from './Todo';
import styles from './Todolist.module.css';
import TodoForm from './TodoFrom';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/actions';
import { removeTodo } from '../redux/actions';
import { updateTodo } from '../redux/actions';
import { completeTodo } from '../redux/actions';
import { useEffect, useState } from 'react';


const Todolist = () =>{

    const state = useSelector((state)=>({...state.todos}));
    let dispatch = useDispatch();

    const create = (newTodo)=>{
        dispatch(addTodo(newTodo));
    }

    const update = (id,updatedTitle) =>{
        dispatch(updateTodo({id,updatedTitle}))
    }
    
    return(
        <div className={styles.container}>
            <div className={styles.todoDiv}>
                <TodoForm createTodo={create}/>
                <div  className={styles.bottomDiv}>
                   {state.todos.map(todo=>{
                         return(
                            <Todo title={todo.title} id={todo.id} key={todo.id} removeTodo={()=>{dispatch(removeTodo(todo))}} updateTodo={update} completed={todo.completed} toggleTodo={()=>dispatch(completeTodo(todo))}/>
                            )
                        })
                    }
                </div> 
            </div>
        </div>
    )
}

export default Todolist;