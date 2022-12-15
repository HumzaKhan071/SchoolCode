import React from "react";
import styled from "styled-components";
import SimplifyProps from "./SimplifyProps";
import SimplifySeconProps from "./SimplifySeconProps";

const SimplifyComp = () => {
	return (
		<Container>
			<Wrapper>
				<h1>
					Simplify processes <br /> and intelligently manage your institute
				</h1>

				<SimplifyProps />
				<br />
				<SimplifySeconProps />
			</Wrapper>
		</Container>
	);
};

export default SimplifyComp;

const Wrapper = styled.div`
	width: 80%;
	/* background-color: red; */

	margin-top: 30px;

	h1 {
		font-size: 35px;

		@media screen and (max-width: 500px) {
			font-size: x-large;
		}
	}

	@media screen and (max-width: 500px) {
		width: 85%;
	}
`;

const Container = styled.div`
	width: 100%;
	background-color: #f9fafb;
	background-image: url("https://www.teachmint.com/static2/images/new-landing/circle-1.svg");
	background-repeat: no-repeat;
	background-size: 380px 380px;
	background-position: 800px -100px;
	display: flex;
	justify-content: center;
	padding-bottom: 40px;
	/* align-items: center; */
`;
