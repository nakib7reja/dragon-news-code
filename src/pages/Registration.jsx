import React from 'react';
import { Link } from 'react-router';

const Registration = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
                <h2 className="font-semibold text-2xl text-center">Registration your account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">

                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="name" className="input" placeholder="Name" />

                        {/* Photo Url */}
                        <label className="label">Photo URL</label>
                        <input type="name" className="input" placeholder="Photo URL" />

                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />

                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        {/* <div><a className="link link-hover">Forgot password?</a></div> */}

                        <button className="btn btn-neutral mt-4">Registration</button>
                        <p className='font-semibold text-center mt-5'>Already Have an account?{'  '}
                            <Link className='text-secondary' to={'/auth/login'}>Login</Link>
                        </p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Registration;