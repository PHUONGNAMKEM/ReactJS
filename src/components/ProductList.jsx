import React from 'react';  
import Product from '../components/Product';  

function ProductList() {  
    const products = [  
        { id: 1, name: 'Laptop', price: 999 },  
        { id: 2, name: 'Smartphone', price: 799 },  
        { id: 3, name: 'Tablet', price: 499 },  
    ];  

    return (  
        <div>  
            <h1>Product List</h1>  
            {products.map(product => (  
                <Product key={product.id} name={product.name} price={product.price} />  
            ))}  
        </div>  
    );  
}  

export default ProductList;  
