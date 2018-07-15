import React, { Component } from 'react';
import DefaultLayout from './layouts/default'

class Contact extends Component {
    render() {
        return (

            < DefaultLayout >
                <div className="pb-2 mt-2 mb-4 border-bottom">
                    <h3>Contact Form</h3>
                </div>
                <form method="POST"><input type="hidden" name="_csrf" />
                    <div className="form-group row"><label className="col-md-2 col-form-label font-weight-bold" for="message">Please describe the issue or your suggestion</label>
                        <div className="col-md-8"><textarea className="form-control" name="message" id="message" rows="7" autofocus="true"></textarea></div>
                    </div>
                    <div className="form-group">
                        <div className="offset-md-2 col-md-8 p-1"><button className="btn btn-primary" type="submit"><i className="far fa-envelope fa-sm"></i>Send</button></div>
                    </div>
                </form> 
                </ DefaultLayout>



        )
    }
}
export default Contact;