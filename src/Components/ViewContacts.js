import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header, Icon, Button, Table } from "semantic-ui-react";
// import data from "./Contact";

function ViewContacts() {
	const navigate = useNavigate();
	const location = useLocation();
	// console.log(location.state);

	const data = JSON.parse(localStorage.getItem("contacts"));
	console.log(data);

	const handleSubmit = (e) => {
    // navigate("/demo");
    navigate("/demo", { ...data });

	};
	return (
		<>
			<div>
				<Header size="large">Contact List</Header>
				<Table style={{position: "relative", left: "50px"}} basic="very" striped textAlign="center">
					<Table.Header>
						<Table.Row>
							{/* <Table.HeaderCell>ID</Table.HeaderCell> */}
							<Table.HeaderCell>Name</Table.HeaderCell>
							<Table.HeaderCell>Phone No</Table.HeaderCell>
							<Table.HeaderCell>Email</Table.HeaderCell>
							<Table.HeaderCell>Actions</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{data.map((contact) => (
							<Table.Row>
								{/* <Table.Cell>{contact.id}</Table.Cell> */}
								<Table.Cell>{contact.name}</Table.Cell>
								<Table.Cell>{contact.phone}</Table.Cell>
								<Table.Cell>{contact.email}</Table.Cell>
								{/* <
						<Table.Row>> */}
								{/* <Table.Cell>
                <Header>
                  <Header.Content>{location.state.name}</Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{location.state.phone}</Table.Cell>
              <Table.Cell>{location.state.email}</Table.Cell> */}
								<Table.Cell>
									<Button
										icon="edit outline"
										color="blue"
										onClick={() => {
											navigate("/edit");
										}}
									/>
									<Button icon="delete" color="red" />
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
					<Table.Footer fullWidth>
						<Table.Row>
							<Table.HeaderCell />
							<Table.HeaderCell colSpan="4">
								<Button
									// floated="right"
									icon
									labelPosition="left"
									primary
									size="small"
									onClick={handleSubmit}
								>
									<Icon name="user" /> Add User
								</Button>
							</Table.HeaderCell>
						</Table.Row>
					</Table.Footer>
				</Table>
			</div>
		</>
	);
}

export default ViewContacts;
