import React, { useState } from 'react';
import axios from "axios";
import { useAuth } from './auth';

export default function Signup({ onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    
  
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    
    const { setUserName } = useAuth();

   
    const validateInputs = () => {
        let isValid = true;
      
        setEmailError("");
        setPasswordError("");
        setFirstNameError("");
        setLastNameError("");

       
        if (!email) {
            setEmailError("Email is required.");
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) { //taken from gpt
            setEmailError("Email is invalid.");
            isValid = false;
        }

       
        if (!password) {
            setPasswordError("Password is required.");
            isValid = false;
        } else if (password.length < 4) {
            setPasswordError("Password must be at least 4 characters.");
            isValid = false;
        }

        
        if (!firstName) {
            setFirstNameError("First name is required.");
            isValid = false;
        }

        
        if (!lastName) {
            setLastNameError("Last name is required.");
            isValid = false;
        }

        return isValid;
    };

    const signup = async (userdata) => {
        setError("");
        setSuccess("");

        try {
            const response = await axios.post("http://localhost:3000/user/signup", userdata);
            setSuccess("Signup succeeded");
            const { token, username } = response.data;
            localStorage.setItem('token', token);
            setUserName(username);
            onClose();
            return response.data;
        } catch (error) {
            setError("Signup not completed, please try again.");
            console.error(error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

       
        if (validateInputs()) {
            await signup({ email, password, firstName, lastName });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col mt-9 space-y-5'>

                <div className='border-2 border-gray-700 rounded-md hover:border-white p-3'>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter email'
                        className="border-none bg-white w-full pl-3 text-black"
                    />
                   
                    {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                </div>

                <div className='border-2 border-gray-700 rounded-md hover:border-white p-3'>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter password'
                        className="border-none bg-white w-full pl-3 text-black"
                    />
                    
                    {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                </div>

                <div className='border-2 border-gray-700 rounded-md hover:border-white p-3'>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='Enter your first name'
                        className="border-none bg-white w-full pl-3 text-black"
                    />
                    
                    {firstNameError && <p className="text-red-500 text-sm">{firstNameError}</p>}
                </div>

                <div className='border-2 border-gray-700 rounded-md hover:border-white p-3'>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Enter your last name'
                        className="border-none bg-white w-full pl-3 text-black"
                    />
                    
                    {lastNameError && <p className="text-red-500 text-sm">{lastNameError}</p>}
                </div>

                <p>{error}</p>

                <div className='hover:bg-gray-700 text-center rounded-xl p-2 border-2 border-blue-500'>
                    <button type='submit' className='text-sm text-white font-bold'>
                        Submit
                    </button>
                </div>

                <p>{success}</p>
            </form>
            <button onClick={onClose}>Close</button>
        </div>
    );
}
