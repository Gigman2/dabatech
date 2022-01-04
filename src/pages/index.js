import {lazy } from 'react'

const Login = lazy(() => import('./login/login'))

const Pages = {
    Login,
  }
  
export default Pages