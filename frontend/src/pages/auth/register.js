import './auth.css'
import {Link } from 'react-router-dom'
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock'
import Authlayout from '../../components/Layouts/AuthLayout';
// import GoogleIcon from '@material-ui/icons/Googlr'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import GithubIcon from '@material-ui/icons/GitHub'

const Register = props => {
    return (
        <Authlayout>
            <div className="auth-box">
                <div className="auth-box-inner">
                    <div className='logo-box'></div>
                    <h4>Join thousands of learners from around the world </h4>
                    <p>Master web development by making real-life projects. There are multiple paths for you to choose</p>
                    <div className='input-group'>
                        <span><MailIcon /></span>
                        <input type={'email'} placeholder='Email' />
                    </div>
                    <div className='input-group'>
                        <span><LockIcon /></span>
                        <input type={'password'} placeholder="Password" />
                    </div>
                    <div className='btn-primary'>Start coding now</div>
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

                    <div className='footer'>Already a member? <Link to='/'>Login</Link></div>
                </div>
                <div className='auth-box-footer'>
                    <div>created by <strong>Gigman2</strong></div>
                    <div>devChallenges.io</div>
                </div>
            </div>
        </Authlayout>
    )
}

export default Register
