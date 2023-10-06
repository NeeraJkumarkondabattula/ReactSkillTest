import Product from "../component/product/Product";
import { ADD_PRODUCT,REMOVE_PRODUCT, SORT_PRICE, UPDATE_PRODUCT } from "./actionTypes";


export const addProduct = (product) =>({
    type:ADD_PRODUCT,
    payload: product
})

export const removeProduct = (id) =>({
    type:REMOVE_PRODUCT,
    payload: id
})

export const sortPrice = (products) =>({
    type:SORT_PRICE,
    payload: products
})

export const updateProduct = (product) => ({
    type:UPDATE_PRODUCT,
    payload:product
})