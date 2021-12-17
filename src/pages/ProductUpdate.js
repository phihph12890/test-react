import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ProductUpdate = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const navigate = useNavigate();

    const { id } = useParams()

    

    useEffect(() => {
        const getBook = async () => {
            const { data } = await axios.get(`http://localhost:3001/products/${id}`)
            reset(data)
        }
        getBook()
    }, [id])

    const onSubmit = async (item) => {
        const { data } = await axios.put(`http://localhost:3001/products/${id}`, item)
        console.log(data);
        navigate('/products');
    }

    return (
        <div className="text-center bg-gray-200">
            <h3 className="text-red-500">Cập nhật sản phẩm</h3>
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

export default ProductUpdate
