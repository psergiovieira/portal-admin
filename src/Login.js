import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'
import App from './App';
import ReactDOM from 'react-dom';


class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }
        this.updateUsername = this.updateUsername.bind(this);	
        this.logon = this.logon.bind(this);
    }
    updateUsername(event) {
        this.setState({
            username: event.target.value,
            password: this.state.password
        })
    }

    updatePassword(event) {
        this.setState({
            username: this.state.username,
            password: event.target.value
        })
    }

    logon(username, password) {
        console.log('Your input value is: ' + this.state.username)
        console.log('Your input value is: ' + this.state.password)
        ReactDOM.render(<App value={this.state.username} />, document.getElementById('root'));
    }

    render() {
        return (<div className="App">
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <img src="data:image/png;base64,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"
                            id="icon" alt="User Icon" />
                    </div>
                    <input type="text"
                        id="login"
                        className="fadeIn second"
                        name="login"
                        placeholder="login"
                        onChange={this.updateUsername} />
                    <input type="text"
                        id="password"
                        className="fadeIn third"
                        name="login"
                        placeholder="password"
                        onChange={this.updatePassword} />
                    <input type="button"
                        id="idButtonLogin"
                        className="fadeIn fourth"
                        value="Log In"
                        onClick={this.logon}
                    />
                </div>
            </div>
        </div>);
    }
}

export default Login;