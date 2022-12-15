import React from "react";
import FormComp from "./FormComp/FormComp";
import SimplifyComp from "./SimplifyComp/SimplifyComp";

const HomeScreen = () => {
	return (
		<div style={{ overflow: "hidden" }}>
			<SimplifyComp />
			<FormComp />
		</div>
	);
};

export default HomeScreen;
