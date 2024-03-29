import React, { useState } from 'react';
import authService from '../services/auth.service.js';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.loginAuth(formData, dispatch);
      setMsg("Success Login");
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