import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import ChevronRight from '@material-ui/icons/ChevronLeft'
import Camera from '@material-ui/icons/CameraAlt'
import { useMutation, useQuery } from '@apollo/react-hooks';
import { GET_USER, UPDATE_USER } from "../../utils/queries";
import { useFormik } from 'formik'

import './dashboard.css'

const AccountEdit = props => {
    const [update, {data, loading}] = useMutation(UPDATE_USER);
    const { loading: userLoading, error:userError, data:userData } = useQuery(GET_USER, {fetchPolicy: "no-cache"});

    
    const formik = useFormik({
        initialValues: {
          email: userData?.getUser?.email || '',
          name: userData?.getUser?.name || '',
          phone: userData?.getUser?.phone || '',
          bio: userData?.getUser?.bio || '',
        },
        enableReinitialize: true,
        onSubmit: async (val, { setSubmitting }) => {
          
          try {
            setSubmitting(true)
            update({ variables: { email: val.email, name: val.name, phone: val.phone, bio: val.bio }})
          } catch (error) {
 
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
                                <input  
                                    placeholder='Enter you name...'
                                    id='name' 
                                    name='name'
                                    type='text'
                                    onChange={handleChange}
                                    value={values.name} 
                                />
                            </div>
                            <div className='form-group'>
                                <label>Bio</label>
                                <textarea placeholder='Enter you bio...' 
                                    id="bio" 
                                    name='bio' 
                                    onChange={handleChange}
                                    defaultValue={values.bio}>
                                </textarea>
                            </div>
                            <div className='form-group'>
                                <label>Phone</label>
                                <input  
                                    placeholder='Enter you phone...' 
                                    id="phone" 
                                    name="phone" 
                                    type="text"
                                    onChange={handleChange} 
                                    value={values.phone}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Email</label>
                                <input  placeholder='Enter you email...'
                                    id='email' 
                                    name='email'
                                    type='email'
                                    onChange={handleChange}
                                    value={values.email}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Password</label>
                                <input  placeholder='Enter you password...'/>
                            </div>
                            <div className='form-btn' onClick={handleSubmit} >{!isSubmitting || !loading? 'Save' : ''}</div>
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
