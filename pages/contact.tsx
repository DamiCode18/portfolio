/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useState } from 'react'
import axios from 'axios';
import Head from 'next/head'

type Data = {
    name: string
}

const Contact = () => {
    const [formData, setFormData] = useState({
        subject: '',
        email: '',
        text: ''
    });
    const [status, setStatus] = useState(false)
    const [error, setError] = useState(false)

    const handleChange = (evt: any) => {
        const value = evt.target.value;
        setFormData({
            ...formData,
            [evt.target.name]: value
        });
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post(`${process.env.NEXT_PUBLIC_EMAIL_API}`, {
            formData
        }).then(() => {
            setFormData({
                subject: '',
                email: '',
                text: ''
            })
            setStatus(true);
            setTimeout(() => {
                setStatus(false);
            }, 5000)
        })
            .catch((error) => error)
    };

    return (
        <Fragment>
            <Head>
                <title>Damicode | Contact </title>
            </Head>
            {status && <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 shadow-md px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Your message have been sent successfully!</strong>
                <span className="block sm:inline">I'll definitely get back to you soon</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg onClick={() => setStatus(false)} className="fill-current h-6 w-6 text-teal-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                </span>
            </div>
            }
            {error && <div className="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 shadow-md px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Ooops!</strong>
                <span className="block sm:inline">Please check that everything is alright and try again.</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg onClick={() => setError(false)} className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                </span>
            </div>
            }
            <h1 className="head-shadow text-center my-[4rem] mx-[10%] justify-center mt-5">Contact</h1>
            <form onSubmit={onSubmit} className="p-6 max-w-[30rem] mx-auto my-6 h-[400px]">
                <div className="mb-6">
                    <input autoComplete="off" name="subject" type="text" onChange={handleChange} value={formData.subject} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff7b00d8] focus:border-[#ff7b00d8] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff7b00d8] dark:focus:border-[#ff7b00d8" placeholder="Enter your name" required />
                </div>
                <div className="mb-6">
                    <input autoComplete="off" name="email" type="email" onChange={handleChange} value={formData.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff7b00d8] focus:border-[#ff7b00d8] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff7b00d8] dark:focus:border-[#ff7b00d8]" placeholder="Enter your email" required />
                </div>
                <div className="mb-6">
                    <textarea rows={5} autoComplete="off" name="text" onChange={handleChange} value={formData.text} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff7b00d8] focus:border-[#ff7b00d8] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff7b00d8] dark:focus:border-[#ff7b00d8]" placeholder="Shoot your message!!! I'll definitely get back to you..." required />
                </div>
                <button type="submit" className="text-white bg-[#ff7a00] hover:bg-[#ff7b00d8] focus:ring-4 focus:outline-none focus:ring-[#ff7b00d8] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Send message!</button>
            </form>
        </Fragment>
    )
}

export default Contact;