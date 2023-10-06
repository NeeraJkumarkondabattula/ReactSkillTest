import AddProduct from "./component/addProduct/AddProduct";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import NotFound from "./component/notFound/NotFound";
import ProductList from "./component/productList/ProductList";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, sortPrice } from "./redux/action";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { updateProduct } from "./redux/action";
import UpdateProduct from "./component/updateProduct/UpdateProduct";

function App() {

  const state = useSelector(state=>({...state.products}))
  const dispatch = useDispatch();

  const add = (newProduct)=>{
    dispatch(addProduct(newProduct));
  }

  const update = (updateP)=>{
    dispatch(updateProduct(updateP));
  }

  const sort = (products) =>{
    dispatch(sortPrice(products))
  }

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList sort={sort}/>} />
          <Route path="addproduct" element={<AddProduct addProduct={add}/>} />
          <Route path="updateproduct/:id" element={<UpdateProduct updateProduct={update}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
