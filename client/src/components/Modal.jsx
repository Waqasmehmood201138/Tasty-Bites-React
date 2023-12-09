import React from 'react'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

export default function Modal() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
                <div className="modal-box">
                    <div className="modal-action flex flex-col justify-center mt-0">
                        <form className="card-body" method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            <h3 className='font-bold text-lg'>Please Login!</h3>

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
                                <input type='submit' value='Login' className="btn bg-green text-white" />
                            </div>

                            <p className='text-center my-2'>Donot have an account? <Link to="/signup" className='underline text-red ml-1'>Signup Now</Link></p>
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
                </div>
            </dialog>

        </>
    )
}
