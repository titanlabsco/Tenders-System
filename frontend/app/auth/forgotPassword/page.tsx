import React from 'react'

const ForgotPassword: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/img/template.jpg')" }}
    >
      <div className="w-full max-w-md shadow-lg rounded-lg overflow-hidden bg-white p-8">
        <h2 className="text-black text-2xl font-bold mb-2">Forgot your password? 🔒</h2>
        <p className="text-gray-600 mb-6">
          Enter your email address, and we’ll send you instructions to reset your password.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#162D3A] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 flex justify-center">
          <a href="/auth/login" className="text-sm text-indigo-500 hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
