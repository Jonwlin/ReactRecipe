import React from "react";
import logo from './logo.svg';
import './App.css';
import BasePage from './shared/BasePage'

export default class Profile extends React.Component {
    render(): React.ReactNode {
        return (
            <BasePage>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </BasePage>
            
        );
    }
}

