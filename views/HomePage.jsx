import React, { Component } from 'react';
import DefaultLayout from './layouts/default'

class HomePage extends Component {
    render() {
        return (

            < DefaultLayout >
                <div className="container">
                    <h1>Hackathon Starter</h1>
                    <p className="lead">A boilerplate for Node.js web applications.</p>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Heading</h2>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
                                nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed
            odio dui.</p>
                            <p>
                                <a className="btn btn-raised" href="#" role="button">View details »</a>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h2>Heading</h2>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
                                nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed
            odio dui.</p>
                            <p>
                                <a className="btn btn-raised" href="#" role="button">View details »</a>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h2>Heading</h2>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
                                nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed
            odio dui.</p>
                            <p>
                                <a className="btn btn-raised" href="#" role="button">View details »</a>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h2>Heading</h2>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
                                nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed
            odio dui.</p>
                            <p>
                                <a className="btn btn-raised" href="#" role="button">View details »</a>
                            </p>
                        </div>
                    </div>
                </div>
            </ DefaultLayout>



        )
    }
}
export default HomePage;