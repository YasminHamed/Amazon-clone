import React from "react";
import "./Checkout.css";
import Header from '../Header/Header'
import { useStateValue } from "../contextAPI/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div>
        <Header/>
        <div className="checkout">
        <div className="checkout__left">
            <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            />

            <div>
            {/* <h3>Hello, {user?.email}</h3> */}
            <h3>Hello, </h3>

            {basket.length === 0 ?(
                <div>
                    <h2>Your Shopping Basket is empty!!</h2>
                    <br />
                    <p>You have no items in your basket. To buy one or more items, Click "Add to basket" next to the item.</p>
                </div>
            ) : (
                <div>
                    <h2>Your shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            )}

            </div>
        </div>

        <div className="checkout__right">
            <Subtotal/>
        </div>
        </div>
    </div>
  )
}

export default Checkout