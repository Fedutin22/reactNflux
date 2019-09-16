import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div className="jumbotron">
			<h1>ps admin</h1>
			<p> React flux </p>
			<Link to="about" className="btn btn-primary">
				link
			</Link>
		</div>
	);
}
export default HomePage;
