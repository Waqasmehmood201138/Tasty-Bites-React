import React, { useContext } from 'react'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Modal from './Modal'
import { AuthContext } from '../contexts/AuthProvider'

export const Signup = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { createUser, login } = useContext(AuthContext);
    // redirecting to homepage or specific page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {

        const email = data.Email;
        const password = data.Password;
        createUser(email, password).then((result) => {
            // Signed up 
            const user = result.user;
            alert("Account Created Successfully!")
            navigate(from, { replace: true })
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error creating user:', errorCode, errorMessage);
                // Handle the error, display relevant message to the user, or take necessary action.
            });
    }

    return (
        <>
            <div className='max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-10'>
                <div className="modal-action flex flex-col justify-center mt-0">
                    <form className="card-body" method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        <h3 className='font-bold text-lg'>Create Account Here!</h3>

                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email" placeholder="email" className="input input-bordered"
                                required
                                {...register("Email")}
                            />
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password" placeholder="password" className="input input-bordered"
                                required
                                {...register("Password")}
                            />
                            <label className="label mt-1">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        {/* error text */}

                        {/* submit button */}
                        <div className="form-control mt-6">
                            <input type='submit' value='Sign me up' className="btn bg-green text-white" />
                        </div>

                        <p className='text-center my-2'>Already have an account? <button
                            className='underline text-red ml-1'
                            onClick={() => document.getElementById('my_modal_5').showModal()}
                        >Login Here</button></p>

                        {/* Cross button */}
                        <Link
                            to="/"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >✕</Link>
                    </form>

                    {/* Social sign in button */}
                    <div className='text-center space-x-3 mb-3'>
                        <button className='btn btn-circle hover:bg-green hover:text-white'>
                            <FaGoogle />
                        </button>
                        <button className='btn btn-circle hover:bg-green hover:text-white'>
                            <FaFacebookF />
                        </button>
                        <button className='btn btn-circle hover:bg-green hover:text-white'>
                            <FaGithub />
                        </button>
                    </div>

                </div>

                {/* Login Modal */}
                <Modal />

            </div>
        </>
    )
}
