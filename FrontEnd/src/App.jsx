import LoginPage from "./components/authentication/Login";
import SignUp from "./components/authentication/Signup";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    {/* <LoginPage />
    <SignUp/> */}
    <Routes>
        <Route path="/" />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>

  ); 
}

export default App;
