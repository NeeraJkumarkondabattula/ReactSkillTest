import { useState } from 'react';
import styles from './Todolist.module.css';

const TodoForm = ({createTodo}) =>{
    const [task,setTask] = useState("");

    const handleSubmit =(e) =>{
        e.preventDefault();
        if(task==""){
            window.confirm("Enter Something You Want to Do?");
        }else{
            createTodo(task);
            setTask("")
        }
        
    };
    // console.log(task);
    return(
        <form  className={styles.topDiv} onSubmit={handleSubmit}>
            <div className={styles.header}>
                <h3>TodoList App</h3>
                <div className={styles.addTodo}>
                    <input type="text" placeholder="Enter What do you want to do ?" value={task} onChange={e=>setTask(e.target.value)}/>
                    <button >Add Todo</button>
                </div>
            </div>
        </form>
    )
}

export default TodoForm;