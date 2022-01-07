import { useState } from 'react'
import './Dashboard.css'
import MenuDown from '@material-ui/icons/ArrowDropDown'
import MenuUp from '@material-ui/icons/ArrowDropUp'
import AccountCircle from '@material-ui/icons/AccountCircle'
import SupervisorAccount from '@material-ui/icons/SupervisorAccount'
import useAuth from '../../context/useAuth'

const DashboardLayout = ({children}) => {
    const [open, setOpen] = useState(false)
    const {logout, isAuthenticated} = useAuth()
    const user = isAuthenticated().user
    return (
        <div className='dashboard-layout'>
            <div className="navbar">
                <div className="logo-box"></div>
                <div className="navbar-user">
                    <div className="avatar-box">
                        <img src={user?.avatar ? user?.avatar : "./avatar.png" } alt="avatar-images" />
                    </div>
                    <div>{!user?.name ? 'Guest' : user?.name}</div>
                    <div style={{cursor: 'pointer', marginTop: '8px'}} onClick={() => setOpen(!open)}>{open ? <MenuUp /> : <MenuDown />}</div>
                </div>
               {open &&  <div className='avatar-box-dialog'>
                    <div className='item active'> <AccountCircle /> <span>My Profile</span></div>
                    <div className='item'><SupervisorAccount/> <span>Group Chat</span></div>
                    <div className='item' onClick={logout}> <span>Logout</span></div>
                </div>}
            </div>
            {children}
        </div>
    )
}

export default DashboardLayout
