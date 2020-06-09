import React from 'react';
import Loader from '../Components/Loader';
import { useParams } from 'react-router-dom';
import '../index.css';
import useAxiosGet from '../HttpRequest';

const Product = () => {
    const { id } = useParams()

    const url = `https://5eda650d98b7f500160dc54e.mockapi.io/api/v1/products/${id}`;

    const product = useAxiosGet(url);

    let content;

    if (product.error) {

        content = <p>There was an error page cannot be found</p>
    }

    if (product.loading) {
        content = <Loader></Loader>
    }

    if (product.data) {
        content = <div>
            <div><h1 className="text-xl font-bold text-blue-500">Name: {product.data.name}</h1></div>
            <div className="border rounded overflow-hidden"><img src={product.data.image} alt="" /></div>
            <div>Price: $ {product.data.price}</div>
            <div className="text-justify">Description: {product.data.description}</div>
        </div>

    }

    return (
        <div>
            {content}
        </div>
    );
}

export default Product;