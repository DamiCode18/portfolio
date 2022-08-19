import React, { Fragment, useState } from 'react'
import axios from 'axios';
import Head from 'next/head'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (evt: any) => {
        const value = evt.target.value;
        setFormData({
            ...formData,
            [evt.target.name]: value
        });
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post(`${process.env.NEXT_PUBLIC_DATA_URL}`, {
            formData
        }).then((response) => {
            setFormData({
                name: '',
                email: '',
                message: ''
            })
            alert(response.status === 200 && 'Your message have been sent successfully, I will definitely get back to you soon');
        }).catch((error) => {
            alert(error && 'Sure your details are filled in correctly?, check again!');
        }
        )
    };

    return (
        <Fragment>
            <Head>
                <title>Damicode | Contact </title>
            </Head>
            <h1 className="head-shadow text-center my-[4rem] mx-[10%] justify-center mt-5">Contact</h1>
            <form onSubmit={onSubmit} className="p-6 max-w-[30rem] mx-auto my-6 h-[400px]">
                <div className="mb-6">
                    <input autoComplete="off" name="name" type="text" onChange={handleChange} value={formData.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff7b00d8] focus:border-[#ff7b00d8] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff7b00d8] dark:focus:border-[#ff7b00d8" placeholder="Enter your name" required />
                </div>
                <div className="mb-6">
                    <input autoComplete="off" name="email" type="email" onChange={handleChange} value={formData.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff7b00d8] focus:border-[#ff7b00d8] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff7b00d8] dark:focus:border-[#ff7b00d8]" placeholder="Enter your email" required />
                </div>
                <div className="mb-6">
                    <textarea rows={5} autoComplete="off" name="message" onChange={handleChange} value={formData.message} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff7b00d8] focus:border-[#ff7b00d8] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff7b00d8] dark:focus:border-[#ff7b00d8]" placeholder="Shoot your message!!! I'll definitely get back to you..." required />
                </div>
                <button type="submit" className="text-white bg-[#ff7a00] hover:bg-[#ff7b00d8] focus:ring-4 focus:outline-none focus:ring-[#ff7b00d8] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Send message!</button>
            </form>
        </Fragment>
    )
}

export default Contact;