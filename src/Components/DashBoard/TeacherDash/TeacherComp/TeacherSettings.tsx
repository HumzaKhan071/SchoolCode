import React, { useEffect, useState } from "react";
import styled from "styled-components";
import pic2 from "../../../Img/prof.png";
import { BiPencil } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";

const TeacherSettings: React.FC = () => {
	return (
		<>
			<Container>
				<Holder>
					<Hols>
						<Hold>
							<h3>Settings</h3>
							<Span>Dashboard / Settings</Span>
						</Hold>
					</Hols>
					<BoxHold>
						<MyHead>PERSONAL DATA</MyHead>
						<First>
							<Title>User Avatar</Title>
							<AvatarHold>
								<UserAvatar src={pic2} />
								<MyInput id='pix' type='file' />
								<But htmlFor='pix'>
									<BiPencil />
								</But>
							</AvatarHold>
						</First>
						<First>
							<Title>User Avatar</Title>
							<MainInp placeholder='Grace land colledge' type='text' />
						</First>
						<First>
							<Title>User Avatar</Title>
							<MainInp placeholder='Grace land colledge' type='text' />
						</First>
						<First>
							<Title>User Avatar</Title>
							<MainInp placeholder='Grace land colledge' type='text' />
						</First>
						<First>
							<Title>User Avatar</Title>
							<MainInp placeholder='Grace land colledge' type='text' />
						</First>
					</BoxHold>
					<BoxHold>
						<MyHead>
							CHANGE YOUR PASSWORD{" "}
							<BsFillInfoCircleFill
								style={{
									marginLeft: "10px",
								}}
							/>
						</MyHead>

						<First>
							<Title>CurrentPassword</Title>
							<MainInp placeholder='Grace land colledge' type='text' />
						</First>
						<First>
							<Title>New Password</Title>
							<MainInp placeholder='Grace land colledge' type='text' />
						</First>
						<First>
							<Title>Confirm Password</Title>
							<MainInp placeholder='Grace land colledge' type='text' />
						</First>
					</BoxHold>

					<DivHold>
						<ButHold>
							<Button>Log Out</Button>
							<Button
								style={{
									backgroundColor: "#1DA1F2",
								}}>
								Save Changes
							</Button>
							{/* <div>sdfhj</div> */}
						</ButHold>
					</DivHold>
				</Holder>
			</Container>
		</>
	);
};

export default TeacherSettings;

const ButHold = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 98%;
	padding-left: 10px;
`;

const MyHead = styled.div`
	height: 40px;
	width: 98%;
	background-color: #f8f8fa;
	color: black;
	padding-left: 20px;
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	font-weight: 500;
`;

const MainInp = styled.input`
	width: 98%;
	border: none;
	outline: none;
	height: 25px;
	border-bottom: 1px solid #f1f1f1;
`;

const MyInput = styled.input`
	display: none;
`;
const First = styled.div`
	padding-bottom: 20px;
`;
const Title = styled.div`
	padding-bottom: 5px;
	font-weight: 400;
`;
const AvatarHold = styled.div`
	position: relative;
	/* display: flex;
	width: 10%; */
`;
const But = styled.label`
	position: absolute;
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background-color: #4e4e4e;
	display: flex;
	justify-content: center;
	align-items: center;
	/* top: 50px;
	right: -10px; */
	top: 50px;
	left: 75px;
	color: white;
	cursor: pointer;
`;
const UserAvatar = styled.img`
	height: 100px;
	width: 100px;
	border-radius: 50%;
	object-fit: cover;
`;

const DivHold = styled.div`
	/* position: absolute; */
	box-shadow: rgba(90, 90, 90, 0.1) 0px 4px 10px;
	width: 100%;
	background-color: white;
	/* top: 0; */
	/* bottom: 0; */
	display: flex;
	justify-content: flex-start;
	/* position: fixed; */
	/* padding-left: 20px; */
	/* padding-top: 20px; */
	height: 70px;
`;

const Main = styled.div`
	position: fixed;
`;

const Span = styled.div`
	font-size: 13px;
`;

const BoxHold = styled.div`
	/* min-height: 90vh; */
	width: 98%;
	background-color: white;
	border-radius: 5px;
	display: flex;
	flex-wrap: wrap;
	box-shadow: rgba(90, 90, 90, 0.1) 0px 4px 10px;
	/* justify-content: center; */
	padding: 10px;
	flex-direction: column;
	padding-left: 20px;
	margin-bottom: 20px;

	/* align-items: center; */
`;

const Hols = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
const Button = styled.div`
	height: 40px;
	width: 150px;
	background-color: #4a148c;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	cursor: pointer;
	padding: 0 10px;
	transition: all 350ms;

	:hover {
		transform: scale(0.97);
	}

	@media screen and (max-width: 760px) {
		width: 100px;
		font-size: 13px;
	}
`;

const Hold = styled.div`
	margin: 10px 0px;
`;
const Header = styled.div`
	width: 90%;
	max-width: 1500px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-left: 10px;
`;

const Holder = styled.div`
	width: 95%;
	height: 100%;
	display: flex;
	margin-top: 20px;
	flex-direction: column;
	/* align-items: center; */
	/* justify-content: space-between; */

	/* background-color: red; */
`;

const Container = styled.div`
	/* width: 100%; */
	width: calc(100vw - 230px);
	min-height: calc(100vh - 60px);
	display: flex;
	justify-content: center;
	margin-top: 80px;
	position: relative;
	/* flex-direction: column; */

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

	@media screen and (max-width: 960px) {
		margin-top: 0;
	}
`;
