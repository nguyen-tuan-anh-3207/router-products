import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            txtname : '',
            txtpassword:''
        }
    }
    onChange = (e)=>{
          var target = e.target;
          var name = target.name;
          var value = target.type==='checkbox'? target.checked:target.value;
          this.setState({
              [name]: value
          })
    }
    onLogin =(e)=>{
        e.preventDefault();
        var {txtname, txtpassword} = this.state;
        if(txtname === 'admin' && txtpassword ==='admin'){
            localStorage.setItem('user', JSON.stringify({
                username: txtname,
                userpassword: txtpassword
            }))
        }

    }
  render() {
      var {txtxname, txtpassword} = this.state;
    var user = localStorage.getItem('user');
    var {location} =this.props;
    if(user !==null){
        return <Redirect to={{
            pathname :'/products',
            state:{
                from:location
            }
        }}/>
    }
    console.log(location);
    return (
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit = {this.onLogin}>
            <legend>Đăng nhập</legend>

            <div class="form-group">
              <label for="">Username</label>
              <input
                type="text"
                className="form-control"
                name = 'txtname'
                value = {txtxname}
                onChange= {this.onChange}
              />
            </div>
            <div className="form-group">
              <label for="">Password</label>
              <input
                type="password"
                className="form-control"
                name = 'txtpassword'
                value = {txtpassword}
                onChange= {this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
