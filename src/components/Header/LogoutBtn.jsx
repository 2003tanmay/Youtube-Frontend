import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../services/auth.service'
import { useNavigate } from 'react-router-dom'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = async () => {
        try {
            await authService.logoutAuth(dispatch);
            navigate("/login")
        } catch (error) {
            console.error('Logout error:', error);
        }
    }

    return (
        <button
            className='inline-bock px-6 py-2 duration-200 hover:bg-black opacity-60 rounded-lg text-white'
            onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn