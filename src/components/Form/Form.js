import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class Form extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        formErrors: { email: '', name: '' },
        emailValid: false,
        nameValid: false,
        formValid: false,
        buttonText: 'Send Message'
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.setState({
            buttonText: 'sending'
        })


        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('http://34.240.72.75:9000/api/form', data)
            .then(res => {
                this.setState({ sent: true }, this.resetForm())
            })
            .catch(() => {
                console.log('Message not sent')
            })
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            message: '',
            buttonText: 'Message Sent'
        })
    }

    inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'name':
                nameValid = value.length >= 2;
                fieldValidationErrors.name = nameValid ? '' : ' name is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            nameValid: nameValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.nameValid });
        this.setState({ formValid: this.state.emailValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    render() {
        return (
            <section className="form">
                <div className="container">
                    <div className="headerWrapper">
                        <h3 className="text-center">Get in Touch<sup>5</sup></h3>
                    </div>
                    <div className="row">
                        {/* <div className="col-12 col-md-4">
                            <div className="contactBlock">
                                <p><span>Phone: </span> 085 7402604</p>
                                <p><span>Email: </span> info@davidgkennedy.com</p>
                            </div>
                        </div> */}
                        <div className="col-12">
                            <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>

                                <div className="form-group">
                                    <input className={`form-control ${this.errorClass(this.state.formErrors.name)}`} onChange={(e) => { this.inputHandler(e) }} name="name" type="text" placeholder="Your Name" value={this.state.name} />
                                    {this.state.formErrors.name ? <p className="warningMessage">Please enter a name with at least two characters in length</p> : null}
                                </div>
                                <div className="form-group" >
                                    <input onChange={(e) => { this.inputHandler(e) }} name="email" className={`form-control ${this.errorClass(this.state.formErrors.email)}`} type="email" placeholder="your@email.com" required value={this.state.email} />
                                    {this.state.formErrors.email ? <p className="warningMessage">Please enter a valid email</p> : null}
                                </div>

                                <div className="form-group">
                                    <textarea className="form-control" onChange={(e) => this.setState({ message: e.target.value })} name="message" type="text" placeholder="Please write your message here" value={this.state.message} required />
                                </div>
                                <div className="button--container">
                                    <button type="submit" className="button button-primary" disabled={!this.state.formValid}>{this.state.buttonText}<FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Form;