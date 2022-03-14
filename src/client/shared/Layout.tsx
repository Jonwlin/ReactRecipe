import Header from './Header'
import Footer from './Footer'
import React, {Component} from 'react'

export default class Layout extends Component {
    render(): React.ReactNode {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}