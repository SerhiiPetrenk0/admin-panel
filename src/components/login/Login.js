import React, { Component } from "react";
import './Login.css'
import { Link } from "react-router-dom";
import {ReactComponent as EyeOff} from '../../icon/eye_off.svg'
import {ReactComponent as EyeOn} from '../../icon/eye_on.svg'
import logo from '../../img/logo.png'
class Login extends Component {

        state = { 
            PassShow : true,
            PassValue: '',
            LoginValue: '',
            BtnActive: false,
         };

            componentDidMount = () => {
                this.onBtnActive()
            }


         onChangeEye = () => {
             const { PassShow } = this.state
             this.setState({
                 PassShow : !PassShow
             })
         }
         onChangePass = (event) => {
             this.setState({
                PassValue : event.target.value
             })
             this.onBtnActive()
         }
         onChangeLogin = (event) => {
            this.setState({
                LoginValue : event.target.value
            })
            this.onBtnActive()
        }

         onBtnActive = () => {
             const { PassValue, LoginValue } = this.state
             if (PassValue !== '' && LoginValue !== ''){
                this.setState({
                    BtnActive: false
                })
             }else{
                this.setState({
                    BtnActive: true
                })
             }
         }

    render() {
        const { PassShow, PassValue, BtnActive } = this.state
        return (<div className="login-container">
                    <div className="logo-container">
                        <img src={logo} alt="logo" />
                        <h1>Login to your account</h1>
                        <div className="input-container">
                            <label htmlFor='login'>login</label>
                            <input type='email' id='login'  onChange={this.onChangeLogin} placeholder="Example@gmail.com" minlength="4" maxlength="30"/>
                        </div>
                        <div className="input-container">
                            <label htmlFor='Password'>Password</label>
                            <div className="input-pass">
                                <input type={PassShow ? 'password' : 'text'} onChange={this.onChangePass} value={PassValue} id='Password' placeholder=" * * * * * * * "/>
                                {PassShow ? <EyeOff className="eyeOff" onClick={this.onChangeEye} /> : <EyeOn className="eyeOff" onClick={this.onChangeEye} />}
                                
                            </div>

                        </div>
                        <Link to={BtnActive ? '' : '/Content/Create_a_post'} className={`btn ${BtnActive ? 'disabled' : ''}`} disabled={BtnActive}>login</Link>
                    </div>  
            </div>
        );
    }
}

export default Login;