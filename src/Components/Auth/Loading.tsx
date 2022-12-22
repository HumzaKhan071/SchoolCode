import React from "react";
import styled from "styled-components";

const Loading = () => {
	return (
		<Container>
			<LoadImage src='/img/load1.gif' />
		</Container>
	);
};

export default Loading;

const LoadImage = styled.img``;

const Container = styled.div`
	position: absolute;
	top: 0;
	/* background-color: rgba(0, 0, 0, 0.6); */
	background-color: rgba(30, 145, 243, 0.3);

	height: 100%;
	width: 100%;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(5px);
	z-index: 10;
`;
