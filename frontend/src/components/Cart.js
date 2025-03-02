import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/slices/cartSlice";

const Cart = () => {
    const dispatch = useDispatch()
    const { cartItems, totalItems, totalItemsPrice, totalQuantity } = useSelector((state) => state.cart)
    console.log('cartItems:', cartItems)
    return(
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length == 0 ? ( 
             <p>Your cart is empty.</p> 
            ) : (
                <div>
                <div className="mainDiv">
                    {cartItems.map((item) => (
                        <div key={item.id}>
                        <div className="cartimg">
                            <img src={item.image} alt={item.name} width="150" height="140" />
                        </div>
                        <div className="carttitle">
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                        </div>
                        </div>

                    ))}
                   
                </div>
                 <div className="payment">
                 <h3>Total Items: {totalItems}</h3>
                 <h3>Total Price: ${totalItemsPrice}</h3>
                <button className="pay">Pay Now</button>
                 </div>
                 </div>
                
            )}
        </div>

    );
}

export default Cart