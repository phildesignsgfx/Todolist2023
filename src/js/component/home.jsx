import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<h1>My Todos</h1>

			<ul>
				<li>
					<input type="text"
				placeholder="What do you need to do?"
				></input> 
				</li>
			


			</ul>

			<div>23 tasks</div>
			




		</div>
	);
};

export default Home;
