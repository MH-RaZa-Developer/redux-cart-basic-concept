import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';

const Cart = (props) => {

    console.log(props);

    const {cart, removeFromCart} = props;

    return (
        <div>
            <h2>This is Cart</h2>
            <ul>
                {
                    cart.map(pd => <li>{pd.name}<button onClick={() => removeFromCart(pd.cartId)}>X</button></li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);