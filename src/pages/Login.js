import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <section className="">
            <div className='container'>
                <h2 className='m-2 text-center'>Login Here</h2>
                <form className=''>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' className='form-control m-3' name='email'
                            placeholder='Enter email' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='form-control m-3' name='password' placeholder='Password' />
                    </div>
                    <button type='button' className='btn btn-primary m-3'>Login</button>
                </form>
            </div>
        </section>
    )
}

export default Login

