import { useState } from "react";
import "./index.css";

const AuthForm = ({ onSubmit }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = () => password.length >= 6;
  const isNameValid = () => name.trim().length > 0;

  const canSubmit = () =>
    isEmailValid() && isPasswordValid() && (isSignup ? isNameValid() : true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSubmit()) {
      onSubmit({ email, password, name, mode: isSignup ? "signup" : "login" });
    }
  };

  return (
    <div className='bookings'>
      <h2>{isSignup ? "Create Account" : "Login to your Account"}</h2>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <div className='form-field'>
            <label htmlFor='name'>
              Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setNameTouched(true)}
              required
            />
            {nameTouched && !isNameValid() && <p>Name is required</p>}
          </div>
        )}

        <div className='form-field'>
          <label htmlFor='email'>
            Email <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type='email'
            id='email'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
          />
          {emailTouched && !isEmailValid() && (
            <p>Enter a valid email address</p>
          )}
        </div>

        <div className='form-field'>
          <label htmlFor='password'>
            Password <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type='password'
            id='password'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setPasswordTouched(true)}
          />
          {passwordTouched && !isPasswordValid() && (
            <p>Password must be at least 6 characters</p>
          )}
        </div>

        <button
          className='button-primary'
          type='submit'
          disabled={!canSubmit()}
        >
          {isSignup ? "Sign Up" : "Log In"}
        </button>

        <p style={{ marginTop: "1rem", textAlign: "center" }}>
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type='button'
            onClick={() => setIsSignup(!isSignup)}
            style={{
              background: "none",
              border: "none",
              color: "#495e57",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {isSignup ? "Log In" : "Sign Up"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
