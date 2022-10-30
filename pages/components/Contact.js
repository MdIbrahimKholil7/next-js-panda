import axios from 'axios';
import React, { useState } from 'react';

const Contact = () => {

    const [formData, setFormData] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { data } = await axios.post('http://localhost:3000/api/contractApi', {
            formData
        })
        console.log(data)
    }

    return (
        <div>
            <div className='flex justify-center items-center my-20'>
                <div className="card-body max-w-[500px]">
                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                type="text"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                type="text"
                                placeholder="Email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                type="number"
                                placeholder="Phone"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;