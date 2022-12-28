import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

function ClassRoomDetails() {
	const [show, setShow] = React.useState(false);

	const toggleShow = () => {
		setShow(!show);
	};
	return (
		<Container>
			<Content>
				<span>Basic 3B</span>
				<MainHold>
					<LoaderHold>
						<Holding>
							<span>Setup Completed</span>
							<Div>100%</Div>
						</Holding>
					</LoaderHold>
					<NextRec>
						<span>Next Recommended action:</span>
						<Ad>Add Teacher to Accountancy</Ad>
					</NextRec>
				</MainHold>
				<MainHold2>
					<Cont>
						<ButtonH>Pending</ButtonH>
						<Tog>
							<h5>Manage class teacher, attendance for 12 - B</h5>
							<span>
								Class teacher is responsible for day to day activities of the
								class
							</span>
						</Tog>
						<But onClick={toggleShow}>+ Assign Class Teacher</But>
						{show ? (
							<Conta>
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
									}}>
									<span>Select Teacher</span>
									<Cancel onClick={toggleShow}>
										<AiOutlineClose />
									</Cancel>
								</div>

								<AcBox>
									<Sec>Session</Sec>
								</AcBox>

								<ButHold>
									<Button>+ Add New</Button>
								</ButHold>
							</Conta>
						) : null}
					</Cont>
				</MainHold2>
			</Content>
		</Container>
	);
}

export default ClassRoomDetails;

const Cancel = styled.div`
	cursor: pointer;
	height: 25px;
	width: 25px;
	border-radius: 50%;

	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 350ms;

	:hover {
		background-color: #ebeaea;
	}
`;

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
	margin-top: 8px;
	border: 1px solid #f4f4f4;
	border-radius: 5px;
	min-height: 30px;
	display: flex;
	/* justify-content: center; */
	align-items: left;
	flex-direction: column;
`;
const Sec = styled.div`
	margin-left: 5px;
	font-weight: bold;
	margin-top: 3px;
`;

const Conta = styled.div`
	position: absolute;
	background-color: white;
	min-width: 200px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	display: flex;
	top: 130px;
	padding: 10px;
	border-radius: 5px;
	left: 20px;
	flex-direction: column;

	span {
		font-size: 11px;
		font-weight: 400;
	}

	@media screen and (max-width: 768px) {
		top: 150px;
	}
`;

const ButtonH = styled.div`
	height: 30px;
	width: 100px;
	border-radius: 5px;
	background-color: #fff2e9;
	color: #f6c06b;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
`;
const Tog = styled.div`
	margin-bottom: 10px;
`;
const But = styled.div`
	color: #1da1f2;
	font-weight: 500;
	cursor: pointer;
`;

const Cont = styled.div`
	margin-left: 10px;
`;

const Ad = styled.div`
	font-weight: bold;
`;

const Holding = styled.div`
	margin-left: 10px;
	/* align-items: center; */
	display: flex;
	flex-direction: column;
	text-align: left;
	justify-content: center;
	height: 100%;

	span {
		font-size: 12px;
		color: gray;
	}
`;
const Div = styled.div`
	font-weight: bold;
`;
const LoaderHold = styled.div`
	height: 100%;
	background-color: #8e6aff;
	width: 30%;
	border-radius: 10px;
`;
const NextRec = styled.div`
	margin-right: 10px;
`;

const MainHold2 = styled.div`
	display: flex;
	width: 100%;
	background-color: white;
	border-radius: 10px;
	justify-content: space-between;
	align-items: center;
	font-size: 15px;
	margin-top: 30px;
	padding-top: 10px;
	padding-bottom: 10px;
	position: relative;

	h5 {
		margin: 0;
	}
`;
const MainHold = styled.div`
	display: flex;
	width: 100%;
	height: 65px;
	background-color: white;
	border-radius: 10px;
	justify-content: space-between;
	align-items: center;
	font-size: 15px;

	@media screen and (max-width: 500px) {
		font-size: 12px;
	}
`;

const Content = styled.div`
	width: 100%;
	/* margin-left: 20px; */
	display: flex;
	margin-top: 30px;
	width: 90%;
	flex-direction: column;
	/* flex-wrap: wrap; */
`;

const Container = styled.div`
	width: calc(100vw - 230px);
	min-height: calc(100vh - 60px);
	display: flex;
	justify-content: center;

	background-color: #f7f9fc;

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
