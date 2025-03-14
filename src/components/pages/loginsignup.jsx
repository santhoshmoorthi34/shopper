
//
import React, { useState } from "react";
import "./css/loginsignup.css"

const Loginsingup = () => {
  const [state, setState] = useState("Login");

  const [formData, setformData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login form working", formData);
    let responseData;
    await fetch('https://shopperbackend-70xa.onrender.com/login', {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Content-Type': "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert("Existing user with the same email address");
    }
  };

  const signup = async () => {
    console.log("Signup form working", formData);
    let responseData;

    await fetch('https://shopperbackend-70xa.onrender.com/signup', {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Content-Type': "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert("Existing user with the same email address");
    }
  };

  return (
    <div className="loginsingup">
      <style>
        {`
        .loginsingup {
            width: 100%;
            heig/ht: 100vh;
            background: #fce3fe;
            padding-top: 25px;
        }
        .loginsingup-container {
            width: 580px;
            height: auto;
            background: white;
            margin: auto;
            padding: 40px 60px;
        }
        .loginsingup-container h1 {
            margin: 20px 0px;
        }
        .loginsingup-field {
            display: flex;
            flex-direction: column;
            gap: 30px;
            margin-top: 30px;
        }
        .loginsingup-field input {
            height: 72px;
            width: 100%;
            padding-left: 20px;
            border: 1px solid #c9c9c9;
            outline: none;
            color: #5c5c5c;
            font-size: 18px;
        }
        .loginsingup-container button {
            width: 100%;
            height: 52px;
            color: white;
            background: red;
            margin-top: 30px;
            border: none;
            font-size: 24px;
            font-weight: 500;
            cursor: pointer;
        }
        .loginsingup-login {
            margin-top: 20px;
            font-size: 18px;
            color: #5c5c5c;
            font-weight: 500;
        }
        .loginsingup-login span {
            color: red;
            font-weight: 600;
            cursor: pointer;
        }
        .loginsingup-agree {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-top: 10px;
            color: #5c5c5c;
            font-size: 18px;
            font-weight: 500;
        }
        `}
      </style>

      <div className="loginsingup-container">
        <h1>{state}</h1>
        <div className="loginsingup-field">
          {state === "Login" ? (
            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              placeholder="Email Address"
            />) : (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          )}

          {state === "Signup" && (
            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              placeholder="Email Address"
            />
          )}

          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>

        <button onClick={() => (state === "Login" ? login() : signup())}>
          Continue
        </button>

        {state === "Signup" ? (
          <p className="loginsingup-login">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className="loginsingup-login">
            Create an account?{" "}
            <span onClick={() => setState("Signup")}>Click here</span>
          </p>
        )}

        <div className="loginsingup-agree">
          <input type="checkbox" name="agree" id="agree" />
          <p>By continuing, I agree to the Terms of Use & Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Loginsingup;

