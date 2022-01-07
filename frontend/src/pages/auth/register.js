import './auth.css'
import { useState, useEffect } from 'react';
import {Link, useNavigate } from 'react-router-dom'
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock'
import Authlayout from '../../components/Layouts/AuthLayout';
import { useMutation } from '@apollo/react-hooks';
import { useFormik } from 'formik'
import { REGISTER } from "../../utils/queries";
import useAuth from '../../context/useAuth'

// import GoogleIcon from '@material-ui/icons/Googlr'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import GithubIcon from '@material-ui/icons/GitHub'

const Register = props => {
    const { store } = useAuth()
    const navigate = useNavigate();
    const [register, {data, loading}] = useMutation(REGISTER);

    useEffect(() => {
        if(data !== undefined){
            let token = data.register.token
            delete data.register.token
            let user = data.register
            store({token, user})
            navigate("/edit")
        }
    }, [data])

    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        enableReinitialize: true,
        onSubmit: async (val, { setSubmitting }) => {
          
          try {
            setSubmitting(true)
            register({ variables: { email: val.email, password: val.password }})
          } catch (error) {
 
          } finally {
            // setSubmitting(false)
          }
        }
    })

    const {
        values,
        handleChange,
        handleSubmit,
        isSubmitting,
    } = formik

    return (
        <Authlayout>
            <div className="auth-box">
                <div className="auth-box-inner">
                    <div className='logo-box'></div>
                    <h4>Join thousands of learners from around the world </h4>
                    <p>Master web development by making real-life projects. There are multiple paths for you to choose</p>
                    <form>
                        <div className='input-group'>
                            <span><MailIcon /></span>
                            <input 
                                id='email' 
                                name='email'
                                type='email'
                                placeholder='Email' 
                                onChange={handleChange}
                                value={values.email} 
                            />
                        </div>
                        <div className='input-group'>
                            <span><LockIcon /></span>
                            <input 
                                id='password' 
                                name='password'
                                type='password'
                                placeholder="Password" 
                                onChange={handleChange}
                                value={values.password}
                            />
                        </div>
                    </form>
                    <div className='btn-primary' onClick={handleSubmit} disabled={isSubmitting || loading} >{isSubmitting|| loading ? 'Registering ... ' : 'Start coding now'}</div>
                    <div className='social-option'>or continue with these social profile</div>
                    <div className='social-option-wrapper'>
                        <div className='social-icons'>
                            <div className='icon'>
                                {/* <GoogleIcon /> */}
                            </div>
                            <div className='icon'>
                                <FacebookIcon />
                            </div>
                            <div className='icon'>
                                <TwitterIcon />
                            </div>
                            <div className='icon'>
                                <GithubIcon />
                            </div>
                        </div>
                    </div>

                    <div className='footer'>Already a member? <Link to='/login'>Login</Link></div>
                </div>
                <div className='box-footer'>
                    <div>created by <strong>Gigman2</strong></div>
                    <div>devChallenges.io</div>
                </div>
            </div>
        </Authlayout>
    )
}

export default Register
