import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import ReactDOM from "react-dom/client";
import Logo from "./Logo/Logo";
import './index.css'

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
    <React.StrictMode>
        <Logo />
        <SearchBar />
    </React.StrictMode>
);
