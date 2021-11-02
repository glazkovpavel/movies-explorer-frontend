import React from 'react';
import './Main.css';
import {Promo} from "../Promo/Promo";
import {AboutProject} from "../AboutProject/AboutProject";
import {Techs} from "../Techs/Techs";
import {AboutMe} from "../AboutMe/AboutMe";
import {Portfolio} from "../Portfolio/Portfolio";
import {Footer} from "../Footer/Footer";
import {Header} from "../Header/Header";


export function Main(){

  const mainState = true
  const loggedIn = false


  return(
    <>
      <Header
      main={mainState}
      loggedIn={loggedIn}
      />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>

  )
}
