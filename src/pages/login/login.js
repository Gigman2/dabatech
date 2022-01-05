import './login.css'

const login = props => {
    return (
        <div className="auth-box">
            <div className='logo-box'></div>
            <h4>Join thousands of learners from around the world </h4>
            <p>Master web development by making real-life projects. There are multiple paths for you to choose</p>
            <div className='input-group'>
                <input />
            </div>
            <div className='input-group'>
                <input />
            </div>
            <div className='btn-primary'>Start coding now</div>
            <div className='social-option'>or continue with these social profile</div>
            <div className='social-option-wrapper'>
                <div className='social-icons'>
                    <div className='icon'></div>
                    <div className='icon'></div>
                    <div className='icon'></div>
                    <div className='icon'></div>
                </div>
            </div>
        </div>
    )
}

export default login
