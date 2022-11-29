/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useState } from "react";
import axios from "axios";
import Head from "next/head";

type Data = {
  email: string;
  subject: string;
  text: string;
};

const Contact = (props: Data) => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    text: "",
  });
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (evt: any) => {
    const value = evt.target.value;
    setFormData({
      ...formData,
      [evt.target.name]: value,
    });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_EMAIL_API}`, {
        formData,
      })
      .then(() => {
        setFormData({
          subject: "",
          email: "",
          text: "",
        });
        setStatus(true);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <Fragment>
      <Head>
        <title>Damilare Adebayo | Contact </title>
      </Head>
      {status && (
        <div
          className="bg-teal-100 border-t-4 z-50 border-teal-500 rounded-b text-teal-900 shadow-md px-4 py-3 mt-2 rounded relative max-w-[35rem] ml-auto"
          role="alert"
        >
          <strong className="font-bold">
            Your message have been sent successfully!{" "}
          </strong>
          <span className="block sm:inline">
            {" "}
            I'll definitely get back to you soon
          </span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              onClick={() => setStatus(false)}
              className="fill-current h-6 w-6 text-teal-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      {error && (
        <div
          className="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 shadow-md px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Ooops!</strong>
          <span className="block sm:inline">
            Please check that everything is alright and try again.
          </span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              onClick={() => setError(false)}
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      <h1 className="head-shadow text-center my-[4rem] mx-[10%] justify-center mt-20">
        Contact
      </h1>
      <form
        onSubmit={onSubmit}
        className="contact p-6 max-w-[30rem] mx-auto my-6 h-[400px]"
      >
        <div className="mb-6">
          <input
            autoComplete="off"
            name="subject"
            type="text"
            onChange={handleChange}
            value={formData.subject}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff7b00d8] focus:border-[#ff7b00d8] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff7b00d8] dark:focus:border-[#ff7b00d8"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-6">
          <input
            autoComplete="off"
            name="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff7b00d8] focus:border-[#ff7b00d8] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff7b00d8] dark:focus:border-[#ff7b00d8]"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <textarea
            rows={5}
            autoComplete="off"
            name="text"
            onChange={handleChange}
            value={formData.text}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff7b00d8] focus:border-[#ff7b00d8] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff7b00d8] dark:focus:border-[#ff7b00d8]"
            placeholder="Shoot your message!!! I'll definitely get back to you..."
            required
          />
        </div>
        <button
          type="submit"
          className="transition ease-in-out duration-500 hover:scale-80 hover:-translate-y-1 delay-150 text-white bg-[#ff7a00] hover:bg-[#ff7b00d8] focus:ring-4 focus:outline-none focus:ring-[#ff7b00d8] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          {loading ? (
            <span>
              <svg
                className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              Processing
            </span>
          ) : (
            "Send message!"
          )}
        </button>
      </form>
    </Fragment>
  );
};

export default Contact;
