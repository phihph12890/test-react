import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <ul>
                <Link to="/products">Products</Link>
            </ul>
        </div>
    )
}

export default Dashboard
