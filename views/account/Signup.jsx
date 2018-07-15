
import React, { Component } from 'react';
import DefaultLayout from '../layouts/default'

class Signup extends Component {
    render() {
        return (

            < DefaultLayout >
                <div className="pb-2 mt-2 mb-4 border-bottom">
                    <h3>Sign up</h3>
                </div>
                <form id="signup-form" method="POST"><input type="hidden" name="_csrf" />
                    <div className="form-group row"><label className="col-md-3 col-form-label font-weight-bold text-right" for="email">Email</label>
                        <div className="col-md-7"><input className="form-control" type="email" name="email" id="email" placeholder="Email" autofocus="autofocus" required="required" /></div>
                    </div>
                    <div className="form-group row"><label className="col-md-3 col-form-label font-weight-bold text-right" for="password">Password</label>
                        <div className="col-md-7"><input className="form-control" type="password" name="password" id="password" placeholder="Password" required="required" /></div>
                    </div>
                    <div className="form-group row"><label className="col-md-3 col-form-label font-weight-bold text-right" for="confirmPassword">Confirm Password</label>
                        <div className="col-md-7"><input className="form-control" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" required="required" /></div>
                    </div>
                    <div className="form-group offset-sm-3 col-md-7 pl-2"><button className="btn btn-success" type="submit"><i className="fas fa-user-plus fa-sm"></i>Signup</button></div>
                </form>
            </DefaultLayout >
        )

    }
}

export default Signup;