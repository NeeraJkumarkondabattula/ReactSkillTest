import Navbar from "../navbar/Navbar";
import Product from "../product/Product";
import styles from "./ProductList.module.css"
import { removeProduct } from "../../redux/action";
// import Data from "../data/Data.js";
import { useDispatch, useSelector } from 'react-redux';
// import { sortPrice } from "../../redux/action";
import { useEffect, useState } from "react";

const ProductList = ({sort}) =>{
    const [data,setData] = useState([]);

    const state = useSelector((state)=>({...state.products}));
    let dispatch = useDispatch();
    
    const removep = (product) =>{
        dispatch(removeProduct(product.id))
    }

    return(
        <>
            <div className={styles.sort}>
                <button onClick={sort}>Sort By Price</button>
            </div>
            <div className={styles.container}>
                {state.products.map((product)=>{
                    // console.log(product);
                    return(
                        <Product product={product} key={product.id} removeP={removep}/>
                    )
                })}
                
            </div>
        </>
    )
}

export default ProductList;