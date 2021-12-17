import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const ProductAdd = () => {
    // const [user, setUser] = useState();
    // useLayoutEffect(() => {
    //     const a = localStorage.getItem('user')
    //     setUser(a)
    //     if (user === null) {
    //         navigate("/products")
    //     }
    // })
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();


    const onSubmit = async (item) => {
        const { data } = await axios.post("http://localhost:3001/products", item)
        console.log(data);
        navigate('/products');
    }
    return (
        <div className="text-center bg-gray-200">
            <h3 className="text-red-500">Thêm sản phẩm</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p>Tên sách</p>
                    <input type="text" {...register("title", { required: true })} />
                    {errors.title && <p className="text-red-500 font-bold">Hãy nhập đầy đủ thông tin!</p>}
                </div>
                <div>
                    <p>Ảnh</p>
                    <input type="text" {...register("img", { required: true })} />
                    {errors.img && <p className="text-red-500 font-bold">Hãy nhập đầy đủ thông tin!</p>}
                </div>
                <div>
                    <p>Giá</p>
                    <input type="number" {...register("price", { required: true })} />
                    {errors.price && <p className="text-red-500 font-bold">Hãy nhập đầy đủ thông tin!</p>}
                </div>
                <div>
                    <p>Mô tả</p>
                    <input type="text" {...register("desc", { required: true })} />
                    {errors.desc && <p className="text-red-500 font-bold">Hãy nhập đầy đủ thông tin!</p>}
                </div>
                <div>
                    <p>Tác giả</p>
                    <input type="text" {...register("author", { required: true })} />
                    {errors.author && <p className="text-red-500 font-bold">Hãy nhập đầy đủ thông tin!</p>}
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default ProductAdd
