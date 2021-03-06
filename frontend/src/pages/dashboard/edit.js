import { useState, useEffect } from 'react';
import toast, {Toaster} from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth'
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import ChevronRight from '@material-ui/icons/ChevronLeft'
import Camera from '@material-ui/icons/CameraAlt'
import { useMutation, useQuery } from '@apollo/react-hooks';
import { GET_USER, UPDATE_USER } from "../../utils/queries";
import { useFormik } from 'formik'

import './dashboard.css'

const AccountEdit = props => {
    const { store } = useAuth()
    const [update, {loading}] = useMutation(UPDATE_USER);
    const { data:userData } = useQuery(GET_USER, {fetchPolicy: "no-cache"});
    const [image, setImage] = useState('')
    
    useEffect(() => {
        if(userData){
           store({user: userData.getUser})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData])


    const formik = useFormik({
        initialValues: {
          email: userData?.getUser?.email || '',
          name: userData?.getUser?.name || '',
          phone: userData?.getUser?.phone || '',
          bio: userData?.getUser?.bio || '',
          password: '',
          file: ''
        },
        enableReinitialize: true,
        onSubmit: async (val, { setSubmitting }) => {
          try {
            setSubmitting(true)
            let payload = {  
                email: val.email, 
                name: val.name, 
                phone: val.phone, 
                bio: val.bio, 
                password: val.password, 
            }
            if(val.file){
                payload.file = val.file
            }
            await update({ variables: payload})
            toast.success('Your info has been updated')
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
        setFieldValue
    } = formik

    const processFile = (val) => {
        let file = val.files[0]
        let preview = URL.createObjectURL(file)
        setImage(preview)
        setFieldValue('file', file)
    }

    return (
        <DashboardLayout>
            <Toaster  position="top-center"/>
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
                                <input type="file" id="avatar" onChange={(e) => processFile(e.target)}/>
                                <div className='select'>
                                    {userData?.getUser?.avatar || image ?
                                         <img src={image || 'http://localhost:5000/'+userData?.getUser?.avatar} alt="avatar-box"/>: null}
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
                            <div className='form-btn' onClick={handleSubmit} >{!isSubmitting || !loading? 'Save' : 'Saving ...'}</div>
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
