import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './index.css';

class Example extends Component {
	constructor(...args) {
	    super(...args);
	    this.state = { validated: false };
	    this.routeChange = this.routeChange.bind(this);
	}

	routeChange() {
		let path = "/chat";
		window.open(path);
	}

	handleSubmit(event) {
	    const form = event.currentTarget;
	    if (form.checkValidity() === false) {
	      event.preventDefault();
	      event.stopPropagation();
	      this.setState({ validated: true });
	      return false;
	    }

	    this.routeChange();
  	}

	render() {
		const { validated } = this.state;

		return (
			<div className="card maincard mx-auto">
				<Form noValidate
        			  validated={validated}
        			  onSubmit={e => this.handleSubmit(e)} 
        			  className="card-body">
					<Form.Group controlId="formBasicEmail">
						<Form.Control required type="invcode" placeholder="Invitation Code" />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Control required type="name" placeholder="First Name" />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
					<Form.Control required type="name" placeholder="Last Name" />
					</Form.Group>
					<Button type="submit" className="container-fluid" variant="dark" >
						Join
					</Button>
				</Form>
			</div>
		)
	}
}

export default (Example);