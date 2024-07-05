import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
       <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
          
          { /* left */ }
          <div className='flex-1' >
            <Link to="/" className='text-4xl font-bold dark:text-white' >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white mx-2' > CodePan... </span>
              Blogs 
            </Link>
            <p className='text-sm mt-5'>
              One of the best website for computer science student , learners , developers .
              You can signup with your gmail and password or with Google
            </p>
          </div>


          { /* right */ }
          <div className='flex-1'>
            <form className='flex flex-col gap-4'>
              <div className=''>
                <Label value='Enter username' />
                <TextInput
                  type='text'
                  placeholder='Username'
                  className='w-full'
                  id='username'
                />
              </div>

              <div className=''>
                <Label value='Enter email' />
                <TextInput
                  type='text'
                  placeholder='Email'
                  className='w-full'
                  id='email'
                />
              </div>

              <div className=''>
                <Label value='Enter password' />
                <TextInput
                  type='text'
                  placeholder='Password'
                  className='w-full'
                  id='password'
                />
              </div>

              <Button gradientDuoTone="purpleToPink" type='submit' >
                  Sign Up
              </Button>
              <div className='mt-5 text-sm flex gap-2'>
                <span>Already to have an account? </span>
                <Link to="/sign-in" className='text-blue-500'>
                    Sign In
                </Link>
              </div>

            </form>

          </div>


       </div>
    </div>
  )
}

export default SignUp
