import React, { useState } from 'react'
import { auth } from './firebase';
import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

//login handler
const Login = () => {


  const router = useRouter();

  const googleAuth = new GoogleAuthProvider();
  const login = async () =>{
const result= await signInWithPopup(auth,googleAuth)

//cookies
  Cookies.set('isLoggedIn', 'true');
  Cookies.set('userData', JSON.stringify(result.user));

  //redirect to products
  router.push('/products');

  }

  
  return (
    <div className='w-screen h-screen flex justify-center items-center text-center bg-opacity-50' style={{
      backgroundImage:
        'url(https://c0.wallpaperflare.com/preview/483/913/258/advanced-ai-anatomy-artificial.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className='w-full lg:w-3/6 h-2/3 md:h-3/6 flex flex-col gap-8 bg-gray-100 px-5 md:px-12 justify-center border-2'>

        <div className=''>
        <h1 className='text-2xl font-medium mb-3'>Polymath AI Next.js Programming Task</h1>
      <h1 className='text-base font-normal p-4 border'>Select and Save: Choose items from an API and store them in Firebase</h1>
        </div>
   
      <button onClick={login} className=' flex justify-center  items-center  gap-5 text-xl font-semibold border-2 px-10 border-blue-50 py-2 bg-blue-400 hover:bg-blue-500 text-white'> <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png" className='w-5 h-5' alt="" />Login with Google</button>

      </div>
      </div>

  )
}

export default Login