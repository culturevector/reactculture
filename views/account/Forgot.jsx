import React, { Component } from 'react';
import DefaultLayout from '../layouts/default'

class Forgot extends Component {
    render() {
        return (
            < DefaultLayout >
                <div className="pb-2 mt-2 mb-4 border-bottom">
                    <h3>Forgot Password</h3>
                </div>
                <form method="POST"><input type="hidden" name="_csrf" />
                    <p className="pb-4">Enter your email address below and we will send you password reset instructions.</p>
                    <div className="form-group row"><label className="col-md-3 col-form-label font-weight-bold text-right" for="email">Email</label>
                        <div className="col-md-7"><input className="form-control" type="email" name="email" id="email" placeholder="Email" autofocus="autofocus" required="required" /></div>
                    </div>
                    <div className="form-group offset-sm-3 col-md-7 pl-2"><button className="btn btn-primary" type="submit"><i className="fas fa-key fa-sm"></i>Reset Password</button></div>
                </form>

            </ DefaultLayout>

        )
    }
}
export default Forgot;