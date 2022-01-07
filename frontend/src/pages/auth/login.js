import './auth.css'
import { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom'
import Authlayout from '../../components/Layouts/AuthLayout';
import { useMutation } from '@apollo/react-hooks';
import { useFormik } from 'formik'
import { LOGIN } from "../../utils/queries";
import useAuth from '../../context/useAuth'
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock'
// import GoogleIcon from '@material-ui/icons/Googlr'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import GithubIcon from '@material-ui/icons/GitHub'

const Login = props => {
    const { store } = useAuth()
    const navigate = useNavigate();
    const [login] = useMutation(LOGIN);
    const [formError, setFormError] = useState(null)


    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        enableReinitialize: true,
        onSubmit: async (val, { setSubmitting }) => {
          
          try {
            setSubmitting(true)
            const {data} = await login({ variables: { email: val.email, password: val.password }})
            let token = data.login.token
            console.log(token)
            delete data.login.token
            let user = data.login
            store({token, user})
            if(user?.name){
                navigate("/")
            }else{
                navigate("/edit")
            }
          } catch (error) {
              if(error){
                let msg = JSON.parse(error?.message)
                setFormError(msg.error.errors)
              }
          } finally {
            setSubmitting(false)
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
                    <h4>Login </h4>
                    {formError && <div className='errorBox'>
                        {formError && Object.entries(formError).map(([key, value], i) => {
                            return <div key={key+i}>{`${value}`}</div>
                        })}
                    </div>}
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
                    <div className='btn-primary' onClick={handleSubmit} disabled={isSubmitting} >{isSubmitting ? ' Sending ... ' : 'Login'}</div>
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

                    <div className='footer'>Already a member? <Link to='/register'>Register</Link></div>
                </div>
                <div className='box-footer'>
                    <div>created by <strong>Gigman2</strong></div>
                    <div>devChallenges.io</div>
                </div>
            </div>
        </Authlayout>
    )
}

export default Login
