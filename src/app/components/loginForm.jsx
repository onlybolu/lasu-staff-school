"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'


const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const Logo = '/logo.jpg'

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            username,
            password
        }
        console.log(data)
        alert('Login successful')
        if(!username || !password){
            alert('Please fill in all fields')
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }
  return (
    <div className='bg-white rounded-3xl shadow-lg p-8 max-w-sm md:max-w-xl justify-center mx-2 flex flex-col w-full'>
      <div className='flex-col  '>
      <div className=" flex justify-center">
        <Image width={500} height={500} className='w-[35%]' src={Logo} alt="" />
       </div>
       <div className='flex justify-center pt-4 font-bold text-2xl text-center text-gray-700 border-b-1 border-gray-300 pb-4'>
        <h1>LAGOS STATE UNIVERSITY STAFF SCHOOL</h1>
       </div>
      </div>
      <div className='flex flex-col justify-center items-center py-6 '>
        <h2 className='text-2xl font-bold text-red-700'>Login as Student</h2>
      </div>
      <form className='flex flex-col gap-4 ' onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <div className='border-2 border-gray-300 flex items-center  px-2 py-1.5 mt-2 '>
          <input type="text" id='username' className='outline-none w-full ' onChange={(e) => setUsername(e.target.value)} placeholder='Username' required />
          <svg className='text-gray-500' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
        </div>
        <div className='border-2 border-gray-300  px-2 py-1.5 mt-2  flex items-center'>
          <input type="password" id='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} className='outline-none w-full ' required />
          <svg className='text-gray-500' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"/>
</svg>
        </div>
        <div className='flex gap-1 text-gray-500 cursor-pointer items-center '>
            <input type="checkbox" name="check" id="" />
            <p>Keep me signed in</p>
        </div>
        <button type="submit" className={`bg-red-400 text-white font-bold py-2 px-16 cursor-pointer transition-all ease-in-out duration-700`}>Login</button>
      </form>
    </div>
  )
}

export default LoginForm