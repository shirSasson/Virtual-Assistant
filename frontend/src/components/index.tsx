import React from 'react';
import ReactDOM from "react-dom/client";
import Logo from "./Logo/Logo";
import './index.css'
import Chat from './Chat/Chat';

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
    <React.StrictMode>
        <div className={'page-holder'}>
            <Logo />
            <Chat />
        </div>
    </React.StrictMode>
);