import './Dashboard.css'
import MenuDown from '@material-ui/icons/ArrowDropDown'

const DashboardLayout = ({children}) => {
    return (
        <div className='dashboard-layout'>
            <div className="navbar">
                <div className="logo-box"></div>
                <div className="navbar-user">
                    <div className="avatar-box"></div>
                    <div>Xanthe Neal</div>
                    <MenuDown />
                </div>
            </div>
            {children}
        </div>
    )
}

export default DashboardLayout
