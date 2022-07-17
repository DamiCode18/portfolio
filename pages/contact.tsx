import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';
type Props = {
    name: string,
    formData: [],
    required: boolean,
}

const Contact = (props: Props) => {
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
        axios.post("https://api.slapform.com/olRzpExKL", {
            formData
        }).then((response) => {
            setFormData({
                name: '',
                email: '',
                message: ''
            })
            console.log(response);
        }).catch((error) => {
            console.log(error);
        }
        )
    };

    return (
        <Fragment>

            <form onSubmit={onSubmit} className="w-[30rem] mx-auto my-6 h-[400px]">
                <div className="mb-6">
                    <input autoComplete="off" name="name" type="text" onChange={handleChange} value={formData.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required />
                </div>
                <div className="mb-6">
                    <input autoComplete="off" name="email" type="email" onChange={handleChange} value={formData.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
                </div>
                <div className="mb-6">
                    <textarea rows={5} autoComplete="off" name="message" onChange={handleChange} value={formData.message} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Shoot your message!!! I'll definitely get back to you..." required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </Fragment>
    )
}

export default Contact;