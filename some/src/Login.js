import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setIsLoggedIn }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Sync login state after localStorage update
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, [setIsLoggedIn]);

  // Password validation function
  const isValidPassword = (password) => {
    return (
      password.length >= 6 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    );
  };

  // Normalize email for case-insensitive comparison
  const normalizeEmail = (email) => email.trim().toLowerCase();

  // Handle Signup
  const handleSignup = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const normalizedEmail = normalizeEmail(email);

    if (storedUsers.some((user) => user.email === normalizedEmail)) {
      setMessage("Account already exists! Please login.");
      return;
    }

    if (!isValidPassword(password)) {
      setMessage("Password must be 6+ chars, with 1 uppercase, 1 lowercase, 1 number & 1 special char.");
      return;
    }

    storedUsers.push({ email: normalizedEmail, password });
    localStorage.setItem("users", JSON.stringify(storedUsers));

    // Update login state
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", normalizedEmail);
    setIsLoggedIn(true);

    navigate("/services");
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const normalizedEmail = normalizeEmail(email);
    const validUser = storedUsers.find((user) => user.email === normalizedEmail);

    if (!validUser) {
      setMessage("No account found with this email. Please sign up.");
      return;
    }

    if (validUser.password === password) {
      // Update login state
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loggedInUser", normalizedEmail);
      setIsLoggedIn(true);
      navigate("/services");
      window.dispatchEvent(new Event("storage")); 
    } else {
      setMessage("Incorrect password! Try again or reset it.");
    }
  };

  // Handle Forgot Password Request
  const handleForgotPassword = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const normalizedEmail = normalizeEmail(email);

    if (!storedUsers.some((user) => user.email === normalizedEmail)) {
      setMessage("No account found with this email.");
      return;
    }

    setMessage("Enter a new password below.");
    setIsForgotPassword(true);
  };

  // Handle Reset Password
  const handleResetPassword = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const normalizedEmail = normalizeEmail(email);
    const userIndex = storedUsers.findIndex((user) => user.email === normalizedEmail);

    if (!isValidPassword(newPassword)) {
      setMessage("Password must be 6+ chars, with 1 uppercase, 1 lowercase, 1 number & 1 special char.");
      return;
    }

    // Update password
    storedUsers[userIndex].password = newPassword;
    localStorage.setItem("users", JSON.stringify(storedUsers));

    setMessage("Password reset successful! Please login.");
    setIsForgotPassword(false);
    setNewPassword("");
    setPassword("");
  };

  return (
    <div className="auth-container">
      <h2>{isSignup ? "Sign Up" : isForgotPassword ? "Reset Password" : "Login"}</h2>

      {isForgotPassword ? (
        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      ) : (
        <form onSubmit={isSignup ? handleSignup : handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>
      )}

      {message && <p className="auth-message">{message}</p>}

      {!isForgotPassword && (
        <p className="forgot-password">
          <button onClick={handleForgotPassword}>Forgot Password?</button>
        </p>
      )}

      <p className="switch-auth">
        {isSignup ? "Already have an account?" : "Don't have an account?"}
        <button
          onClick={() => {
            setIsSignup(!isSignup);
            setIsForgotPassword(false);
            setMessage("");
          }}
        >
          {isSignup ? "Login here" : "Sign up"}
        </button>
      </p>
    </div>
  );
};

export default Login;
