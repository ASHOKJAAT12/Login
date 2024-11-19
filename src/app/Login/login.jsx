import Link from 'next/link'
import React from 'react'

function login() {
  return (
    <div className='flex items-center text-center justify-center min-h-screen bg-slate-900 w-full'>
      <div className='bg-slate-200 h-[350px] w-[400px] pt-6 rounded-lg'>
        <h1 className='text-2xl font-semibold'>Login</h1>
        <form className='flex pl-10 gap-6 flex-col pt-10'>
          <div className='flex'>
            <input className='w-[300px] h-[30px] rounded pl-2 outline-none' type='text' placeholder='username'></input>
          </div>
          <div className='flex'>
            <input className='w-[300px] h-[30px] rounded pl-2 outline-none' type='password' placeholder='password'></input>
          </div>

          <div className='flex gap-14'>

            <div className='flex gap-1'>
              <input type='checkbox'></input>
              <div>Remember Me</div>
            </div>

            <div>
              <Link href={'/'}>Forgot Password?</Link>
            </div>

          </div>

        </form>

        <button className='bg-gray-900 h-[40px] w-[140px] hover:bg-slate-200  rounded-2xl mt-4  hover:text-[#333] text-[#c9c6c6]'>LOGIN</button>
        <div className='flex justify-center mt-2 gap-1 '>
          <p>Dont Have an account?</p>
          <Link className='text-[#8ea9e4] underline' href={'/'}>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default login
