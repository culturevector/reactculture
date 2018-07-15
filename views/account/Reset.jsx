import React, { Component } from 'react';
import DefaultLayout from '../layouts/default'

class Reset extends Component {
    render() {
        return (

            < DefaultLayout >
                <div className="pb-2 mt-2 mb-4 border-bottom">
                    <h3>Reset Password</h3>
                </div>
                <form method="POST"><input type="hidden" name="_csrf" />
                    <div className="form-group row"><label className="col-md-3 col-form-label font-weight-bold text-right" for="password">New Password</label>
                        <div className="col-md-7"><input className="form-control" type="password" name="password" id="password" placeholder="New password" autofocus="autofocus" required="required" /></div>
                    </div>
                    <div className="form-group row"><label className="col-md-3 col-form-label font-weight-bold text-right" for="confirm">Confirm Password</label>
                        <div className="col-md-7"><input className="form-control" type="password" name="confirm" id="confirm" placeholder="Confirm password" required="required" /></div>
                    </div>
                    <div className="form-group offset-sm-3 col-md-7 pl-2"><button className="btn btn-primary btn-reset" type="submit"><i className="far fa-keyboard fa-sm"></i>Change Password</button></div>
                </form> </DefaultLayout >
        )

    }
}

export default Reset;