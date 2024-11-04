import React from 'react'

const Login = () => {
  return (
    <>
    <div className='flex h-screen w-screen items-center justify-center' >
      <div className='border-2 border-red-600' >
        <form action="" className='flex flex-col gap-5'>
          <input className='text-xl border-2 border-r-sky-700 rounded-3xl py-3 px-4' type="email" placeholder='Enter your email' />
          <input className='text-xl border-2 border-r-sky-700 rounded-3xl py-3 px-4' type="password" placeholder='Enter your password' />
          <button className='text-xl border-2 border-r-sky-700 rounded-3xl py-3 px-4'>Login</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login