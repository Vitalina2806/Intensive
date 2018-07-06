import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
 <div className="wrapper">
      <SayFullName name="Vita" surname="Sakhniuk" link="vk.com"/> 
      <SayFullName name="Illia" surname="Hryshchuk" link="facebook.com"/>
      <SayFullName name="Vanessa" surname="Sakhniuk" link="instagram.com"/>   
    </div>
    );
  }
}

function SayFullName(props)
{
  return(
    <div>
    <h1>Моё имя {props.name}, Фамилия - {props.surname}</h1>
    <a href={props.link}> Ссылка на мой профиль</a>
    </div>
    ) 
}
export default App;
