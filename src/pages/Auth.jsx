import React, { useState } from "react";
import { loginAction, registerAction } from "../redux/actions/auth";
import { useDispatch } from "react-redux";

const Auth = () => {
  const [signUp, setSignUp] = useState(true);
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const onChangeFunc = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };
  const authFunc = () => {
    if (signUp) {
      dispatch(registerAction(authData));
    } else {
      dispatch(loginAction(authData));
    }
  };
  console.log("authData", authData);
  return (
    <div className="w-full h-screen bg-red-400 flex items-center justify-center ">
      <div className="w-1/3 bg-gray-100 p-4">
        <h1 className="text-2xl text-indigo-600 font-bold">
          {signUp ? "REGISTER" : "LOGIN"}
        </h1>
        <div className="flex flex-col space-y-3 my-5">
          {signUp && (
            <input
              value={authData.username}
              name="username"
              onChange={onChangeFunc}
              type="text"
              placeholder="username"
              className="input-style"
            />
          )}
          <input
            value={authData.email}
            name="email"
            onChange={onChangeFunc}
            type="text"
            placeholder="E-mail"
            className="input-style"
          />
          <input
            value={authData.password}
            name="password"
            onChange={onChangeFunc}
            type="text"
            placeholder="Password"
            className="input-style"
          />
        </div>
        <div className="text-red-500 text-sm cursor-pointer mb-4 p-1">
          {signUp ? (
            <span onClick={() => setSignUp(false)}>
              Daha önce giriş yaptınız mı?
            </span>
          ) : (
            <span onClick={() => setSignUp(true)}>
              Kayıt olmak için tıklayınız...
            </span>
          )}
        </div>
        <div
          onClick={authFunc}
          className="w-full p-2 text-center bg-indigo-600 text-white rounded-md cursor-pointer hover:bg-indigo-800"
        >
          {signUp ? "KAYIT OL" : "GİRİŞ YAP"}
        </div>
      </div>
    </div>
  );
};

export default Auth;
