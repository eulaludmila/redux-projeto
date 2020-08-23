import React from 'react';
import {useSelector} from 'react-redux'; //utilizado para pegar o state
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './style.css'

export default function Header() {
  // state.reserve - Dos estados do reducers, eu to pegando o state da funcion reserve
  const reserveSize = useSelector(state => state.reserve.length);

 return (
   <header className="container">

     <Link to="/">
      <img className="logo" src={logo} alt="Logo Projeto" />
     </Link>

     <Link  className="reserva" to="/reservas">
       <div>
         <strong>Minhas reservas</strong>
         <span>{reserveSize} reservas</span>
       </div>
     </Link>

   </header>
 );
}