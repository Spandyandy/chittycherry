import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './index.css';

class Example extends Component {
	render() {
		return (
			<div className="card maincard mx-auto">
				<Form className="card-body">
					<Form.Group controlId="formBasicEmail">
						<Form.Control type="invcode" placeholder="Invitation Code" />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Control type="name" placeholder="First Name" />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
					<Form.Control type="name" placeholder="Last Name" />
					</Form.Group>
					<Button className="container-fluid" variant="dark" href="/chat" /*type="submit"*/>Join</Button>
				</Form>
			</div>
		)
	}
}

export default (Example);