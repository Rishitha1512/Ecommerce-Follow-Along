import { useState } from "react";
import validationFormObject from "../../validation.js";
import { Link } from "react-router-dom";

function SignUpPage() {
  const [userCredentials, setUserCredentials] = useState({
    userName: "", // Added name field
    userEmail: "",
    userPassword: "",
    userFile: null,
  });
  const [Errorr, setError] = useState("");
  // name
  // pass
  // email
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
    console.log();
  };

  const handleSubmit = () => {
    // e.preventDefault();

    const NameV = validationFormObject.validteName(userCredentials.userName);
    const EmailV = validationFormObject.validateEmail(
      userCredentials.userEmail
    );
    const PassV = validationFormObject.validatePass(
      userCredentials.userPassword
    );

    if (typeof NameV == "string" && NameV.length > 1) {
      console.log("error 1");
      return setError(NameV);
    }
    if (typeof EmailV == "string" && EmailV.length > 2) {
      console.log("error 2");
      return setError(EmailV);
    }
    if (typeof PassV == "string" && PassV.length > 2) {
      console.log("error 3");
      return setError(PassV);
    }
    return;
    // axios request
  };

  //   const handleFileChange = (event) => {
  //     const { files } = event.target;
  //     setUserCredentials({
  //       ...userCredentials,
  //       userFile: files[0],
  //     });
  //   };

  // const handleSignUpClick = () => {
  //   // axios request to backend for sign up
  // };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-800">
          Create a new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name input */}
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-800"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="userName"
                id="userName"
                required
                value={userCredentials.userName}
                onChange={handleInputChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-teal-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Email input */}
          <div>
            <label
              htmlFor="userEmail"
              className="block text-sm font-medium text-gray-800"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                autoComplete="email"
                required
                value={userCredentials.userEmail}
                onChange={handleInputChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-teal-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Password input */}
          <div>
            <label
              htmlFor="userPassword"
              className="block text-sm font-medium text-gray-800"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="userPassword"
                id="userPassword"
                autoComplete="current-password"
                required
                value={userCredentials.userPassword}
                onChange={handleInputChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-teal-600 sm:text-sm"
              />
            </div>
          </div>

          {/* File upload input */}
          <div>
            <label
              htmlFor="userFile"
              className="block text-sm font-medium text-gray-800"
            >
              Upload a file
            </label>
            <div className="mt-2">
              <input
                type="file"
                name="userFile"
                id="userFile"
                accept=".jpg , .jpeg , .png"
                onChange={handleInputChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-teal-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Sign up button */}
          <div>
            {/* <p className="color-red">{Errorr}</p> */}
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Sign Up
            </button>
            <p className="text-center">
              Already have an account ? <Link to={"/login"}>Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
