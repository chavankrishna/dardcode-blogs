import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'



const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value.trim() })
  }
  
  const handleSubmit = async (e) =>{
      e.preventDefault();
      if(!formData.username || !formData.email || !formData.password)
      {
        return setErrorMessage("please fill all fields")
      }

      try {
          setLoading(true)
          setErrorMessage(null)
          const res = await fetch('/api/auth/signup', {
              method : 'POST',
              headers : {'Content-Type' : 'application/json' },
              body : JSON.stringify(formData)
          });

          const data = await res.json();
          if(data.success === false )
          {
            return setErrorMessage(data.message)
          }
          setLoading(false)
          if(res.ok)
          {
            navigate('/sign-in');
          }
      } catch (error) {
        setErrorMessage(error.message)
        setLoading(false)
      }
  }

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
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div className=''>
                <Label value='Enter username' />
                <TextInput 
                  type='text'
                  placeholder='Username'
                  className='w-full'
                  id='username'
                  onChange={handleChange}
                />
              </div>

              <div className=''>
                <Label value='Enter email' />
                <TextInput
                  type='email'
                  placeholder='Email'
                  className='w-full'
                  id='email'
                  onChange={handleChange}
                />
              </div>

              <div className=''>
                <Label value='Enter password' />
                <TextInput
                type='password'
                  placeholder='Password'
                  className='w-full'
                  id='password'
                  onChange={handleChange}
                />
              </div>

              <Button gradientDuoTone="purpleToPink" type='submit' disabled={loading} >
                  {
                    loading ? (
                      <>
                        <Spinner size="sm" />
                        <span className='pl-3'>Loading... </span>
                      </>
                    ):'Sign Up'
                  }
              </Button>
              <div className='mt-5 text-sm flex gap-2'>
                <span>Already to have an account? </span>
                <Link to="/sign-in" className='text-blue-500'>
                    Sign In
                </Link>
              </div>

              {
                errorMessage && (
                  <Alert className='mt-5' color='failure'>
                    {errorMessage}
                  </Alert>
                )
              }

            </form>

          </div>


       </div>
    </div>
  )
}

export default SignUp
