import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { AuthContext } from '../../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom'

export default function UpdateProfile() {

    const {updateUserProfile} = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

        // redirecting to homepage or specific page
        const location = useLocation();
        const navigate = useNavigate();
        const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        const name = data.name;
        const photoURL = data.photoURL;

        updateUserProfile(name, photoURL).then(() => {
           // profile updated
           navigate(from, { replace: true })
           // ....
        }).catch(() => {
            // error occured
            // ....
        })
    }

    return (
        <>
            <div className='flex items-center justify-center h-screen'>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='font-bold'>Update Your Profile</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Update Photo</span>
                            </label>
                            <input {...register("photoURL")} type="text" placeholder="PhotoURL" className="input input-bordered" required />
                            {/* <input type="file" className="file-input w-full max-w-xs" /> */}

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-green text-white">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
