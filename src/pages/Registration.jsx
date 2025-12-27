import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Registration = () => {
    const auth = useContext(AuthContext);
    const { createUser, setUser, updateUser } = auth || {};
    const [nameError, setNameError] = useState('')

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError('name must be more then 5 character')
            // return
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.pass.value;
        // console.log({ name, photo, email, password })

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        navigate('/')
                    })
                    .catch(() => {
                        // console.log(error)
                        setUser(user)
                    });

            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                alert(errorCode,)
            });
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
                <h2 className="font-semibold text-2xl text-center">Registration your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">

                        {/* Name */}
                        <label className="label">Name</label>
                        <input
                            name='name'
                            type="text"
                            className="input"
                            placeholder="Name"
                            required
                        />
                        {
                            nameError ? <p className='text-red-500'>{nameError}</p> : ''
                        }

                        {/* Photo Url */}
                        <label className="label">Photo URL</label>
                        <input
                            name='photo'
                            type="text"
                            className="input"
                            placeholder="Photo URL"
                        />

                        {/* email */}
                        <label className="label">Email</label>
                        <input
                            name='email'
                            type="email"
                            className="input"
                            placeholder="Email"
                            required
                        />

                        {/* password */}
                        <label className="label">Password</label>
                        <input
                            name='pass'
                            type="password"
                            className="input"
                            placeholder="Password"
                            required
                        />

                        {/* <div><a className="link link-hover">Forgot password?</a></div> */}

                        <button type='submit' className="btn btn-neutral mt-4">Registration</button>

                        <p className='font-semibold text-center mt-5'>Already Have an account?{'  '}
                            <Link className='text-secondary' to={'/auth/login'}>Login</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Registration;







// import React, { use } from 'react';
// import { Link } from 'react-router';
// import { AuthContext } from '../provider/AuthProvider';

// const Registration = () => {
//     const { createUser } = use(AuthContext)