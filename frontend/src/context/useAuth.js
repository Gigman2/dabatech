import React, { useState, useEffect, createContext } from 'react'
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'
const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [session, setSession] = useState(true)
  
    useEffect(() => {
      let mounted = true
      if (!session && mounted) return logout(true)
      return () => (mounted = false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session])
  
    const store = ({ token, user: individual}) => {
      if (token) window.sessionStorage.setItem('dt_token', token)
      if (individual)
        window.sessionStorage.setItem('dt_user', JSON.stringify(individual))
    }
  
    const isAuthenticated = () => {
      const token = window.sessionStorage.getItem('dt_token')
      const user = window.sessionStorage.getItem('dt_user')
  
      if (token && user) {
        return { token: token, user: JSON.parse(user)}
      } else {
        return {}
      }
    }
  
    const logout = () => {
      try {
        window.sessionStorage.clear()
        navigate("/login");
      } catch (error) {
        return error
      }
    }
  
    return (
      <AuthContext.Provider
        value={{
          user,
          store,
          logout,
          setUser,
          session,
          setSession,
          isAuthenticated,
        }}
      >
        {children}
      </AuthContext.Provider>
    )
  }

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}
 
export default function useAuth() {
    return React.useContext(AuthContext)
}
  