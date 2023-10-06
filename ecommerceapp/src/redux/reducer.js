import { ADD_PRODUCT,REMOVE_PRODUCT, SORT_PRICE, UPDATE_PRODUCT } from "./actionTypes";
import {v4 as uuidv4} from "uuid";

const initialState = {
    products:[
        {
            id:1,
            name: "SAMSUNG Galaxy F34 5G",
            price: 16499,
            discription:"Sporting a host of exciting features, this Samsung F34 takes you to a whole new level. Enjoy a smooth viewing experience with FHD+ and 120 Hz AMOLED Display. This phone is suitable for low-light conditions and doesn’t harm your eyes.",
            rating:4.2,
            image: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/n/w/e/-original-imagtyw9fdfnsune.jpeg?q=70",
        },
        {
            id:2,
            name: "MOTOROLA G32",
            price: 9999,
            discription:"You can experience lag-free gaming, fluid multitasking, and stunning, stutter-free images with the Moto G32. With a mind-blowing 16.51 cm (6.5) FHD+ Ultra-wide display and a refresh rate of 90 Hz, this phone makes it possible to multitask while being entertained. Furthermore, with a Snapdragon 680 Octa-core processor and 8 GB of RAM, you can juggle brilliantly without the smartphone overheating while enjoying an amazing UI.",
            rating:4.1,
            image: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/j/j/-original-imagnvvwvzyhfvx9.jpeg?q=70",
        },
        {
            id:3,
            name: "OnePlus Nord CE 2 Lite 5G",
            price: 16940,
            discription:"You can experience lag-free gaming, fluid multitasking, and stunning, stutter-free images with the Moto G32. With a mind-blowing 16.51 cm (6.5) FHD+ Ultra-wide display and a refresh rate of 90 Hz, this phone makes it possible to multitask while being entertained. Furthermore, with a Snapdragon 680 Octa-core processor and 8 GB of RAM, you can juggle brilliantly without the smartphone overheating while enjoying an amazing UI.",
            rating:4.4,
            image: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70",
        },
        {
            id:4,
            name: "Insta360 One X2 Sports and Action Camera",
            price: 34499,
            discription:"The Insta360 action camera makes everything look life-like with its 5.7K 360-degree capture. It has AI-powered reframing tools so that you don’t miss any shots. The 1.2 cm (0.5) sensor captures photos and videos with more details.",
            rating:4.4,
            image: "https://rukminim2.flixcart.com/image/832/832/kll7bm80/sports-action-camera/w/y/2/one-x2-one-cinosxx-a-insta360-original-imagyzbbyhcw8hh5.jpeg?q=70",
        },
        {
            id:5,
            name: "APPLE Watch Ultra GPS + Cellular - ECG App, Temp sensor, Fall Detection 49mm",
            price: 82999,
            discription:"The most rugged and capable Apple Watch ever, designed for exploration, adventure and endurance. With a 49-millimetre aerospace-grade titanium case, extra-long battery life, specialised apps that work with the advanced sensors and a new customisable Action button.",
            rating:4.6,
            image: "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/e/4/c/-original-imaghxg9hnk2bztm.jpeg?q=70",
        },
        {
            id:6,
            name: "APPLE iPhone 13",
            price: 52999,
            discription:"iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension.",
            rating:4.7,
            image: "https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70",
        }
    ]
}

const productReducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_PRODUCT:
            const newProduct = {
                id:uuidv4(),
                name : action.payload.name,
                discription : action.payload.discription,
                price : action.payload.price,
                rating : action.payload.rating,
                image : action.payload.image,
            };
            const addedProduct = [newProduct,...state.products];
            return{
                ...state,
                products:addedProduct,
            };
        case REMOVE_PRODUCT:
            const remove = state.products.filter((t)=>t.id!=action.payload)
            return{
                ...state,
                products:remove,
            };
        case UPDATE_PRODUCT:
            const update = state.products.map((product)=>{
                if(product.id===action.payload.id){
                    return {...product,
                        name:action.payload.name,
                        discription:action.payload.discription,
                        rating:action.payload.rating,
                        price:action.payload.price,
                        image:action.payload.image
                    }
                }
                return product;
            });
            return{
                ...state,
                products:update,
            };
        case SORT_PRICE:
            const sort = state.products.sort((p1,p2)=>(p1.price) - (p2.price))
            return{
                ...state,
                products:sort
            }
        default:
            return state;
    }
}

export default productReducer;