import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { User } from "../../../Global/RecoilState";
import ClipLoader from "react-spinners/ClipLoader";

const url: string = "https://school-code.onrender.com";

interface iTeacher {
	classes: string;
	name: string;
	email: string;
	image: string;
}

function Academics() {
	const user = useRecoilValue(User);
	const [teacher, setTeacher] = useState([] as iTeacher[]);
	const [load, setLoad] = useState(true);

	const getTeacher = async () => {
		const newURL = `${url}/api/school/${user._id}/teachers`;
		await axios.get(newURL).then((res) => {
			setTeacher(res.data.data.teachers);
			setLoad(false);
		});
	};

	console.log("this is user", user);

	useEffect(() => {
		getTeacher();
	}, []);
	return (
		<Container>
			<Holder>
				<Hols>
					<Hold>
						<h3>Teachers</h3>
						<Span>Dashboard / Teachers</Span>
					</Hold>
					<Input placeholder='Enter teacher name....' />
				</Hols>
				<br />

				{teacher?.length >= 1 ? (
					<BoxHold>
						{teacher?.map((props) => (
							<TeaqcherCard>
								<TeachHold>
									<TeacherImage src='/img/prof.png' />
									<Main>
										<Div>{props.name}</Div>
										<P>{props.email}</P>
										<div
											style={{
												fontSize: "10px",
												display: "flex",
												alignItems: "center",
											}}>
											<div>Position </div> : Teacher
										</div>

										<Cal>Class : {props.classes}</Cal>
									</Main>
								</TeachHold>
							</TeaqcherCard>
						))}
					</BoxHold>
				) : (
					<BoxHold1>
						{load ? (
							<div>
								<div>
									<ClipLoader color='#36d7b7' />
								</div>
								<div> Fetching data...</div>
							</div>
						) : (
							<>
								<BoxImag src='/img/emp.gif' />
								<h3>Add Teacher to your institute.</h3>
								<p>
									Your institute has no teacher yet. Added classrooms will
									appear here.
								</p>
							</>
						)}
					</BoxHold1>
				)}

				{/* <BoxHold>

					<BoxImag  />
				</BoxHold> */}
			</Holder>
		</Container>
	);
}

export default Academics;

const Input = styled.input`
	height: 40px;
	width: 200px;
	background-color: none;
	color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	padding-left: 10px;
	border: 1px solid #1da1f2;
	transition: all 350ms;
	outline: none;

	:hover {
		transform: scale(0.97);
	}
`;

const BoxHold1 = styled.div`
	min-height: 70vh;
	width: 100%;
	background-color: white;
	border-radius: 5px;
	display: flex;

	justify-content: center;
	max-height: 70vh;
	flex-direction: column;
	align-items: center;
	text-align: center;

	h3 {
		margin: 0;
	}

	/* align-items: center; */
`;

const BoxImag = styled.img`
	height: 200px;
`;

const Cal = styled.div``;
const P = styled.div`
	font-size: 10px;
`;
const TeaqcherCard = styled.div`
	height: 100px;
	width: 320px;
	background-color: #f4f4f4;
	border-radius: 5px;
	margin: 10px;
	box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;
const TeachHold = styled.div`
	display: flex;
	/* align-items: center; */
	padding: 10px;
`;
const TeacherImage = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: silver;
	margin-right: 10px;
`;
const Main = styled.div``;
const Div = styled.div`
	font-weight: bold;
`;

const BoxHold = styled.div`
	/* min-height: 90vh; */
	width: 100%;
	background-color: white;
	border-radius: 5px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-height: 70vh;
	overflow-y: scroll;
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
	background-color: #1da1f2;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	cursor: pointer;

	transition: all 350ms;

	:hover {
		transform: scale(0.97);
	}

	@media screen and (max-width: 760px) {
		width: 120px;
		font-size: 10px;
	}
`;

const Span = styled.div`
	font-size: 13px;
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
const Hold = styled.div`
	h3 {
		margin: 0;
	}
`;

const Container = styled.div`
	/* width: 100%; */
	width: calc(100vw - 230px);
	min-height: calc(100vh - 60px);
	display: flex;
	justify-content: center;
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

	/* background-color: #352b1e; */
`;
