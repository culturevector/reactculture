import React, { Component } from 'react';

import Head from '../head';
import Header from '../partials/header';
import Footer from '../partials/footer';
import Scripts from '../scripts';

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <Head/>
                <body>
                    <Header></Header>
                    {this.props.children}
                    <Footer />
                    <Scripts />
                </body>
            </html>
        );
    }
}

export default DefaultLayout;