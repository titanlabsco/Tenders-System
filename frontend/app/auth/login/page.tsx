'use client'

import React from 'react'

const Login: React.FC = () => {
  const handleGitHubLogin = () => {
    window.location.href = 'https://github.com/login/oauth/authorize'
  }

  const handleGitLabLogin = () => {
    window.location.href = 'https://gitlab.com/oauth/authorize'
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/img/template.jpg')" }}
    >
      <div className="w-full max-w-md shadow-lg rounded-lg overflow-hidden bg-white p-8">
        <h2 className="text-black text-2xl font-bold mb-2">Welcome to the Blockchain Tender System 👋</h2>
        <p className="text-gray-600 mb-6">
          Secure and transparent procurement for governments and businesses starts here.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Example@email.com"
              className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="At least 8 characters"
              className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex justify-end items-center mb-6">
            <a href="/auth/forgotPassword" className="text-sm text-indigo-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#162D3A] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
          >
            Sign in
          </button>
        </form>

        <div className="my-4 flex items-center justify-center">
          <span className="text-gray-400">or</span>
        </div>

        <button
          onClick={handleGitHubLogin}
          className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition duration-300 flex items-center justify-center mb-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.463-1.11-1.463-.907-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.528 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.22-.252-4.555-1.111-4.555-4.945 0-1.091.39-1.983 1.029-2.683-.103-.253-.446-1.268.098-2.64 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.845c.852.004 1.71.115 2.51.337 1.908-1.294 2.747-1.025 2.747-1.025.546 1.372.202 2.387.099 2.64.64.7 1.028 1.592 1.028 2.683 0 3.843-2.338 4.688-4.566 4.936.36.31.68.919.68 1.854 0 1.338-.012 2.421-.012 2.75 0 .268.18.578.688.48C19.135 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              clipRule="evenodd"
            />
          </svg>
          Sign in with GitHub
        </button>

        <button
          onClick={handleGitLabLogin}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
            <path d="M23.86 9.3l-3.89-7.2a.5.5 0 00-.89 0L15.05 9.3H8.94L4.92 2.1a.5.5 0 00-.89 0L.14 9.3A2 2 0 002.3 12l9.67 7.4a.5.5 0 00.59 0L21.7 12a2 2 0 002.16-2.7z" />
          </svg>
          Sign in with GitLab
        </button>

        <p className="text-black mt-4 text-center text-sm">
          Don’t have an account?{' '}
          <a href="/auth/register" className="text-indigo-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
