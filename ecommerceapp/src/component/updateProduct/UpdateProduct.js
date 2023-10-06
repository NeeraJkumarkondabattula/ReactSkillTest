import styles from "./UpdateProduct.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const UpdateProduct = ({updateProduct}) =>{

    const state = useSelector((state)=>({...state.products}));

    var pname,prating,pprice,pdiscription,pimage = "";

    const navigate = useNavigate();

    const id = parseInt(window.location.href.substring(36));

    state.products.map((product)=>{
        if(product.id===id){
            pname=product.name;
            prating=product.rating;
            pprice=product.price;
            pdiscription=product.discription;
            pimage=product.image;
        }
    })

    const [name,setName] = useState(pname);
    const [discription,setDiscription] = useState(pdiscription);
    const [rating,setRating] = useState(prating);
    const [price,setPrice] = useState(pprice);
    const [image,setImage] = useState(pimage);


    const handleSubmit = (e) =>{
        e.preventDefault();
        updateProduct({name,discription,rating,price,image,id});
        navigate("/products");
    }
    return(
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Update Product Details</h2>
                <div className={styles.details}>
                    <div className={styles.name}>
                        <label for="name">Product Name : </label>
                        <input type="text" placeholder="Enter Product Name.. " id="name" onChange={e=>setName(e.target.value)}/>
                    </div>
                    <div className={styles.discription}>
                        <label for="name">Product Discription : </label>
                        <input type="text" placeholder="Enter Product Discription.. " onChange={e=>setDiscription(e.target.value)}/>
                    </div>
                    <div className={styles.rating}>
                        <label for="name">Product Rating : </label>
                        <input type="text" placeholder="Enter Product Rating.. " onChange={e=>setRating(e.target.value)}/>
                    </div>
                    <div className={styles.price}>
                        <label for="name">Product Price : </label>
                        <input type="text" placeholder="Enter Product Price.. " onChange={e=>setPrice(e.target.value)}/>
                    </div>
                    <div className={styles.image}>
                        <label for="name">Product Image : </label>  
                        <input type="text" placeholder="Enter Product Image url.. " onChange={e=>setImage(e.target.value)}/>
                    </div>
                    <button className={styles.button}>Update Product</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProduct