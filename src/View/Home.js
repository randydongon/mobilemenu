import React from 'react';
import useAxiosGet from '../HttpRequest';
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader';

const Home = () => {

    const url = 'https://5eda650d98b7f500160dc54e.mockapi.io/api/v1/products?page=1&limit=10';

    const products = useAxiosGet(url);


    let content;
    if (products.error) { content = <p>There was an error loading fresh the page or try again later</p> }

    if (products.loading) {
        content = <Loader></Loader>
    }

    if (products.data) {
        content = products.data.map((item) => <div key={item.id}
            className="  ">
            <div className="py-3"><h1><strong>Name:</strong> {item.name}</h1></div>
            <div className="border mb-4 rounded overflow-hidden"><Link to={`/product/${item.id}`}><img src={item.image} alt="Product" /></Link></div>
            <div><h1><strong>Price:</strong> $ {item.price}</h1></div>
            <div className="py-3 text-justify"><p><strong>Description:</strong> {item.description}</p></div>
            <Link to={`/product/${item.id}`}
                className="bg-blue-500 text-white items-center justify-center py-1 flex">View</Link>
        </div>)
    }

    return (
        <div>
            {content}

        </div>

    );
}

export default Home;