import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useForm } from "./hooks/useForm";
import { registerAuth } from "./store/slices/Thunks";
import { auth } from "./firebase/config";
import { logout, register } from "./store/slices/AuthSlice";

const Registro = () => {
  const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm({
    email: "nuevo_usuario@gmail.com",
    password: "contrasena_nueva"
  });

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return dispatch(logout());

      dispatch(register({ email: user.email }));
    });
  }, [dispatch]);

  const submitCB = (e) => {
    e.preventDefault();
    console.log(formState);
    dispatch(registerAuth(email, password));
  };

  return (
    <>
      <h1>Registro</h1>
      <hr />
      <form onSubmit={submitCB}>
        <input
          type="email"
          name="email"
          onChange={onInputChange}
          value={email}
        />
        <input
          type="password"
          name="password"
          onChange={onInputChange}
          value={password}
        />

        <button type="submit">Registro</button>
      </form>
    </>
  );
};

export default Registro;

