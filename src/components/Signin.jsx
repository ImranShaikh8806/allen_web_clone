import axios from 'axios';
import React, { useState } from 'react';
import { useAuth } from './auth.jsx'; 
import Signup from './Signup'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; 

export default function Signin({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const { setUserName, setIsLoggedIn } = useAuth();  

  const validateEmail = (email) => {
    
    return !/\S+@\S+\.\S+/.test(email); //regular expression in js
  };

  const validatePassword = (password) => {
    return password.length < 4 || password.length > 40;
  };

  const signin = async (userdata) => {
    setError('');
    setEmailError('');
    setPasswordError('');
    try {
      const response = await axios.post('http://localhost:3000/user/signin', userdata);
      const { token, userName } = response.data;

     
      localStorage.setItem('token', token);
      localStorage.setItem('userName', userName);

      
      setUserName(userName);
      setIsLoggedIn(true);  

      
      onClose();
    } catch (error) {
      setError('User not found. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    if (validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }

    if (validatePassword(password)) {
      setPasswordError('Password should be between 4 and 40 characters');
      return;
    } else {
      setPasswordError('');
    }

    
    await signin({ email, password });
  };

  return (
    <div className="flex flex-col">
      <button onClick={onClose} className="mt-7 text-blue-500 mr-80">
        <FontAwesomeIcon icon={faXmark} className="h-9 w-7" />
      </button>

      {showSignup ? (
        <Signup onClose={() => setShowSignup(false)} /> 
      ) : (
        <>
          <form onSubmit={handleSubmit} className="flex flex-col ml-4 space-y-6">
            <h1 className="text-white font-bold text-xl mt-12">Please enter your details properly</h1>

            <div className="border-2 border-gray-700 rounded-md hover:border-white p-3">
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="border-none bg-white w-full pl-3 text-black"
              />
            </div>
            {emailError && <div className="text-red-500 text-sm">{emailError}</div>} {/* Email error */}

            <div className="border-2 border-gray-700 rounded-md hover:border-white p-3">
              <input
                type="password" 
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="border-none bg-white w-full pl-3 text-black"
              />
            </div>
            {passwordError && <div className="text-red-500 text-sm">{passwordError}</div>} {/* Password error */}

            {error && <div className="text-red-500 text-sm">{error}</div>} {/* General error */}

            <div className="hover:bg-gray-700 text-center rounded-xl p-2 border-2 border-blue-500">
              <button type="submit" className="text-sm text-white font-bold">Sign In</button>
            </div>
          </form>

          <h4 className="hrLine mt-9">or</h4>

          <button onClick={() => setShowSignup(true)} className="mt-9 text-blue-500">
            If you don't have an account, please sign up
          </button>
        </>
      )}
    </div>
  );
}
