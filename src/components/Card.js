import React from "react";
import Loading from "./Loading";

const Card = ({ dog, loading, getDog }) => {
	if (loading) return <Loading />;
	return (
		<div className="card card-style mt-4" style={{ width: "18rem" }}>
			<img className="card-img-top img-fluid" src={dog.img} alt="" />
			<div className="card-body">
				<p className="card-title">Breed Name: {dog.breed.name}</p>
				<p className="card-text">Breed Temperament: {dog.breed.temperament}</p>
				<button onClick={() => getDog()} className="btn btn-warning">
					Get a random dog
				</button>
			</div>
		</div>
	);
};

export default Card;
