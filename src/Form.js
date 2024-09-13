import React from 'react';

const Form = () => {
    return (
        <div className="bg-blue-50 mb-5 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Get started with Egniol today
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Have a question or feedback? Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="company" className="sr-only">
                                Company
                            </label>
                            <input
                                id="company"
                                name="company"
                                type="text"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Company"
                            />
                        </div>

                        <div>
                            <label htmlFor="mobile" className="sr-only">
                                Mobile no
                            </label>
                            <input
                                id="mobile"
                                name="mobile"
                                type="tel"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Mobile no"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#03518F] hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
