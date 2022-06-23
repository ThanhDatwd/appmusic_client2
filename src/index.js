import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import axios from 'axios';
axios.defaults.baseURL='http://localhost:3001/api/'
axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('accessToken')
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
  document.getElementById('root')
);
