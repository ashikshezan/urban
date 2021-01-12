import React from 'react';

const SignUp = () => {
    return (
        <>
            {/* component */}
            <div className="grid min-h-screen place-items-center">
                <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                    <h1 className="text-xl font-semibold">
                        Hello there 👋,
      <span className="font-normal">please fill in your information to continue</span>
                    </h1>
                    <form className="mt-6">
                        <div className="flex justify-between gap-3">
                            <span className="w-1/2">
                                <label htmlFor="firstname" className="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                                <input id="firstname" type="text" name="firstname" placeholder="John" autoComplete="given-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                            </span>
                            <span className="w-1/2">
                                <label htmlFor="lastname" className="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
                                <input id="lastname" type="text" name="lastname" placeholder="Doe" autoComplete="family-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                            </span>
                        </div>
                        <label htmlFor="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="john.doe@company.com" autoComplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                        <input id="password" type="password" name="password" placeholder="********" autoComplete="new-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <label htmlFor="password-confirm" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm password</label>
                        <input id="password-confirm" type="password" name="password-confirm" placeholder="********" autoComplete="new-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-gray-700 shadow-lg focus:outline-none hover:bg-gray-600 hover:shadow-none">
                            Sign up
      </button>
                        <p className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
                            Already registered?
      </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;