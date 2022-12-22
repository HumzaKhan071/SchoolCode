import React from "react";
import styled from "styled-components";

const NotFound = () => {
	return (
		<Container>
			<h1>Page Not Found</h1>
			<p>no route match this page</p>
		</Container>
	);
};

export default NotFound;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
`;
