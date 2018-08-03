import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm, Field} from "redux-form";
import * as uiAction from "../../actions/uiAction";
import FormFieldForLogin from "../common/formFiledForLogin";
import FormValidator from "../common/formValidator";


class LoginPage extends React.Component {

    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {


        let ReactDOM = require("react-dom");
        let that = this;
        window.addEventListener("keydown", function (e) {
            if (e.key == "Enter") {
                let event = new MouseEvent("click", {
                    "view": window,
                    "bubbles": true,
                    "cancelable": true
                });
                ReactDOM.findDOMNode(that.el).dispatchEvent(event);
                e.stopPropagation();
                e.preventDefault;
            }
        });

    }


    onLogin = (values) => {
        console.log("values", values)
        this.props.history.push('/WelcomePage')
    };

    render() {
        console.log("Login", this.props)
        const {submitting, handleSubmit} = this.props;
        const handleEnterKeyPress = (el) => {
            this.el = el;
        };

        return (


        <div className="container">
            <form >
                <div className="row backDivColor">
                    <h2 style={{textAlign:'center'}}>Login with Social Media or Manually Test XX</h2>
                    <div className="vl">
                        <span className="vl-innertext">or</span>
                    </div>

                    <div className="col">
                        <a href="#" className="fb btn">
                            <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                        </a>
                        <a href="#" className="twitter btn">
                            <i className="fa fa-twitter fa-fw"></i> Login with Twitter
                        </a>
                        <a href="#" className="google btn"><i className="fa fa-google fa-fw">
                        </i> Login with Google+
                        </a>
                    </div>

                    <div className="col">
                        <form onSubmit={handleSubmit(this.onLogin)}>
                            <Field name="email" placeholder="Username" className="loginBox" component={FormFieldForLogin} type="text"/>
                            <Field name="password" placeholder="Password" className="loginBox" component={FormFieldForLogin} type="password"/>
                            <button ref={handleEnterKeyPress} className="btn buttonBackground loginBox " type="submit"
                                    disabled={submitting}><span className="glyphicon glyphicon-log-in"></span>  Log In
                            </button>
                        </form>
                    </div>

                </div>
            </form>
        </div>

    );
    }
    }



    function mapStateToProps(state, ownProps) {
        return state.application;
    }

    function mapDispatchToProps(dispatch) {
        return {
        actionAdminLogin: bindActionCreators(uiAction, dispatch)

    };
    }

    let LoginPageRecharged = reduxForm({
        form: "LoginPage",
        validate: FormValidator({
        email: {presence: true},
        password: {presence: true}
    })

    })(LoginPage);


    LoginPageRecharged = connect(mapStateToProps, mapDispatchToProps)(LoginPageRecharged);

    export default LoginPageRecharged;
