import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { User } from "../../../../Global/RecoilState";

import ClipLoader from "react-spinners/ClipLoader";
import { NavLink } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { MdPageview } from "react-icons/md";
import pic from "../../../../Img/emp.gif";

const SubjectTest = () => {
	const URL: string = "https://school-code.onrender.com";

	interface iTeacher {
		_id: string;
		name: string;
	}

	interface iSubject {
		_id: string;
		className: string;
		subjectToken: string;
		subjectName: string;
		students: [];
		test: [];
		lecture: [];
		subjectTeacher: string;
	}

	const user = useRecoilValue(User);
	const [getSubjects, setGetSubjects] = useState([] as iSubject[]);
	const [teacherInfo, setTeacherInfo] = useState({} as iTeacher);
	const [load, setLoad] = useState(true);

	const getSub = async () => {
		const uuri = `${URL}/api/subject/${user._id}/viewing-subject-teacher`;

		await axios.get(uuri).then((res) => {
			setGetSubjects(res.data.data);
			console.log(res.data);
			setTeacherInfo(res.data.data);
			setLoad(false);
		});
	};

	useEffect(() => {
		getSub();
	}, []);

	return (
		<Container>
			<Wrapper>
				<TestSubjects>
					<AllSubjects>
						{getSubjects?.length >= 1 ? (
							<div
								style={{
									display: "flex",
									flexWrap: "wrap",
									justifyContent: "center",
								}}>
								{getSubjects?.map((props) => (
									<SubjectCard key={props._id}>
										<SubjectFirst>
											<One>
												<HolderIcon>
													<IoBookSharp
														style={{
															color: "#EFA642",
															fontWeight: "700",
															fontSize: "50px",
														}}
													/>
												</HolderIcon>
											</One>
											<Two>
												<span>{props.subjectName}</span>
												<pre>class : {props.className}</pre>
											</Two>
										</SubjectFirst>
										<SubjectSecond>
											<SecondOne>
												<pre>Subject Teacher : {props.subjectTeacher} </pre>
											</SecondOne>
											<SecondTwo>
												<NavLink
													to={`/teacher-dashboard/test/allTest/${props._id}`}
													style={{
														textDecoration: "none",
													}}>
													<ViewButton>
														<MdPageview
															style={{
																color: "white",
																fontWeight: "300",
																fontSize: "15px",
																marginRight: "5px",
															}}
														/>
														<span>View / Create Test</span>
													</ViewButton>
												</NavLink>
											</SecondTwo>
										</SubjectSecond>
										{/* <SubjectName> {props.className} </SubjectName>
                    <SubjectName> {props.subjectName} </SubjectName>
                    <SubjectTeacher> {teacherInfo.name} </SubjectTeacher>
                    <ButtonHold>
                      <NavLink
                        to={`/teacher-dashboard/test/allTest/${props._id}`}
                      >
                        <button>View / Create Test</button>
                      </NavLink>
                    </ButtonHold> */}
									</SubjectCard>
								))}
							</div>
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
										<h3>Start Accessing Students by Creating Test</h3>
										<p>
											Your Subject has no Test yet. Test Created will appear
											here.
										</p>
										<ButtonHold>
											<NavLink to='/teacher-dashboard/test/allTest'>
												<button>Create Test</button>
											</NavLink>
										</ButtonHold>
									</>
								)}
							</BoxHold1>
						)}
					</AllSubjects>
				</TestSubjects>
			</Wrapper>
		</Container>
	);
};

export default SubjectTest;

const ViewButton = styled.div`
	width: 170px;
	height: 27px;
	background-color: #0fbbfe;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	border-radius: 6px;
	span {
		color: white;
		font-weight: 600;
		font-size: 15px;
	}

	@media screen and (max-width: 600px) {
		width: 120px;
		height: 27px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

		span {
			color: white;
			font-weight: 600;
			font-size: 10px;
		}
	}
`;

const SecondOne = styled.div`
	width: 200px;
	display: flex;
	justify-content: center;
	background-color: white;
	height: 28px;
	border-radius: 6px;
	margin-left: 25px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	padding-left: 5px;
	padding-right: 5px;

	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

	pre {
		margin-top: 5px;
		font-width: 600;
	}

	@media screen and (max-width: 600px) {
		width: 120px;
		height: 27px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-left: 10px;

		pre {
			margin-top: 10px;
			font-size: 9px;
			margin-left: 10px;
			font-width: 700;
		}
	}
`;
const SecondTwo = styled.div``;

const HolderIcon = styled.div`
	background-color: #fdf4e6;
	height: 70px;
	width: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const One = styled.div`
	height: 100%;
	width: 80px;

	display: flex;

	align-items: center;

	@media screen and (max-width: 600px) {
		width: 45%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
const Two = styled.div`
	width: 350px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	line-height: 12px;

	span {
		font-size: 25px;
		font-weight: 600;
		color: black;
	}

	pre {
		font-size: 20px;
		color: grey;
		font-weight: 600;
	}

	@media screen and (max-width: 600px) {
		span {
			margin-left: 5px;
			font-size: 20px;
		}

		pre {
			margin-left: 5px;
		}
	}
`;

const SubjectFirst = styled.div`
	padding-bottom: 0px;
	display: flex;
	height: 110px;
	width: 90%;

	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;
const SubjectSecond = styled.div`
	height: 50px;
	background-color: #f7f9fc;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
const BoxImag = styled.img`
	height: 200px;
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

const Container = styled.div`
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
	padding-top: 60px;
	@media screen and (max-width: 1100px) {
		width: 95%;
	}
	@media screen and (max-width: 1005px) {
		width: 100%;
	}

	/* background-color: #352b1e; */
`;

const Wrapper = styled.div`
	width: 95%;
`;

const TestSubjects = styled.div`
	/* width: 95%; */
	background-color: #fff;
	margin-top: 30px;
`;

const AllSubjects = styled.div`
	padding: 30px;
	padding-left: 0px;
	padding-right: 0px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	min-height: 500px;
	height: 100%;

	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;
const SubjectCard = styled.div`
	height: 156px;
	width: 480px;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin: 10px;

	@media screen and (max-width: 700px) {
		width: 550px;
		height: 156px;
	}
	@media screen and (max-width: 425px) {
		width: 400px;
		height: 156px;
	}
	@media screen and (max-width: 375px) {
		width: 330px;
		height: 156px;
	}
	@media screen and (max-width: 320px) {
		width: 300px;
		height: 156px;
	}
	:hover {
		box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
			rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	}
`;
const SubjectName = styled.div`
	font-weight: bold;
	font-size: 18px;
`;
const SubjectTeacher = styled.div`
	/* font-size: 12px; */
	font-weight: lighter;
`;
const ButtonHold = styled.div`
	button {
		height: 40px;
		width: 150px;
		margin-top: 15px;
		font-family: poppins;
		/* border: 1px solid #dddddd; */
		/* color: #6d6d6e; */
		border: none;
		outline: none;
		color: #fff;
		border-radius: 3px;
		font-size: 13px;
		font-weight: 600;
		background-color: #1da1f2;
		cursor: pointer;
		margin-right: 10px;
		@media (max-width: 500px) {
			height: 40px;
			width: 100px;
			font-size: 12px;
			margin-left: 10px;
			margin-right: 10px;
		}
	}
`;
