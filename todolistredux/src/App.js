import { useSelector } from 'react-redux'
import TodoForm from './component/TodoFrom';
import Todo from './component/Todo';
import Todolist from './component/TodoList';


function App() {
  const state = useSelector((state)=>({...state}));
  // console.log(state);
  return (
    <>
      <Todolist />
    </>
    
  );
}

export default App;
