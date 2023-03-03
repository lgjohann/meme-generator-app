import React from "react";
import Trollface from "../assets/troll-face.png";

export default function Header() {
	return (
		<header className="header">
			<div className="header--title">
				<img
					src={Trollface}
					className="trollface"
				/>
				<h2>Meme Generator</h2>
			</div>
			<p>React Course - Project 3</p>
		</header>
	);
}
