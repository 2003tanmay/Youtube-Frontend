import React, { useState, useEffect } from 'react';
import authService from '../services/auth.service.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  // const authStatus = useSelector(state => state.user.isLoggedIn)

  // useEffect(() => {
  //   authService.getUserOnLoad(dispatch);
  //   if (authStatus){
  //     navigate('/')
  //   }
  // }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.loginAuth(formData, dispatch);
      setMsg("Success Login");
      navigate("/")
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <div>{msg}</div>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Email or Username"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
    </div>
    
  );
};

export default LoginForm;