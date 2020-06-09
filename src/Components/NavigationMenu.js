import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = (props) => {
    return (
        <div>
            <div className="py-3 items-center">
                AppName
                    </div>

            <ul className="font-light">
                <li>
                    <Link to="/"
                        className="text-blue-500 border-b border-t block py-3"
                        onClick={props.onClose}

                    >Home</Link>
                </li>
                <li>
                    <Link to="/about"
                        className="text-blue-500 border-b block py-3"
                        onClick={props.onClose}
                    >About us</Link>
                </li>
                <li>
                    <Link to="/product"
                        className="text-blue-500 border-b block py-3"
                        onClick={props.onClose}
                    >Product</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavigationMenu;