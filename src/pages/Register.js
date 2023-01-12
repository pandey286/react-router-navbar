import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <section className="">
            <div className='container'>
                <h2 className='m-2 text-center'>Register Here</h2>
                <form name='registerForm' >
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' className='form-control m-2' name='email'
                            placeholder='Enter email'
                            value='' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='form-control m-2' name='password'
                            placeholder='Password'
                            value='' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='address'>Address</label>
                        <textarea className='form-control m-2' rows={5} name='address' value=''></textarea>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='updates'>Update Frequency</label>
                        <select className='form-control m-2' name='updates' id='updates' value=''>
                            <option value=''>==== Select an Option ====</option>
                            <option value='daily'>Daily</option>
                            <option value='weekly'>Weekly</option>
                            <option value='monthly'>Monthly</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Gender</label>
                    </div>
                    <div className='form-group m-2'>
                        <input type='radio' id='male' name='gender' value='male' />
                        <label htmlFor='gender' className='agree-label'>Male</label>
                    </div>
                    <div className='form-group m-2'>
                        <input type='radio' id='female' name='gender' value='female' />
                        <label htmlFor='gender' className='agree-label'>Female</label>
                    </div>
                    <hr />
                    <div className='form-group'>
                        <input type='checkbox' name='agreeToTerms' value='' />
                        <label htmlFor='terms' className='agree-label m-2'>I agree to the terms and conditions</label>
                    </div>
                    <button type='submit' className='btn btn-primary m-2'>Register</button>
                </form>
            </div>

        </section>
    )
}

export default Register