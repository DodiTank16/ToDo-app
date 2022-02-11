import React, {  useState } from "react";
// import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { Input, Header, Button } from "semantic-ui-react";

function AddContacts() {
	const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);
	const [state, setState] = useState({
		name: "",
		phone: "",
		email: "",
	});

	
	localStorage.setItem("contacts", JSON.stringify(contacts));

	const handleChange = (e) => {
		
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		

		if (state !== "") {
		
		setContacts([
			...contacts,
			{
			    id: contacts.length + 1,
				name: state.name,
				phone: state.phone,
				email: state.email,
			},
		]);
		}

	};

	const handleView = () => {
		navigate("/", { ...contacts });
	};
	return (
		<>
			<Header size="large">Add Contact</Header>
			<div className="input">
				<Input
					icon="users"
					iconPosition="left"
					type="text"
					placeholder="Name"
					name="name"
					color="black"
					value={state.name}
					onChange={handleChange}
				/>
			</div>
			<br />
			<div className="input">
				<Input
					icon="phone"
					iconPosition="left"
					type="tel"
					placeholder="Phone No"
					name="phone"
					color="black"
					value={state.phone}
					onChange={handleChange}
				/>
			</div>
			<br />
			<div className="input">
				<Input
					icon="mail"
					iconPosition="left"
					type="email"
					placeholder="Email"
					name="email"
					color="black"
					value={state.email}
					onChange={handleChange}
					required
				/>
			</div>
			<br />
			<Button primary onClick={handleSubmit}>
				Save
			</Button>
			<Button secondary onClick={handleView}>
				View
			</Button>
		</>
	);
}

export default AddContacts;
