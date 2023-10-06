import styles from "./Product.module.css";
import edit from "../image/writing.png";
import remove from "../image/trash.png"
import star from "../image/star.png"
import { removeProduct } from "../../redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Product = (product) =>{

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {name,discription,price,rating,id,image} = product.product;

    const removeP = (id) => {
        console.log(id);
        dispatch(removeProduct(id));
    }

    return(
        <>
            <div className={styles.product}>
                    <div className={styles.image}>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.productDetails}>
                        <div className={styles.name}>
                            <p>{name}</p>
                        </div>
                        <div className={styles.discription}>
                            <p>{discription}</p>
                        </div>
                        <div className={styles.rating}>
                            <p>{rating}<img src={star} alt="" /></p>
                        </div>
                        <div className={styles.price}>
                            <div>₹ {price}</div>
                            <div className={styles.button}>
                                <img src={edit} alt="" onClick={()=>navigate(`/updateproduct/${id}`)}/>
                                <img src={remove} alt="" onClick={()=>{removeP(id)}}/>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Product;