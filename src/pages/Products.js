import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([])

    
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get("http://localhost:3001/products")
            setBooks(data)
        }
        getProducts();
    }, [])
    return (
        <div>
            <Link className="btn btn-primary" to='/products/add'>Thêm mới sản phẩm</Link>
            <div>
                <h2 className="text-3xl font-bold">Danh sách sản phẩm</h2>
                <table className="w-[800px] table table-hover">
                    <thead>
                        <tr className="border">
                            <th className="border">STT</th>
                            <th className="border">TITLE</th>
                            <th className="border">IMG</th>
                            <th className="border">PRICE</th>
                            <th className="border">DESC</th>
                            <th className="border">AUTHOR</th>
                            <th className="border">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books && books.map((item, index) => {
                            return (
                                <tr key={item.id} className="border">
                                    <td className="border">{index + 1}</td>
                                    <td className="border">{item.title}</td>
                                    <td className="border">
                                        <img src={item.img} />
                                    </td>
                                    <td className="border">{item.price}</td>
                                    <td className="border">{item.desc}</td>
                                    <td className="border">{item.author}</td>
                                    <td className="border">
                                        <button className="btn btn-primary">
                                            <Link to={`/products/update/${item.id}`}>Update </Link>
                                        </button>
                                        <button className="btn btn-danger"
                                            onClick={async () => {
                                                console.log(item.id);
                                                await axios.delete(`http://localhost:3001/products/${item.id}`)
                                                const newBooks = books.filter(element => {
                                                    return element.id !== item.id
                                                })
                                                setBooks(newBooks);
                                            }}
                                        >Remove</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products
