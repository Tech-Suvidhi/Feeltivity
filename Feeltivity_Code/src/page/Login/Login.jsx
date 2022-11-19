import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase-config";

import { Button, TextField } from "@mui/material";
import logo from "./../../assets/image/logo.ico";
import GoogleIcon from "@mui/icons-material/Google";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const LogInUser = async (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.password) {
      setData({ ...data, error: "All fields are required!" });
    }
    const result = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    navigate("/");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {/* Content (Username, password, ) + Image */}
      {/* Logo */}
      {/* Some Text saying hello */}
      {/* Some one-liner */}
      {/* Email*/}
      {/* Password */}
      {/* some gap then Login (sign in with google account) */}
      {/* in end Don't have an account yet? Sign Up */}

      <div className="hidden h-[100vh] bg-[#2d5abf] sm:block justify-evenly"> 
        <img src={logo} alt="" />
        <div className="bold text-white text-6xl uppercase">Feeltivity</div>
        <div className="text-white font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tempore?
        </div>
      </div>

      <div className="text-center mx-[10%] flex flex-col justify-evenly">
        <div className="block">
          <img src={logo} alt="" className="cover m-auto" />
          <div className="text-4xl uppercase mt-5 mb-1">hello!</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            tempore?
          </div>
        </div>

        <form className="grid grid-cols-1 mx-[5%] sm:mx-[5%] md:mx-[15%]">
          <TextField
            id="outlined-username-input"
            label="Email"
            type="username"
            autoComplete="current-password"
            sx={{ my: 1 }}
            onChange={handleChange}
          />

          {/* Add onChange = {function} when making function */}
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            sx={{ my: 1 }}
            onChange={handleChange}
          />

          <Button variant="contained" sx={{ mt: 5, p: 1 }} onChange={LogInUser}>
            Login
          </Button>
          <Button
            variant="outlined"
            sx={{ mt: 2, p: 1 }}
            startIcon={<GoogleIcon />}
          >
            Sign In With Google
          </Button>
        </form>

        <div>
          Don't have an account yet?
          <Button variant="text" onClick={handleClick}>Sign Up</Button>
        </div>
      </div>
    </div>
  );
}
