import React, { Component } from 'react';
import DefaultLayout from '../layouts/default'

class Login extends Component {
    render() {
        return (

            < DefaultLayout >
                <div className="pb-2 mt-2 mb-4 border-bottom">
                    <h3>Sign in</h3>
                </div>
                <form method="POST"><input type="hidden" name="_csrf" />
                    <div className="form-group row"><label className="col-md-3 col-form-label font-weight-bold text-right" for="email">Email</label>
                        <div className="col-md-7"><input className="form-control" type="email" name="email" id="email" placeholder="Email" autofocus="autofocus" required="required" /></div>
                    </div>
                    <div className="form-group row"><label className="col-md-3 col-form-label font-weight-bold text-right" for="password">Password</label>
                        <div className="col-md-7"><input className="form-control" type="password" name="password" id="password" placeholder="Password" required="required" /></div>
                    </div>
                    <div className="form-group">
                        <div className="offset-sm-3 col-md-7 pl-2"><button className="col-md-3 btn btn-primary" type="submit"><i className="far fa-user fa-sm"></i>Login</button><a className="btn btn-link" href="/forgot">Forgot your password?</a></div>
                    </div>
                    <div className="form-group">
                        <div className="offset-sm-3 col-md-7 pl-2">
                            <hr />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="offset-sm-3 col-md-7 pl-2">
                            <a className="btn btn-block btn-facebook btn-social" href="/auth/facebook"><i className="fab fa-facebook-f fa-sm"></i>Sign in with Facebook</a>
                            <a className="btn btn-block btn-twitter btn-social" href="/auth/twitter"><i className="fab fa-twitter fa-sm"></i>Sign in with Twitter</a>
                            <a className="btn btn-block btn-google btn-social" href="/auth/google"><i className="fab fa-google-plus-g fa-xs"></i>Sign in with Google</a>
                            <a className="btn btn-block btn-github btn-social" href="/auth/github"><i className="fab fa-github fa-sm"></i>Sign in with GitHub</a>
                            <a className="btn btn-block btn-linkedin btn-social" href="/auth/linkedin"><i className="fab fa-linkedin-in fa-sm"></i>Sign in with LinkedIn</a>
                            <a className="btn btn-block btn-instagram btn-social" href="/auth/instagram"><i className="fab fa-instagram fa-sm"></i>Sign in with Instagram</a>
                        </div>
                    </div>
                </form>

            </ DefaultLayout>



        )
    }
}
export default Login;