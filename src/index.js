import React from 'react';  
import ReactDOM from 'react-dom/client';  
import './Gomoku.css';  
import Game from './Gomoku.js'; // 导入 Game 组件  

const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(  
  <React.StrictMode> Gomoku 
    <Game />  
  </React.StrictMode>  
);