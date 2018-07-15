
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="container text-center">
                <p className="float-left">© 2018 Company, Inc. All Rights Reserved</p>
                <ul className="float-right list-inline">
                    <li className="list-inline-item"><a href="https://github.com/sahat/hackathon-starter">GitHub Project</a></li>
                    <li className="list-inline-item"><a href="https://github.com/sahat/hackathon-starter/issues">Issues</a></li>
                </ul>
            </div>
        )

    }

}

export default Footer;