import { useState } from 'react';
import styles from './Todolist.module.css';

const Todo = ({id,title,completed,removeTodo,updateTodo,toggleTodo}) =>{
    const [isEdit,setIsEdit] = useState(false);
    const [editTitle,setEditTitle] = useState(title);

    const handleUpdate = (e) =>{
        e.preventDefault();
        updateTodo(id,editTitle);
        console.log(editTitle);
        setIsEdit(false);
    }
    return(
        <div className={styles.todos}>
            {isEdit? 
            <>
                <form className={styles.editTodo} onSubmit={handleUpdate}>
                    <input type="text"  value={editTitle} onChange={e=>setEditTitle(e.target.value)}/>
                    <button>Save</button>
                </form>
            </>
            :
            <>
                <div className={styles.todo}><p>{title}</p>
                </div>
                <div className={styles.mod}>
                    <button onClick={toggleTodo}>{completed?"Completed":"Pending"}</button>
                    <button onClick={()=>setIsEdit(true)}>Edit</button>
                    <button onClick={removeTodo}>Delete</button>
                </div>
            </>
            }
            
        </div>
    )
}

export default Todo;