import React, { useState, useEffect } from 'react';
import { auth } from '../Firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useUserStore } from '../store/userSlice';
import { addUser ,getUserById} from '../Firebase/DB';





export default function Authcard({ setVisibility }) {
  const { setId, setName, setEmail } = useUserStore();
  
  const [heading, setHeading] = useState("Log In");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  

  const logIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      getUserById(userCredential.user.uid);

      return userCredential.user.uid;
    } catch (error) {
      console.error('Login Error:', error.message);
      return null;
    }
  };

  const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      //add user to database
      addUser({
        name: form.name,
        email:form.email,
      }, userCredential.user.uid)


      return userCredential.user.uid;
    } catch (error) {
      console.error('Sign Up Error:', error.message);
      return null;
    }
  };

  const inputCredentials = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const result = heading === "Sign Up" 
      ? await signUp(form.email, form.password) 
      : await logIn(form.email, form.password);

    if (result) {
      setId(result);
      setName(form.name);
      setEmail(form.email);      
      setVisibility(false);
      
      // Save user data to local storage
      localStorage.setItem('user', JSON.stringify({
        id: result,
        name: form.name,
        email: form.email,
      }));

      alert('Login/Sign Up successful!');
    } else {
      console.error('Authentication failed');
      alert('Authentication failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className='absolute h-screen w-full bg-[#000000e1] top-0 left-0 flex justify-center items-center text-white'>
      <i onClick={() => setVisibility(false)} className="fa-solid fa-square-xmark absolute top-6 right-6 text-green-500 text-2xl md:text-3xl cursor-pointer"></i>

      <form onSubmit={submitForm} className='bg-gray-800 p-6 rounded'>
        <h1 className='text-center text-2xl md:text-4xl m-4 font-serif'>{heading}</h1>

        {heading === "Sign Up" && (
          <div className='flex justify-between w-80 py-2 text-lg md:text-xl md:w-96'>
            <label className='font-serif' htmlFor="name">Name: </label>
            <input 
              onChange={inputCredentials} 
              className='outline-none px-2 bg-transparent border-[1px] border-green-600 rounded' 
              type="text" 
              name='name' 
              value={form.name} 
              required={heading === "Sign Up"}
            />
          </div>
        )}

        <div className='flex justify-between w-80 py-2 text-lg md:text-xl md:w-96'>
          <label className='font-serif' htmlFor="email">Email: </label>
          <input 
            onChange={inputCredentials} 
            className='outline-none px-2 bg-transparent border-[1px] border-green-600 rounded' 
            type="email" 
            name='email' 
            value={form.email} 
            required
          />
        </div>

        <div className='flex justify-between w-80 py-2 text-lg md:text-xl md:w-96'>
          <label className='font-serif' htmlFor="password">Password: </label>
          <input 
            onChange={inputCredentials} 
            className='outline-none px-2 bg-transparent border-[1px] border-green-600 rounded' 
            type="password" 
            name='password' 
            value={form.password} 
            required
          />
        </div>

        <div className='p-4 w-80 md:w-96'>
          <input 
            className='my-4 cursor-pointer w-full text-xl text-black font-serif bg-green-500 rounded' 
            type="submit" 
            value={heading}
          />
          {heading === "Log In" && (
            <p className='text-center'>Don't Have an account? 
              <span onClick={() => setHeading("Sign Up")} className='text-green-400 font-semibold cursor-pointer'> Sign Up</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
