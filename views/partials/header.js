import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (

            <div className="navbar navbar-light fixed-top navbar-expand-md">
                <div className="container"><a className="navbar-brand" href="/"><i className="fas fa-cube"></i>Project name</a><button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div
                        className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/api">API Examples</a></li>
                            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                            <li className="nav-item"><a className="nav-link" href="/status">Status</a></li>
                        </ul>
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
                            <li className="nav-item"><a className="nav-link" href="/signup">Create Account</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )

    }
}

export default Header;