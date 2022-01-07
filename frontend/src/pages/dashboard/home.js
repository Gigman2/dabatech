import DashboardLayout from '../../components/Layouts/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from "../../utils/queries";

import './dashboard.css'

const Dashboard = props => {
    const { loading, error, data } = useQuery(GET_USER,{fetchPolicy: "no-cache"});
    
    const navigate = useNavigate()
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
                            {!(data?.getUser?.name && data?.getUser?.phone ) && <div className='alert-info-box'>Your profile is not complete Click edit to update</div>}
                        </div>
                        <div>
                            <div className='btn-outline' onClick={() => navigate('/edit')}>Edit</div>
                        </div>
                    </div>
                    <div className='page-card-body info-box'>
                        <div className='info-item'>
                            <div className='title'>Photo</div>
                            <div className='avatar'>
                                 <img src={data?.getUser?.avatar ? data?.getUser?.avatar : "./avatar.png" } alt="avatar-images" />
                            </div>
                        </div>
                        <div className='info-item'>
                            <div className='title'>Name</div>
                            <div className="content">{data?.getUser?.name ? data?.getUser?.name:' -- '}</div>
                        </div>
                        <div className='info-item'>
                            <div className='title'>Bio</div>
                            <div className="content">{data?.getUser?.bio ? data?.getUser?.bio:' -- '}</div>
                        </div>
                        <div className='info-item'>
                            <div className='title'>Phone</div>
                            <div className="content">{data?.getUser?.phone ? data?.getUser?.phone:' -- '}</div>
                        </div>
                        <div className='info-item'>
                            <div className='title'>Email</div>
                            <div className="content">{data?.getUser?.email ? data?.getUser?.email:' -- '}</div>
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
