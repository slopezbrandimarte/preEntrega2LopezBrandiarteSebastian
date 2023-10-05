import cart from "./assets/cart.svg"
import "./CartWidget.css"


function CartWidget(){

    return (
        <div  >
            <img src={cart} alt="cart-widget" width="25px" height="auto"/>
            0
        </div>
    )
}

export default CartWidget
