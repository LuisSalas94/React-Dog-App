import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "./components/Card";
import Select from "./components/Select";
import initialDog from "./components/initialdog";
import Message from "./components/Message";

function App() {
	const [dog, setDog] = useState(initialDog);
	const [loading, setLoading] = useState(false);

	const getDog = async (breedId) => {
		setLoading(true);
		let url;
		if (!breedId || breedId === 0) {
			url = "https://api.thedogapi.com/v1/images/search";
		} else {
			url = "https://api.TheDogAPI.com/v1/images/search?breed_ids=" + breedId;
		}

		const resp = await fetch(url);
		const data = await resp.json();
		let [breeds] = data;

		let newDog = {
			img: breeds.url,
			breed: {
				id: breeds.breeds[0].id,
				name: breeds.breeds[0].name,
				temperament: breeds.breeds[0].temperament,
			},
		};

		setLoading(false);
		setDog(newDog);
	};

	useEffect(() => {
		getDog(0);
	}, []);

	return (
		<div className=" container d-flex flex-column align-items-center">
			<Message message="#100daysOfCode" />
			<Select getDog={getDog} />
			<Card dog={dog} loading={loading} getDog={getDog} />
		</div>
	);
}

export default App;
