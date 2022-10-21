import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
const myName = 'Ilya';

ReactDOM.render(
    <React.StrictMode>
        <App name={myName}/>
    </React.StrictMode>,
    document.getElementById('root')
);