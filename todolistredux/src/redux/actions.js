import { type } from "@testing-library/user-event/dist/type";
import { ADD_TODO } from "./actionTypes";
import { REMOVE_TODO } from "./actionTypes";
import { UPDATE_TODO } from "./actionTypes";
import { COMPLETE_TODO } from "./actionTypes";
import { GET } from "./actionTypes";

export const addTodo = todo =>({
    type: ADD_TODO,
    payload: todo
})

export const removeTodo = todo =>({
    type: REMOVE_TODO,
    payload: todo
})

export const updateTodo = todo =>({
    type: UPDATE_TODO,
    payload: todo
})

export const completeTodo = todo =>({
    type: COMPLETE_TODO,
    payload: todo,
})

export const get = todos =>({
    type:GET,
    payload:todos
})