import React, { Component } from 'react';
import DefaultLayout from '../layouts/default'

class Index extends Component {
    render() {
        return (
            < DefaultLayout >
                <div className="pb-2 mt-2 mb-4 border-bottom">
                    <h3>API Examples</h3>
                </div>
                <div className="row">
                   
                    <div className="col-md-4">
                        <a href="/api/facebook" >
                            <div className="card mb-3" >
                                <div className="card-body"><img src="https://i.imgur.com/jiztYCH.png" height="40" /> Facebook</div>
                            </div>
                        </a>
                    </div>
                    
                </div>


            </ DefaultLayout>

        )
    }
}
export default Index;