import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { User } from "../../../Global/RecoilState";
import ClipLoader from "react-spinners/ClipLoader";
import MyForm from "./Homeforms/MyForm";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import pic from "../../../Img/emp.gif";

const url: string = "https://school-code.onrender.com";

interface iTeacher {
	_id: string;
	classes: string;
	name: string;
	email: string;
	image: string;
	subjectTaken: any[];
	myClass: any[];
}

function Academics() {
	const user = useRecoilValue(User);
	const [teacher, setTeacher] = useState([] as iTeacher[]);
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
		const newURL = `${url}/api/class/${user._id}/${id}/assign-teacher`;

		await axios
			.post(newURL, { classToken: name })

			.then(() => {
				setLoad(false);
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

	const createSubject = async (id: string) => {
		const newURL = `${url}/api/subject/${user._id}/${id}/assign-subject-teacher`;
		console.log("id:", id, show);

		// await axios.post(newURL, {
		//   subjectName: name,
		//   classToken: name1,
		//   subjectTeacher: name2,
		// });
		//   .then((res) => {
		//     setTeacher(res.data.data.teachers);

		//     setLoad(false);
		//     setShow(false);
		//   });
	};

	const getTeacher = async () => {
		const newURL = `${url}/api/school/${user._id}/teachers`;
		await axios.get(newURL).then((res) => {
			setTeacher(res.data.data.teachers);
			console.log("main teacher");

			setLoad(false);
		});
	};

	useEffect(() => {
		getTeacher();
	}, []);
	return (
		<>
			{classRoom ? (
				<MyForm
					check={false}
					title1='Enter the class token to help find the class fast'
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
					buttonCall="Change Teacher's class"
				/>
			) : null}
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
								<ReMakeCard key={props._id}>
									<TeacherImage src={pic} />
									<Div>{props.name}</Div>
									<P>{props.email}</P>
									<RemButHold>
										<RemBut
											// onClick={() => {
											// 	toggleClassRoom();
											// 	setHold(props._id);
											// }}
											bg='#FAB84E'>
											Change Class
										</RemBut>

										<Link
											style={{ textDecoration: "none", color: "white" }}
											to={`/admin-dashboard/createteacher/view-teacher-detail/${props._id}`}>
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
											<Sub>{props?.myClass?.length}</Sub>
										</Down1>
										<Down1>
											<DownHo style={{ color: "#4A148C" }}>
												Subjects Taken
											</DownHo>
											<Sub>{props?.subjectTaken?.length}</Sub>
										</Down1>

										<Down1>
											<DownHo style={{ color: "#FAB84E" }}>Status</DownHo>
											<Sub>Teacher</Sub>
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
									<BoxImag src={pic} />
									<h3>Add Teacher to your institute.</h3>
									<p>
										Your institute has no teacher yet. Added classrooms will
										appear here.
									</p>
								</>
							)}
						</BoxHold1>
					)}
				</Holder>
			</Container>
		</>
	);
}

export default Academics;

const Down = styled.div`
	display: flex;
	font-size: 10px;
	justify-content: space-between;
	width: 80%;
	margin-top: 5px;
	text-align: center;
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

const Curve = styled.div`
	padding: 2px 8px;
	font-size: 12px;
	font-weight: bold;
	color: white;
	background-color: #000269;
	border-radius: 30px;
	margin: 3px;
`;

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

const CalD = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: 500;
	font-size: 14px;
	margin-top: 5px;
	align-items: flex-start;
	width: 100%;
`;

const Cal = styled.div`
	display: flex;
	align-items: center;
	font-weight: 500;
	font-size: 14px;
`;
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
	padding: 10px 0;
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
	//   text-transform: uppercase;
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

const ButtonB = styled.div<{ bg: string }>`
	height: 45px;
	width: 150px;
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
	margin-top: 80px;
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
