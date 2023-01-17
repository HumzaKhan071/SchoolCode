import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Navigate, useNavigate } from "react-router";

// import ClipLoader from "react-spinners/BounceLoader";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Swal from "sweetalert2";
import { User } from "../../../Global/RecoilState";
import CreateStudent from "../CreateStudent";
import MyForm from "./Homeforms/MyForm";
import { ClipLoader } from "react-spinners";

const url: string = "https://school-code.onrender.com";

interface iTeacher {
	_id: string;
	className: string;
	name: string;
	email: string;
	image: string;
}

function Students() {
	const navigate = useNavigate();
	const user = useRecoilValue(User);
	const [student, setStudent] = useState([] as iTeacher[]);
	const [load, setLoad] = useState(true);

	const [classRoom, setClassRoom] = useState(false);
	const [subject, setSubject] = useState(false);
	const [show, setShow] = useState(false);

	const [name, setName] = useState("");
	const [name1, setName1] = useState("");
	const [name2, setName2] = useState("");

	const [name3, setName3] = useState("");
	const [name4, setName4] = useState("");
	const [name5, setName5] = useState("");

	const [hold, setHold] = useState("");

	const toggleClassRoom = () => {
		setClassRoom(!classRoom);
	};

	const toggleSubject = () => {
		setSubject(!subject);
	};
	const toggle = () => {
		setShow(!show);
	};

	const createClassRoom = async (id: string) => {
		const newURL = `${url}/api/class/${user._id}/${hold}/assign-student`;

		await axios
			.post(newURL, { classToken: name })
			.then(() => {
				setLoad(false);
				navigate("/");
			})
			.catch((res) => {
				setLoad(false);
				Swal.fire({
					icon: "error",
					title: "An error occured",
					text: "Class can't be found",
				});
			});
	};

	const getTeacher = async () => {
		const newURL = `${url}/api/school/${user._id}/students`;
		await axios.get(newURL).then((res) => {
			setStudent(res.data.data.students);
			setLoad(false);

			console.log("this is for studebt data", res);
		});
	};

	const toggleShow = () => {
		setShow(!show);
	};

	useEffect(() => {
		getTeacher();
	}, []);

	React.useEffect(() => {
		if (show) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [show]);
	return (
		<>
			{show ? <CreateStudent toggleShow={toggleShow} /> : null}

			{classRoom ? (
				<MyForm
					hold={hold}
					id={hold}
					check={false}
					title1='Enter the class token to help us find the class faster'
					title2='class school Fee'
					holder='Enter the Class token: eb 445t'
					holder1='Enter class School Fee'
					toggle={toggleClassRoom}
					title='Reassign to another Class'
					subTitle='By filling this form, you will automatically reassign teacher to the new choice class.'
					mainActionAdmin={() => {
						createClassRoom(hold);
					}}
					show={show}
					setShow={setShow}
					toggleShow={toggle}
					setName={setName}
					setName1={setName1}
					setName2={setName2}
					setName3={setName3}
					setName4={setName4}
					setName5={setName5}
					one={false}
					two={false}
					three={false}
					four={false}
					five={false}
					name={name}
					name1={name1}
					name2={name2}
					name3={name3}
					name4={name4}
					name5={name5}
					buttonCall="Change student's class"
				/>
			) : null}

			<Container>
				<Holder>
					<Hols>
						<Hold>
							<h3>Students</h3>
							<Span>Dashboard / Students</Span>
						</Hold>
						<Button onClick={toggleShow}>Register a Student</Button>
					</Hols>
					<br />

					{student?.length >= 1 ? (
						<BoxHold>
							{student?.map((props) => (
								<ReMakeCard key={props._id}>
									<TeacherImage src='/img/prof.png' />
									<Div>{props.name}</Div>
									<P>{props.email}</P>
									<RemButHold>
										<RemBut
											onClick={() => {
												toggleClassRoom();
												setHold(props._id);
											}}
											bg='#4A148C'>
											Change Class
										</RemBut>

										<Link
											style={{ textDecoration: "none", color: "white" }}
											to={`/admin-dashboard/createstudent/view-student-detail/${props._id}`}>
											{" "}
											<RemBut bg='#1DA1F2'>View Details</RemBut>
										</Link>
										<br />
									</RemButHold>
									<Down>
										<Down1>
											<DownHo style={{ color: "#1DA1F2" }}>
												Class Assigned
											</DownHo>
											<Sub>{props.className}</Sub>
										</Down1>

										<Down1>
											<DownHo style={{ color: "#FAB84E" }}>Status</DownHo>
											<Sub>Student</Sub>
										</Down1>
									</Down>
								</ReMakeCard>
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
									{" "}
									<BoxImag src='/img/emp.gif' />
									<h3>Add Student to your institute.</h3>
									<p>
										Your institute has no Students yet. Added classrooms will
										appear here.
									</p>
									<Button2 onClick={toggleShow}>Create Student</Button2>
								</>
							)}
						</BoxHold1>
					)}

					{/* <BoxHold>


					<BoxImag  />
				</BoxHold> */}
				</Holder>
			</Container>
		</>
	);
}

export default Students;

const Down = styled.div`
	display: flex;
	font-size: 10px;
	justify-content: space-between;
	width: 80%;
	margin-top: 5px;
	/* text-align: center; */
`;
const Down1 = styled.div``;
const DownHo = styled.div`
	margin-right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
`;
const Sub = styled.div`
	font-weight: bold;
`;

const RemButHold = styled.div`
	display: flex;
`;
const RemBut = styled.div<{ bg: string }>`
	height: 25px;
	width: 110px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	background-color: ${({ bg }) => bg};
	display: flex;
	font-size: 12px;
	color: white;
	margin: 5px;
	cursor: pointer;
`;

const ReMakeCard = styled.div`
	/* height: 170px; */
	width: 300px;
	border: 1px solid #f4f3f3;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
	transition: all 350ms;

	:hover {
		border: 1px solid #fab84e;
	}
`;

const ButtonB = styled.div<{ bg: string }>`
	height: 40px;
	width: 110px;
	margin-right: 10px;
	//   padding: 0 5px;
	background-color: ${({ bg }) => bg};
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	cursor: pointer;
	text-transform: uppercase;
	font-size: 12px;
	transition: all 350ms;
	margin-top: 10px;
	text-align: center;
	font-weight: 500;

	:hover {
		transform: scale(0.97);
	}

	@media screen and (max-width: 760px) {
		width: 120px;
		font-size: 10px;
	}
`;

const Button2 = styled.div`
	height: 40px;
	width: 200px;
	background-color: none;
	color: #1da1f2;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	border: 1px solid #1da1f2;
	cursor: pointer;
	transition: all 350ms;

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
	min-height: 100px;
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
	background-color: #f7f7f7;
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
	margin-top: 80px;
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

	/* background-color: #352b1e; */
`;
