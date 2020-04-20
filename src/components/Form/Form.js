import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';

class Form extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

    formSubmit = (e) => {
        e.preventDefault()

        this.setState({
            buttonText: 'sending'
        })

        let data = {
            name: this.state.name,
            email: this.state.name,
            message: this.state.message
        }

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios.post('https://portfolio-api-git-master.davidke91.now.sh/api/v1', data, axiosConfig)
            .then(res => {
                console.log(res);
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
            buttonText: '',
            buttonText: 'Message Sent'
        })
    }

    render() {
        return (
            <section className="form">
                <div className="container">
                    <div className="headerWrapper">
                        <h3 className="text-center">Get in Touch<sup>5</sup></h3>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="contactBlock">
                                <p><span>Phone: </span> 085 7402604</p>
                                <p><span>Email: </span> info@davidgkennedy.com</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
                                <div className="form-group">
                                    <label className="message" htmlFor="message-input">Your Message</label>
                                    <textarea className="form-control" onChange={(e) => this.setState({ message: e.target.value })} name="message" className="form-control" type="text" placeholder="Please write your message here" value={this.state.message} required />
                                </div>

                                <div className="form-group">
                                    <label className="message-name" htmlFor="message-name">Your Name</label>
                                    <input className="form-control" onChange={(e) => this.setState({ name: e.target.value })} name="name" className="form-control" type="text" placeholder="Your Name" value={this.state.name} />
                                </div>

                                <label className="message-email" htmlFor="message-email">Your Email</label>
                                <input onChange={(e) => this.setState({ email: e.target.value })} name="email" className="form-control" type="email" placeholder="your@email.com" required value={this.state.email} />

                                <div className="button--container">
                                    <button type="submit" className="button button-primary">{this.state.buttonText}</button>
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