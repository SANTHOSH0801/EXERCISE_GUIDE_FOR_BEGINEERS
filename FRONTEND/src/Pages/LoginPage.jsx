import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import image1 from 'src/assets/gif1.gif'

function LoginPage() {
  const [inputs, setInputs] = useState({})

  const navigate = useNavigate()

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputs)
    navigate('/HomePage')
  }

  return (
    <>
      <header className="flex justify-between items-center px-10 py-6">
        <img
          src={image1}
          alt="Gold's Gym Logo"
          className="w-14 h-14"
        />

        <nav className="space-x-8 font-medium text-lg">
          <button className="border-b-2 border-black pb-1" onClick={() => navigate('/HomePage')}>
            Home
          </button>
          <a>About</a>
          <button onClick={(e) => navigate('/LoginPage')}>Login</button>
          <a className="font-semibold" onClick={(e) => navigate('/SignupPage')}>
            Sign up
          </a>
        </nav>
      </header>
      <section className="min-h-screen flex items-center justify-center bg-[url(/src/assets/cover7.jpg)] bg-center bg-[length:2000px]">
        <div className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-3/5 shadow-lg rounded-lg bg-white overflow-hidden">

          {/* Left Side - Form */}
          <div className="md:w-1/2 p-8">
            <div className="mb-8">
              <div className="flex items-center space-x-3 text-teal-600">
                <i className="fas fa-crow text-2xl"></i>
                <span className="text-3xl font-bold">SIGN IN</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-xs">
              <h3 className="text-2xl font-semibold tracking-wide">Log in</h3>

              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-gray-600">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="mb-1 text-gray-600">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={inputs.password || ""}
                  onChange={handleChange}
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg transition"
              >
                Login
              </button>

              <div className="text-sm text-gray-600 text-center">
                <p className="mb-2"><a href="#" className="hover:underline">Forgot password?</a></p>
                <p>
                  Don't have an account?{' '}
                  <a className="text-teal-600 hover:underline">Register here</a>
                </p>
              </div>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 hidden md:block">
            <img
              src="/src/assets/cover6.jpg"
              alt="Login visual"
              className="w-full h-full object-cover object-left"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginPage
