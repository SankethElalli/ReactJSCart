import React from 'react';

function ShoppingCart({ cart, removeFromCart }) {
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.product_price * item.quantity), 0);
    };

    if (cart.length === 0) {
        return (
            <div>
                <h4>Shopping Cart</h4>
                <div className="card">
                    <div className="card-body p-4">
                        <div className="p-2 text-center">
                            <h5>Your shopping cart is empty.</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h4>Shopping Cart</h4>
            <div className="card">
                <div className="card-body p-4">
                    <div className="cart-items">
                        {cart.map((item, index) => (
                            <div key={item.id}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex flex-row align-items-center">
                                        <div>
                                            <img src={item.product_image} 
                                                 className="img-fluid rounded-3" 
                                                 alt={item.product_name} 
                                                 style={{width: '40px'}} />
                                        </div>
                                        <div className="ms-3">
                                            <h6>{item.product_name}</h6>
                                            <p className="small mb-0">Rs. {item.product_price}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                        <div style={{width: '50px'}} className="quantity-badge">
                                            <h5 className="fw-normal mb-0">{item.quantity}</h5>
                                        </div>
                                        <div style={{width: '80px'}} className="price-tag">
                                            <h5 className="mb-0">Rs.{item.product_price * item.quantity}</h5>
                                        </div>
                                        <button className="btn-icon delete-btn">
                                            <img src="https://ultimez.com/tasks/assets/images/delete.png" 
                                                 onClick={() => removeFromCart(item.id)}
                                                 style={{width: '24px'}} 
                                                 alt="delete" />
                                        </button>
                                    </div>
                                </div>
                                {index < cart.length - 1 && <hr className="item-divider" />}
                            </div>
                        ))}
                    </div>
                    <hr className="total-divider" />
                    <div className="d-flex justify-content-between align-items-center grand-total">
                        <div>
                            <h5>Grand Total</h5>
                        </div>
                        <div>
                            <h5>Rs. {calculateTotal()}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
