import React from "react";
import Header from './Header';
import Footer from './Footer';
import './BasePage.css';

export default class BasePage extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="BasePage">
                <Header />
                    {this.props.children}
                <Footer />
            </ div>
        ); 
    }
}