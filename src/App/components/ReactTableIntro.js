import React, { Component } from 'react';
import '../stylesheets/App.css';
import { Table, Well } from 'react-bootstrap';

class ReactTableIntro extends Component {
	render() {
		return (
			<div>
				<Well>React-Bootstrap is enabled!</Well>
				<Table striped bordered condensed hover>
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td>3</td>
							<td colSpan="2">Larry the Bird</td>
							<td>@twitter</td>
						</tr>
					</tbody>
				</Table>
			</div>
		);
	}
}

export default ReactTableIntro;
