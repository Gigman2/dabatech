import './auth.css'
import {Link } from 'react-router-dom'
import Authlayout from '../../components/Layouts/AuthLayout';

import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock'
// import GoogleIcon from '@material-ui/icons/Googlr'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import GithubIcon from '@material-ui/icons/GitHub'
const login = props => {
    return (
        <Authlayout>
            <div className="auth-box">
                <div className="auth-box-inner">
                <div className='logo-box'></div>
                <h4>Login </h4>
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

export default login
