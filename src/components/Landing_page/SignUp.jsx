'use client'
import Link from 'next/link'
import React from 'react'



function SignUp() {
  return (
    <div className='flex items-center text-center justify-center min-h-screen bg-slate-900 w-full'>
      <div className='bg-slate-200 h-[390px] w-[400px] pt-6 rounded-lg'>
        <h1 className='text-2xl font-semibold'>Sign Up</h1>
        <form className='flex pl-10 gap-6 flex-col pt-4'>
          <div className='flex'>
            <input className='w-[300px] h-[30px] rounded pl-2 outline-none' type='text' placeholder='Name'></input>
          </div>
          <div className='flex'>
            <input className='w-[300px] h-[30px] rounded pl-2 outline-none' type='email' placeholder='Email'></input>
          </div>
          <div className='flex'>
            <input className='w-[300px] h-[30px] rounded pl-2 outline-none' type='password' placeholder='password'></input>
          </div>


        </form>

        <button className='bg-gray-900 h-[40px] w-[140px]   rounded-2xl mt-6 hover:bg-orange-400 hover:text-[#333] text-[#c9c6c6]'>Sign Up</button>
        <div className='flex justify-center mt-4 gap-1 '>
          <p>Already Have an account?</p>
          <Link id='login_btn' className='text-[#8ea9e4] underline' href={'/Login'}>Login In</Link>
        </div>
        <hr className='text-[#333] mt-2 mx-6'></hr>

        <button id='google' className='border-slate-900 hover:text-[#333] rounded font-semibold hover:bg-slate-200 border-[1px] h-[40px] w-[200px] mt-4'>
          Sign Up With Google
        </button>
        
      </div>
    </div>
  )
}


export default SignUp
