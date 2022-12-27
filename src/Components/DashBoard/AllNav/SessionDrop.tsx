import React from "react";
import styled from "styled-components";
import CreatingSessionModal from "../AdminDash/Screen/CreatingSessionModal";

interface Iprops {
	toggleDrop: () => void;
	academic: any;
}

const SessionDrop: React.FC<Iprops> = ({ toggleDrop, academic }) => {
	return (
		<>
			<Container>
				<span>Academic Session</span>

				<AcBox>
					<Sec>Session {academic?.academicSession}</Sec>
				</AcBox>

				<ButHold onClick={toggleDrop}>
					<Button>+ Add New</Button>
				</ButHold>
			</Container>
		</>
	);
};

export default SessionDrop;

const ButHold = styled.div`
	margin-top: 50px;
`;
const Button = styled.div`
	height: 40px;
	width: 200px;
	background-color: none;
	color: #1da1f2;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;

	cursor: pointer;
	transition: all 350ms;

	:hover {
		transform: scale(0.97);
	}
`;
const AcBox = styled.div`
	margin-top: 5px;
	border: 1px solid #f4f4f4;
	border-radius: 5px;
	height: 30px;
	display: flex;
	/* justify-content: center; */
	align-items: center;
`;
const Sec = styled.div`
	margin-left: 5px;
	font-weight: bold;
`;

const Container = styled.div`
	position: absolute;
	background-color: white;
	min-width: 200px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	display: flex;
	top: 40px;
	padding: 10px;
	border-radius: 5px;
	left: 20px;
	flex-direction: column;

	span {
		font-size: 11px;
		font-weight: 400;
	}
`;
