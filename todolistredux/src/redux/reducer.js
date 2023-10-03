import { ADD_TODO, COMPLETE_TODO, GET, REMOVE_TODO, UPDATE_TODO } from "./actionTypes";
import {v4 as uuidv4} from "uuid";
import { useEffect } from "react";


const initialState = {
    todos:[
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
          },
          {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
          },
          {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
          },
          {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
          },
          {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
          },
          {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
          },
          {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
          },
          {
            "userId": 1,
            "id": 9,
            "title": "molestiae perspiciatis ipsa",
            "completed": false
          },
          {
            "userId": 1,
            "id": 10,
            "title": "illo est ratione doloremque quia maiores aut",
            "completed": true
          },
          {
            "userId": 1,
            "id": 11,
            "title": "vero rerum temporibus dolor",
            "completed": true
          },
          {
            "userId": 1,
            "id": 12,
            "title": "ipsa repellendus fugit nisi",
            "completed": true
          },
          {
            "userId": 1,
            "id": 13,
            "title": "et doloremque nulla",
            "completed": false
          },
          {
            "userId": 1,
            "id": 14,
            "title": "repellendus sunt dolores architecto voluptatum",
            "completed": true
          },
          {
            "userId": 1,
            "id": 15,
            "title": "ab voluptatum amet voluptas",
            "completed": true
          },
          {
            "userId": 1,
            "id": 16,
            "title": "accusamus eos facilis sint et aut voluptatem",
            "completed": true
          },
          {
            "userId": 1,
            "id": 17,
            "title": "quo laboriosam deleniti aut qui",
            "completed": true
          },
          {
            "userId": 1,
            "id": 18,
            "title": "dolorum est consequatur ea mollitia in culpa",
            "completed": false
          },
          {
            "userId": 1,
            "id": 19,
            "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
            "completed": true
          },
          {
            "userId": 1,
            "id": 20,
            "title": "ullam nobis libero sapiente ad optio sint",
            "completed": true
          },
          {
            "userId": 2,
            "id": 21,
            "title": "suscipit repellat esse quibusdam voluptatem incidunt",
            "completed": false
          },
          {
            "userId": 2,
            "id": 22,
            "title": "distinctio vitae autem nihil ut molestias quo",
            "completed": true
          },
          {
            "userId": 2,
            "id": 23,
            "title": "et itaque necessitatibus maxime molestiae qui quas velit",
            "completed": false
          },
          {
            "userId": 2,
            "id": 24,
            "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
            "completed": false
          },
          {
            "userId": 2,
            "id": 25,
            "title": "voluptas quo tenetur perspiciatis explicabo natus",
            "completed": true
          },
          {
            "userId": 2,
            "id": 26,
            "title": "aliquam aut quasi",
            "completed": true
          },
          {
            "userId": 2,
            "id": 27,
            "title": "veritatis pariatur delectus",
            "completed": true
          },
          {
            "userId": 2,
            "id": 28,
            "title": "nesciunt totam sit blanditiis sit",
            "completed": false
          },
          {
            "userId": 2,
            "id": 29,
            "title": "laborum aut in quam",
            "completed": false
          },
          {
            "userId": 2,
            "id": 30,
            "title": "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
            "completed": true
          },
          {
            "userId": 2,
            "id": 31,
            "title": "repudiandae totam in est sint facere fuga",
            "completed": false
          },
          {
            "userId": 2,
            "id": 32,
            "title": "earum doloribus ea doloremque quis",
            "completed": false
          },
          {
            "userId": 2,
            "id": 33,
            "title": "sint sit aut vero",
            "completed": false
          },
          {
            "userId": 2,
            "id": 34,
            "title": "porro aut necessitatibus eaque distinctio",
            "completed": false
          },
          {
            "userId": 2,
            "id": 35,
            "title": "repellendus veritatis molestias dicta incidunt",
            "completed": true
          },
    ]
}


const todoReducer = (state = initialState,action) =>{
    
    switch(action.type){
        case ADD_TODO:
            const newTodo = {
                id:uuidv4(),
                title : action.payload,
                completed:false
            };
            const addedTodo = [newTodo,...state.todos];
            return{
                ...state,
                todos:addedTodo,
            };
        case UPDATE_TODO:
            const updateTodos = state.todos.map((todo)=>{
                if(todo.id===action.payload.id){
                    return {...todo,title:action.payload.updatedTitle}
                }
                return todo;
            });
            return{
                ...state,
                todos:updateTodos,
            };
        case REMOVE_TODO:
            const filterTodo = state.todos.filter((t)=>t.id!=action.payload.id);
            return{
                ...state,
                todos:filterTodo,
            };
        case COMPLETE_TODO:
            const toggleTodos = state.todos.map(t=>t.id===action.payload.id?{...action.payload,completed:!action.payload.completed}:t);
            return{
                ...state,
                todos:toggleTodos
            };
        default:
            return state;
    }
}

export default todoReducer;