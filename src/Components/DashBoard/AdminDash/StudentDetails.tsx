import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { User } from "../../Global/RecoilState";
import Swal from "sweetalert2";
import Loading from "../../Auth/Loading";
import ClassDataProps from "./ClassDataProps";
import MyForm from "./Screen/Homeforms/MyForm";
import OtherForm from "./Screen/Homeforms/OtherForm";

const url: string = "https://school-code.onrender.com";

interface IData {
	_id: string;
	className: string;
	attendance: [];
	schoolName: string;
	classTeacher: string;
	name: string;
	email: string;
	classID: string;
	subject: [];
}

function StudentDetails() {
	const { id } = useParams();
	const user = useRecoilValue(User);

	const [studentData, setStudentData] = React.useState({} as IData);
	const [studentDataFee, setStudentDataFee] = React.useState([] as any[]);
	const [fee, setFee] = useState(false);
	const [show, setShow] = useState(false);

	const [name, setName] = useState("");
	const [name1, setName1] = useState("");
	const [name2, setName2] = useState("");

	const [subjectHolder, setSubjectHolder] = useState([] as any[]);

	const toggleFee = () => {
		setFee(!fee);
	};

	const getStudentDetails = async () => {
		await axios
			.get(`${url}/api/student/${user?._id}/${id}/view-student`)
			.then((res) => {
				setStudentData(res.data.data);
			});
	};

	const paySchoolFeeNow = async () => {
		const newURL = `${url}/api/schoolfee/${user._id}/${studentData._id}/student-school-fee`;

		await axios
			.post(newURL, {
				amountPaid: parseInt(name),
				sessionCode: name1,
			})
			.then((res) => {
				setShow(false);
			});
	};

	const viewSchoolFeeDetail = async () => {
		// const local = `http://localhost:2244`;
		const newURL = `${url}/api/schoolfee/${user._id}/${studentData._id}/view-student-school-fee-detail`;

		await axios.get(newURL).then((res) => {
			setStudentDataFee(res.data.data.schoolFee);
		});
	};

	const getClassSuject = async () => {
		const newURL = `${url}/api/subject/${studentData.classID}/view-class-subject`;
		await axios.get(newURL).then((res) => {
			setSubjectHolder(res.data!.data!.subject);
		});
	};

	useEffect(() => {
		getStudentDetails();
		viewSchoolFeeDetail();
		getClassSuject();
	}, [subjectHolder, studentDataFee, studentData]);

	return (
		<>
			<Container>
				<Content>
					<span>{studentData?.name}</span>
					<MainHold>
						<LoaderHold>
							<Holding>
								<span>Setup Completed</span>
								<Div>100%</Div>
							</Holding>
						</LoaderHold>
						<NextRec>
							<span>Next Recommended action:</span>
							<Ad>{studentData?.email}</Ad>
						</NextRec>
					</MainHold>

					<MainHold2>
						<Cont>
							<Tog>
								<h5>Detail data for {studentData?.name}</h5>
								<span>
									Present class: <strong>{studentData?.className}</strong>
								</span>
							</Tog>

							{/* <ClassDataProps props={studentData.classID} />
              
              */}

							<div
								style={{
									display: "flex",
									flexWrap: "wrap",
								}}>
								{subjectHolder.map((props) => (
									<AllSubBox1 key={props._id}>
										<Main>
											<First>
												<Title>{props.subjectName}</Title>
												<IconHold>
													<FiMoreVertical />
												</IconHold>
											</First>
											<span>Compulsory</span>

											<div
												style={{
													marginTop: "5px",
												}}>
												{" "}
												<div
													style={{
														color: "#F8C46B",
														fontSize: "11px",
													}}>
													SubjectTeacher :{" "}
												</div>
												{props.subjectTeacher}
											</div>
										</Main>
									</AllSubBox1>
								))}
							</div>
						</Cont>
					</MainHold2>

					<MainHold2>
						<Cont>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
								}}>
								<Tog>
									<h5>All time school fee record</h5>
									<span>
										This are all the expenses/transaction you have made.
									</span>
								</Tog>
								<Button1 onClick={toggleFee}>Pay SchoolFee</Button1>
								{fee ? (
									<OtherForm
										check={true}
										holder='Enter payment to pay on behave of student'
										holder1='session code: 8b309d'
										holder2='Teacher to take this subject'
										toggle={toggleFee}
										title={`Make payment for on behave of student`}
										title1='Amount to pay'
										title2='Session Code'
										numb={true}
										// mainAction={paySchoolFeeNow}
										mainAction={paySchoolFeeNow}
										show={show}
										setShow={setShow}
										setName={setName}
										setName1={setName1}
										setName2={setName2}
										one={true}
										name={name}
										name1={name1}
									/>
								) : null}
							</div>

							{studentDataFee.map((props) => (
								<AllSubBox key={props._id}>
									<Main>
										<First>
											<Title>School Fee Session: {props.academicSession}</Title>
											<IconHold>
												<FiMoreVertical />
											</IconHold>
										</First>
										<span>{props.academicTerm}</span>

										<div
											style={{
												display: "flex",
												marginTop: "15px",
											}}>
											<div
												style={{
													display: "flex",
													flexDirection: "column",
												}}>
												<div
													style={{
														color: "green",
														fontSize: "11px",
														fontWeight: "bold",
														letterSpacing: "1.2px",
													}}>
													Amount Paid
												</div>
												<div
													style={{ marginRight: "60px", fontWeight: "bold" }}>
													₦{props.amountPaid}
												</div>
											</div>
											<div
												style={{
													display: "flex",
													flexDirection: "column",
												}}>
												<div
													style={{
														color: "red",
														fontSize: "11px",
														fontWeight: "bold",
														letterSpacing: "1.2px",
													}}>
													Amount to balance
												</div>
												<div
													style={{
														marginRight: "25px",
														fontWeight: "bold",
														fontSize: "13px",
													}}>
													₦{props.toBalance}
												</div>
											</div>
										</div>

										<div
											style={{
												color: "#F8C46B",
												fontSize: "11px",
												marginTop: "10px",
											}}>
											Payment Details{" "}
										</div>
										<div style={{ display: "flex", alignItems: "center" }}>
											Transaction Refence:{" "}
											<div
												style={{
													fontWeight: "bold",
													marginLeft: "10px",
													fontSize: "13px",
												}}>
												{props.receiptToken}
											</div>
										</div>
										<div style={{ display: "flex", alignItems: "center" }}>
											Paid Date :{" "}
											<div
												style={{
													fontWeight: "bold",
													marginLeft: "10px",
													fontSize: "13px",
												}}>
												{props.dateTime}
											</div>
										</div>
									</Main>
								</AllSubBox>
							))}
						</Cont>
					</MainHold2>
				</Content>
			</Container>
		</>
	);
}

