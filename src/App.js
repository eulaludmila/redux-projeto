import React from 'react';
import './App.css';
import Routes from './routes';
import { Router } from 'react-router-dom';
import Header from './components/Header';
import {Provider} from 'react-redux';
import store from './store'
import history from './services/history';

function App() {
  return (
    //Provider - é necessário para que todos os componentes consiga acessar o redux
    <Provider store={store}>
       <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
