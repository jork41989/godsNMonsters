import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
   let store;

   store = configureStore({});


   const root = document.getElementById('root');
   //test
   window.axios = axios
   //test
   ReactDOM.render( < Root store = { store } />, root);

});