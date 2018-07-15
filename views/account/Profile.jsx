import React, { Component } from 'react';
import DefaultLayout from '../layouts/default'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { user: {} };

        console.log(this.state)
    }

    componentDidMount() {
        this.fetchDtata()
    }

    fetchDtata() {

        fetch('https://randomuser.me/api/?results=50&nat=in')
        .then(response => response.json())
        .then((parsedjson)=>{
            console.log(JSON.stringify(parsedjson))
            this.setState({parsedjson});

        })


    }

    render() {

      const user = this.state.user;
      console.log(user);
        return (

            < DefaultLayout >

                <div className="pb-2 mt-2 mb-4 border-bottom">
                    <h3>Profile Information</h3>
                </div>
                <form action="/account/profile" method="POST">
                    <input type="hidden" name=".csrf" />
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label font-weight-bold text-right" for="email">Email</label>
                        <div className="col-md-7">
                            <input className="form-control" type="email" name="email" id="email" value={user} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label font-weight-bold text-right" for="name">Name</label>
                        <div className="col-md-7">
                            <input className="form-control" type="text" name="name" id="name" value={user} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label font-weight-bold text-right">Gender</label>
                        <div className="col-sm-6">
                            <label className="radio col-sm-3">
                                <input type="radio" checked={user == 'male'} name="gender" value="male" data-toggle="radio" /><span>Male</span>
                            </label>
                            <label className="radio col-sm-3">
                                <input type="radio" checked={user == 'female'} name="gender" value="female" data-toggle="radio" /><span>Female</span>
                            </label>
                            <label className="radio col-sm-3">
                                <input type="radio" checked={user == 'other'} name="gender" value="other" data-toggle="radio" /><span>Other</span>
                            </label>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label font-weight-bold text-right" for="location">Location</label>
                        <div className="col-md-7">
                            <input className="form-control" type="text" name="location" id="location" value={user} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label font-weight-bold text-right" for="website">Website</label>
                        <div className="col-md-7">
                            <input className="form-control" type="text" name="website" id="website" value={user} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label font-weight-bold text-right">Gravatar</label>
                        <div className="col-sm-4"><img className="profile" src={user} width="100" height="100" /></div>
                    </div>
                    <div className="form-group">
                        <div className="offset-sm-3 col-md-7 pl-2">
                            <button className="btn btn btn-primary" type="submit"><i className="fas fa-pencil-alt fa-sm"></i>Update Profile</button>
                        </div>
                    </div>
                </form>

                <div className="pb-2 mt-2 mb-4 border-bottom">
                    <h3>Change Password</h3>
                </div>
                <form action="/account/password" method="POST">
                    <input type="hidden" name=".csrf" />
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label font-weight-bold text-right" for="password">New Password</label>
                        <div className="col-md-7">
                            <input className="form-control" type="password" name="password" id="password" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label font-weight-bold text-right" for="confirmPassword">Confirm Password</label>
                        <div className="col-md-7">
                            <input className="form-control" type="password" name="confirmPassword" id="confirmPassword" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="offset-sm-3 col-md-7 pl-2">
                            <button className="btn btn-primary" type="submit"><i className="fas fa-lock fa-sm"></i>Change Password</button>
                        </div>
                    </div>
                </form>



            </ DefaultLayout>



        )
    }
}
export default Profile;