export default StudentDetails;

const TeacherImage = styled.img`
	height: 20px;
	width: 20px;
	background-color: silver;
	border-radius: 50%;
	margin-right: 5px;
`;

const Conta4 = styled.div`
	position: absolute;
	background-color: white;
	min-width: 200px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	display: flex;
	top: 0;
	padding: 10px;
	border-radius: 5px;
	left: 20px;
	flex-direction: column;

	span {
		font-size: 11px;
		font-weight: 400;
	}

	@media screen and (max-width: 768px) {
		/* top: 150px; */
	}
`;

const Conta3 = styled.div`
	position: absolute;
	background-color: white;
	min-width: 200px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	display: flex;
	top: 0;
	right: 0;
	/* left: 0; */
	padding: 10px;
	border-radius: 5px;
	/* left: 20px; */
	flex-direction: column;

	span {
		font-size: 11px;
		font-weight: 400;
	}

	@media screen and (max-width: 768px) {
		/* top: 150px; */
	}
`;

const Main = styled.div`
	margin-left: 10px;

	span {
		height: 25px;
		width: 100px;
		display: flex;
		background-color: #f4f4f4;
		padding-left: 5px;
		font-size: 12px;
		/* justify-content: center; */
		align-items: center;
		/* border: 3px solid #f4f4f4; */
		border-radius: 4px;
		font-weight: 500;
		color: #9e9e9e;
		margin-bottom: 5px;
	}
`;

const First = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 3px;
`;
const Title = styled.div`
	font-weight: bold;
`;
const IconHold = styled.div`
	margin-right: 10px;
`;

const AllSubBox1 = styled.div`
	width: 300px;
	border: 1px solid #f4f4f4;
	position: relative;
	/* height: 100px; */
	padding-top: 20px;
	padding-bottom: 20px;
	border-radius: 10px;
	margin: 10px;
	transition: all 350ms;
	cursor: pointer;

	:hover {
		border: 1px solid #c3c3c3;
	}
`;

const AllSubBox = styled.div`
	width: 100%;
	border: 1px solid #f4f4f4;
	position: relative;
	/* height: 100px; */
	padding-top: 20px;
	padding-bottom: 20px;
	border-radius: 10px;
	margin: 10px;
	transition: all 350ms;
	cursor: pointer;

	:hover {
		border: 1px solid #c3c3c3;
	}
`;

const Iput = styled.input`
	margin-top: 8px;
	border: 1px solid #f4f4f4;
	outline: none;
	height: 30px;
	border-radius: 5px;
	padding-left: 10px;

	::placeholder {
		font-size: 12px;
	}
`;

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

const ButHold2 = styled.div`
	margin-top: 10px;
`;
const ButHold3 = styled.div`
	color: red;
`;
const ButHold = styled.div`
	margin-top: 50px;
`;

const Button1 = styled.div`
	height: 45px;
	width: 200px;
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

const Conta2 = styled.div`
	position: absolute;
	background-color: white;
	min-width: 200px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	display: flex;
	top: 0;
	padding: 10px;
	border-radius: 5px;
	left: 20px;
	flex-direction: column;

	span {
		font-size: 11px;
		font-weight: 400;
	}

	@media screen and (max-width: 768px) {
		/* top: 150px; */
	}
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
	width: 95%;
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
	background-color: #fab84e;
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
	margin-top: 80px;
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
