import React, { useState } from "react";
import "../../styles/home.css"

//create your first component
const Home = () => {
	const [colors, setColors] = useState("")

	const elementClick = (e) => {
		const clicked = e.target.id
		setColors(clicked)
	}
	return (
		<div className="d-block">
			<div className="semaforo">
				<div className="container d-flex flex-column" style={{ backgroundColor: "black", width: "300px", height: "750px" }}>
					<div className={"red " + (colors === "red" ? "lightOn" : "")} id="red" onClick={elementClick}></div>
					<div className={"yellow " + (colors === "yellow" ? "lightOn" : "")} id="yellow" onClick={elementClick}></div>
					<div className={"green " + (colors === "green" ? "lightOn" : "")} id="green" onClick={elementClick}></div>
				</div>
			</div>
		</div>
			);
};

export default Home;
