import DashboardLayout from '../../components/Layouts/DashboardLayout';
import './dashboard.css'

const Dashboard = props => {
    return (
        <DashboardLayout>
            <div className='page-head'>
                <h3>Personal info</h3>
                <h5>Basic info, like your name and photo</h5>
            </div>
            <div className='page-card'>
                <div className='page-card-inner'>
                    <div className='page-card-header'>
                        <div>
                            <h4>Profile</h4>
                            <h6>Some info may be visible to other people</h6>
                        </div>
                        <div className='btn-outline'>Edit</div>
                    </div>
                    <div className='page-card-body info-box'>
                        <div className='info-item'>
                            <div className='title'>Photo</div>
                            <div className='avatar'></div>
                        </div>
                        <div className='info-item'>
                            <div className='title'>Name</div>
                            <div className="content">Xanter Neal</div>
                        </div>
                        <div className='info-item'>
                            <div className='title'>Bio</div>
                            <div className="content">I am a software developer and a big fan of devchallenges...</div>
                        </div>
                        <div className='info-item'>
                            <div className='title'>Phone</div>
                            <div className="content">908249274292</div>
                        </div>
                        <div className='info-item'>
                            <div className='title'>Email</div>
                            <div className="content">xanthe.neal@gmail.com</div>
                        </div>
                        <div className='info-item'>
                            <div className='title'>Password</div>
                            <div className="content">**********</div>
                        </div>
                    </div>
                </div>
                <div className='box-footer'>
                    <div>created by <strong>Gigman2</strong></div>
                    <div>devChallenges.io</div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Dashboard
