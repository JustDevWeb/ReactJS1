import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Message from  './hw1';


const myName = 'Mikhail';
const bodyName = 'main__wrap';
const somMessage = 'Look! It\'s moving. It\'s alive. It\'s alive... It\'s alive, it\'s moving, it\'s alive, it\'s alive, it\'s alive, it\'s alive, IT\'S ALIVE!';
const imgFrank = 'myapp/public/giphy-700.gif';

ReactDOM.render(
    <React.StrictMode>
        <App name = {myName} />
        {/*<Message name = {bodyName} text = {somMessage} image={imgFrank} />*/}
    </React.StrictMode>,
    document.getElementById('root')
);


