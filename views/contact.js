import React, { Component } from 'react';

class Contact extends Component {

    render() {

        <div className="container">
            <div className="pb-2 mt-2 mb-4 border-bottom">
                <h3>Contact Form</h3>
            </div>
            <form method="POST">
                <input type="hidden" name="_csrf" value="rlpp3FgEQuYwWSLMHjxhTnHigP9vzvsmywnAw=" />
                <div className="form-group row">
                    <label className="col-md-2 col-form-label font-weight-bold" for="name">Name</label>
                    <div className="col-md-8">
                        <input className="form-control" type="text" name="name" id="name" autofocus="" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-2 col-form-label font-weight-bold" for="email">Email</label>
                    <div className="col-md-8">
                        <input className="form-control" type="text" name="email" id="email" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-2 col-form-label font-weight-bold" for="message">Please describe the issue or your suggestion</label>
                    <div className="col-md-8">
                        <textarea className="form-control" name="message" id="message" rows="7" autofocus="false"></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="offset-md-2 col-md-8 p-1">
                        <button className="btn btn-primary" type="submit">
                            <i className="far fa-envelope fa-sm"></i>Send</button>
                    </div>
                </div>
            </form>
        </div>

    }
}


export default Contact;