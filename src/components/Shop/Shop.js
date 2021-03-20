import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import Product from '../Product/Product';

const Shop = (props) => {

    console.log(props);
    const {products, addToCart} = props;

    return (
        <div>
            <h2>This is shop</h2>
            {
                products.map(pd => <Product addToCart={addToCart} key={pd.id} product={pd}></Product>)
            }
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart : addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);