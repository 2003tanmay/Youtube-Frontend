// LoginPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import LoginForm from '../components/LoginForm';
import authService from '../services/auth.service';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const selector = useSelector();
  const authStatus = useSelector(state => state.user.isLoggedIn)

  useEffect(() => {
    const fetchData = async () => {
      if (!authStatus) {
        try {
          const user = await authService.getUserOnLoad(dispatch);
          // const updatedAuthStatus = selector(state => state.user.isLoggedIn);
          if (user) {
            navigate('/');
          } else {
            setShowLoginForm(true);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setShowLoginForm(true);
        }
      } else {
        navigate('/');
      }
    };

    fetchData(); // Call fetchData function immediately
  }, [authStatus, dispatch, navigate]);

  return (
    <div>
      {showLoginForm ?  <LoginForm /> : <LandingPage />}
    </div>
  );
};

export default Login;