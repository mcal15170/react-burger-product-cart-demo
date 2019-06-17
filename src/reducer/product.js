import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART
} from "../constants/actionType";
import Item1 from "../container/product/img/item1.png";
import Item2 from "../container/product/img/item2.png";
import Item3 from "../container/product/img/item3.png";
import Item4 from "../container/product/img/item4.png";
import Item5 from "../container/product/img/item5.png";
import Item6 from "../container/product/img/item6.png";
import Item7 from "../container/product/img/item7.png";
import Item8 from "../container/product/img/item8.png";

const INITIAL_STATE = {
  product: [
    {
      id: 1,
      title: "Winter body",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1
    },
    {
      id: 2,
      title: "Adidas",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2
    },
    {
      id: 3,
      title: "Vans",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3
    },
    {
      id: 4,
      title: "White",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4
    },
    {
      id: 5,
      title: "Cropped-sho",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5
    },
    {
      id: 6,
      title: "Blues",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6
    },
    {
      id: 7,
      title: "Umbrella",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 10,
      img: Item7
    },
    {
      id: 8,
      title: "Bag",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 40,
      img: Item8
    }
  ],
  cart: [],
  totalPrice:0,
  lastAddProdcutFromCart:""
};

const shopeReducer = (state = INITIAL_STATE, action) => {
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      console.log(action.payload);
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload.id
      );
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1,addedDate:new Date().toDateString() });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedItem.addedDate=new Date() 
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart,totalPrice:(state.totalPrice+action.payload.price)};
    case REMOVE_PRODUCT_FROM_CART:
      
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
      );

      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity--;
      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }


     

      return { ...state, cart: updatedCart,totalPrice:state.totalPrice-(updatedItem.price)};

    default:
      return state;
  }
};

export default shopeReducer;
