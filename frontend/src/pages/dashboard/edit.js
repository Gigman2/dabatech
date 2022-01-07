import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import ChevronRight from '@material-ui/icons/ChevronLeft'
import Camera from '@material-ui/icons/CameraAlt'
import { useMutation } from '@apollo/react-hooks';
import { GET_USER } from "../../utils/queries";

import './dashboard.css'

const AccountEdit = props => {
    return (
        <DashboardLayout>
            <div className='page-card'>
                <Link to={'/'}><div className='breadcrumb'><ChevronRight /> Back</div></Link>
                <div className='page-card-inner'>
                    <div className='page-card-header-1'>
                        <div>
                            <h4>Change Info</h4>
                            <h6>Changes will be reflected to every services</h6>
                        </div>
                    </div>
                    <div className='page-card-body edit-box'>
                        <form>
                            <label for="avatar" className='update-avatar'>
                                <input type="file" id="avatar"/>
                                <div className='select'>
                                    <img src={''} />
                                    <span ><Camera /></span>
                                </div>
                                <div className='text'>Change Photo</div>
                            </label>
                            <div className='form-group'>
                                <label>Name</label>
                                <input  placeholder='Enter you name...'/>
                            </div>
                            <div className='form-group'>
                                <label>Bio</label>
                                <textarea placeholder='Enter you bio...'></textarea>
                            </div>
                            <div className='form-group'>
                                <label>Phone</label>
                                <input  placeholder='Enter you phone...'/>
                            </div>
                            <div className='form-group'>
                                <label>Email</label>
                                <input  placeholder='Enter you email...'/>
                            </div>
                            <div className='form-group'>
                                <label>Password</label>
                                <input  placeholder='Enter you password...'/>
                            </div>
                            <div className='form-btn'>Save</div>
                        </form>
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

export default AccountEdit
