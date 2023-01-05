import React from "react";
import styled from "styled-components";

function Report() {
	return (
		<Container>
			<Cont>
				<CardHolder>
					<Div>Reports / Reports For the TERM</Div>
				</CardHolder>
			</Cont>
		</Container>
	);
}

export default Report;
const Cont = styled.div`
	display: flex;
	width: 100%;
	margin-top: 50px;
	flex-direction: column;
	align-items: center;
`;
const Div = styled.div`
	margin-bottom: 30px;
	font-weight: 700;
	text-transform: uppercase;
	padding: 10px 40px;
	color: white;
	background: #ff8c00;
	border-radius: 20px;
	text-align: center;
	line-height: 1.2;
`;
const CardHolder = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Container = styled.div`
	margin-top: 80px;
	/* width: 100%; */
	width: calc(100vw - 230px);
	min-height: calc(100vh - 60px);
	display: flex;
	justify-content: center;

	background-color: #f7f9fc;
	/* background-color: gold; */
	overflow: hidden;
	position: absolute;
	right: 0px;
	// top: 50px;

	@media screen and (max-width: 1100px) {
		width: 95%;
	}
	@media screen and (max-width: 1005px) {
		width: 100%;
	}

	/* background-color: #352b1e; */
`;
