import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

function ProductList({ addToCart }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${config.apiUrl}/api/products`)
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError('Error loading products');
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading products...</div>;
    if (error) return <div>{error}</div>;
    if (!products?.length) return <div>No products found</div>;

    return (
        <div className="card">
            <h4>Products List</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td><img src={product.product_image} alt={product.product_name} style={{width: '60px'}}/></td>
                            <td>{product.product_name}</td>
                            <td>Rs. {product.product_price}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => addToCart(product)}>
                                    Add To Cart
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;
