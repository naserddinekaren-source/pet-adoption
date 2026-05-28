import React, { useState } from "react";

function Login({ user, setUser }) {
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isLogin, setIsLogin] = useState(true); 

  const handleAuth = (e) => {
    e.preventDefault(); 

    if (!nameInput || !passwordInput) {
      return alert("Please enter both a name and a password");
    }

    if (isLogin) {

      console.log("Logging in as:", nameInput);
      localStorage.setItem("user", nameInput);
      setUser(nameInput);
    } else {
  
      console.log("Signing up as:", nameInput);
      alert("Account created successfully! You can now login.");
      setIsLogin(true); 
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        {user ? (
          <div className="login-success">
            <h2>Welcome back, {user}!</h2>
            <button className="login-submit-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <form className="login-form" onSubmit={handleAuth}>
            <h2 className="login-title">{isLogin ? "Welcome Back" : "Create Account"}</h2>
            <p className="login-subtitle">
              {isLogin ? "Login to continue your journey" : "Join us to start adopting"}
            </p>
            
            <input
              className="login-input"
              placeholder="Username"
              onChange={(e) => setNameInput(e.target.value)}
            />
            
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            
            <button type="submit" className="login-submit-btn">
              {isLogin ? "Login" : "Sign Up"}
            </button>
            
            <p className="signup-text">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <span 
                style={{ cursor: "pointer", color: "var(--primary)", fontWeight: "bold" }}
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign Up" : "Login"}
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;