import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import "./ProductItemStyles.css"; 

import { BsPlusCircle } from "react-icons/bs";


function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className="card">
      
      <div className="product-image">
        <div className="img">
          <Link to={`/products/${_id}`}><img alt={name} src={`/images/${image}`}/><BsPlusCircle className="overlay-img" size={40} style={{ color: "#white", marginRight: ".75rem" }} /></Link>

            <div className="overlay-btn">
              <button className="cart-btn hvr-sweep-to-top" onClick={addToCart}>Add to cart</button>
            </div>
        </div>
      </div>

        <div className="card-footer">
          <div className="left">
            <Link to={`/products/${_id}`}><p>{name}</p></Link>
              <div className="product-info">{quantity} {pluralize("item", quantity)} in stock</div>
          </div>

          <div className="right">
            <span className="cost">${price}</span>
          </div>
        </div>
    </div>
  );
}

export default ProductItem;
