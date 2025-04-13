import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogInPage.css";
import pages from "../../../utils/pages";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    if (isSignup) {
      // Save signup info in localStorage
      const user = { fullName, email, password };
      localStorage.setItem("littleLemonUser", JSON.stringify(user));
      alert("Signup successful! Please login.");
      setIsSignup(false); // Switch to login view
      setEmail("");
      setPassword("");
      setFullName("");
    } else {
      // Try to fetch and match user
      const savedUser = JSON.parse(localStorage.getItem("littleLemonUser"));
      if (
        savedUser &&
        savedUser.email === email &&
        savedUser.password === password
      ) {
        navigate(pages.get("home").path);
      } else {
        setError("Invalid email or password.");
      }
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit} className='login-form'>
        <h2>{isSignup ? "Create an Account" : "Login"}</h2>

        {isSignup && (
          <div className='form-field'>
            <label htmlFor='name'>Full Name</label>
            <input
              type='text'
              id='name'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
        )}

        <div className='form-field'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='form-field'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className='error-message'>{error}</p>}

        <button type='submit' className='button-primary'>
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <p className='toggle-text'>
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            onClick={() => {
              setIsSignup(!isSignup);
              setError("");
            }}
          >
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
