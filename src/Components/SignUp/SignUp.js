import React, { Component } from "react";
import './SignUp.css';
class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }
    };
    handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }
    submituserRegistrationForm = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};

            fields["emailid"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });
            alert("Form submitted");
        }
    }
    validateForm = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "Please enter your email-ID.";
        }
        if (typeof fields["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "Please enter valid email-ID.";
            }
        }
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Please enter your password.";
        }
        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "Please enter strong password.";
            }
        }
        this.setState({ errors: errors });
        return formIsValid;
    }
    render() {
        return (
            <div className='signup-container'>
                <form method="post" onSubmit={this.submituserRegistrationForm} >
                    <div className='row'>
                        <div className='column'>
                            <div className='signup-left'>
                                <h1>Sample heading</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Laboreum distinctio incidunt quae voluptas tempore dolorem,
                                    autem officia libero soluta</p>
                            </div>
                        </div>
                        <div className='column'>
                            <div className='signup-right'>
                                <h2>Create an account</h2>
                                <h4>Enter your email</h4>
                                <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.emailid}</div>
                                <h4>Date of birth &nbsp;<small>(Optional)</small></h4>
                                <div className="date">
                                    <label>Date</label><label>Month</label>  <label>Year</label> <br />
                                    <input type="text" placeholder="03" />
                                    <select name="Month" id="Month">
                                        <option value="September">September</option>
                                        <option value="August">August</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                    </select>
                                    <select name="Year" id="Year">
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                    </select>
                                </div>
                                <h4>Choose a strong password</h4>
                                <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.password}</div>
                                <h4>Are you an agency or individual</h4>
                                <input type='radio' id="radio1" name="radio" />&nbsp;<sup for="radio1">Individual</sup> &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type='radio' id="radio2" name="radio" />&nbsp;<sup for="radio2">Agency</sup>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default SignUp;