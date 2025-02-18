import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserEmail } from '../../Redux/Users/UserActions';
import { setEmail } from '../../Redux/Users/UsersSlice';
import axios from 'axios';

function LoginPage() {
  const dispatch = useDispatch();
  const [credentials, setCreds] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreds({
      ...credentials,
      [name]: value,
    });
  };

  const handleClickLogin = async (e) => {
    e.preventDefault();
    try {
      // axios request to backend
      const response = await axios.post('http://localhost:8080/user/login', {
        email: credentials.email,
        password: credentials.password,
      });
      console.log(credentials);
      dispatch(setUserEmail(credentials.email));
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (err) {
      console.log('Something went wrong: ' + err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleClickLogin}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to your account
        </h2>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign in
          </button>
        </div>

        <p className="text-center">
          Dont have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-600">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
