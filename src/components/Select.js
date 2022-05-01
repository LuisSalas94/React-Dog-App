import React, { useState, useEffect } from "react";

const initialStateBreeds = [
	{ id: 1, name: "dog1" },
	{ id: 2, name: "dog2" },
];

const Select = ({ getDog }) => {
	const [breeds, setBreeds] = useState([]);

	const callDogAPI = async () => {
		const url = "https://api.thedogapi.com/v1/breeds";
		const res = await fetch(url);
		const data = await res.json();
		setBreeds(data);
	};

	useEffect(() => {
		callDogAPI();
	}, []);

	return (
		<select
			className="form-select m-3"
			placeholder="Select your dog"
			onChange={(e) => getDog(e.target.value)}
		>
			{breeds.map((breed) => (
				<option value={breed.id}>{breed.name}</option>
			))}
		</select>
	);
};

export default Select;
