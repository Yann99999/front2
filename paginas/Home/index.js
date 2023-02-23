import React, { useContext, useEffect, useState } from "react";
//import api from "../../services/api";
import Context from "../../context";

import Header from "../../componentes/Header";
import logo from '../../assets/logo.png'

export default function Home() {
  const [user, setUser] = useContext(Context);

  useEffect(() => {


    /*api
      .get("/users/Yann99999")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });*/
  }
  , []);

  return (
    <main>
      <Header/>
      <h1>{user}</h1>
    </main>
  );
}