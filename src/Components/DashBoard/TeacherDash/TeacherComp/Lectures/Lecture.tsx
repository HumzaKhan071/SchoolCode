import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { User } from "../../../../Global/RecoilState";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { reset } from "numeral";
import Loading from "../../../../Auth/Loading";

const url = "https://school-code.onrender.com";
const Lecture = () => {
	const [draft, setDraft] = useState("");

	const user = useRecoilValue(User);
	const [subjects, setSubjects] = useState([] as any[]);
	const [lectures, setLectures] = useState([] as any[]);
	const [load, setLoad] = useState(false);

	const getAllReport = async () => {
		const URL: string = `${url}/api/lecture/${user._id}/view-all-teacher-lecture`;
		await axios.get(URL).then((res) => {
			setLectures(res.data.data.lectures);
		});
	};

	const handleForm = yup.object().shape({
		lectureTopic: yup
			.string()
			.required("Empty fills, Be sure to put in something"),
		lectureObjective: yup
			.string()
			.required("Empty fills, Be sure to put in something"),
		lectureNote: yup
			.string()
			.required("Empty fills, Be sure to put in something"),
		lectureTime: yup
			.string()
			.required("Empty fills, Be sure to put in something"),
		subjectCode: yup
			.string()
			.required("Empty fills, Be sure to put in something"),
	});

	const {
		register,
		// formState: { errors },
		reset,
		handleSubmit,
	} = useForm({ resolver: yupResolver(handleForm) });

	const onSubmmit = handleSubmit(async (value) => {
		const {
			subjectCode,
			lectureTopic,
			lectureObjective,
			lectureNote,
			lectureTime,
		} = value;
		const URL: string = `https://school-code.onrender.com/api/lecture/${user._id}/creating-lecture`;
		setLoad(true);
		await axios
			.post(URL, {
				subjectCode,
				lectureTopic,
				lectureObjective,
				lectureNote,
				lectureTime,
			})
			.then((res) => {
				console.log(res.data.data);
				setLoad(false);
				window.location.reload();
			})
			.catch((error) => {
				console.log("From Catch", error);
			});

		reset();
	});

	const fetchSub = async () => {
		const newURL = `${url}/api/subject/${user._id}/viewing-subject-teacher`;

		await axios.get(newURL).then((res) => {
			setSubjects(res.data.data);
		});
	};

	React.useEffect(() => {
		if (load) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [load]);

	useEffect(() => {
		getAllReport();
		fetchSub();
	}, []);

	return (
		<>
			{load ? <Loading /> : null}
			<Container>
				<Wrapper>
					<CreateLecture>
						<CreateLectureHold>
							<LectureTitle>View all the Subjects you teach</LectureTitle>

							<CardHolder>
								{subjects?.map((props) => (
									<Card key={props._id}>
										<Title>
											Subject Name: <span>{props.subjectName}</span>
										</Title>

										<Code>
											Subject Code: <span>{props.subjectToken}</span>
										</Code>
										<Code>
											class Offering: <span>{props.className}</span>
										</Code>
										<br />
										<div
											style={{
												display: "flex",
												justifyContent: "space-around",
											}}>
											<Coded col='#219ebc'>
												No of STD <span>{props.students.length}</span>
											</Coded>
											<Coded col='#ffb703'>
												No of Lecture <span>{props.lecture.length}</span>
											</Coded>
											<Coded col='red'>
												No of Test <span>{props.test.length}</span>
											</Coded>
										</div>
									</Card>
								))}
							</CardHolder>
						</CreateLectureHold>
					</CreateLecture>

					<CreateLecture>
						<CreateLectureHold>
							<LectureTitle>Make a New Lecture</LectureTitle>
							<LectureSet onSubmit={onSubmmit}>
								<InputHold>
									<label
										style={{
											color: "black",
										}}>
										Subject Code
									</label>
									<input
										type='text'
										placeholder='e.g 1d5c'
										{...register("subjectCode")}
									/>
								</InputHold>
								<InputHold>
									<label
										style={{
											color: "#219ebc",
										}}>
										Lecture Topic
									</label>
									<input
										type='text'
										placeholder='e.g The Amagamation of the Southern Empire'
										{...register("lectureTopic")}
									/>
								</InputHold>
								<InputHold>
									<label
										style={{
											color: "#219ebc",
										}}>
										Learning Objective
									</label>
									<input
										type='text'
										placeholder='e.g By the End of this Lesson...'
										{...register("lectureObjective")}
									/>
								</InputHold>

								<InputHold>
									<label
										style={{
											color: "#ffb703",
										}}>
										Reading Time
									</label>
									<input
										type='text'
										placeholder='e.g 2 hrs, 20 min...'
										{...register("lectureTime")}
									/>
								</InputHold>
								<InputHold>
									<label
										style={{
											color: "red",
										}}>
										Lecture Note
									</label>
									<textarea
										placeholder='Your lecture'
										{...register("lectureNote")}
									/>
								</InputHold>
								<button
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
									type='submit'>
									Publish
								</button>
								{/* <InputHold>
                <RichTextEditor  />
              </InputHold> */}
							</LectureSet>
						</CreateLectureHold>
					</CreateLecture>
					<h2>All Lectures created</h2>

					<AllLecture>
						{lectures?.map((props) => (
							<AllLectureHold key={props._id}>
								<TestCard>
									<Layer1>
										<LectureTit>{props.lectureTopic}</LectureTit>
										<LectureReadTime>{props.lectureTime}</LectureReadTime>
										<LectureObjective>
											{props.lectureObjective}
										</LectureObjective>
										<br />

										<LectureReadTime>
											<strong>
												Students Ratings: {props.lecturePerformance}
											</strong>
										</LectureReadTime>
									</Layer1>

									<Layer2>
										<NavLink
											to={`/teacher-dashboard/lecture_detail/${props._id}`}>
											<button
												style={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}>
												Explore
											</button>
										</NavLink>
									</Layer2>
								</TestCard>
							</AllLectureHold>
						))}
					</AllLecture>
				</Wrapper>
			</Container>
		</>
	);
};

export default Lecture;
const Card = styled.div`
	width: 250px;
	min-height: 150px;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	padding: 10px;
	margin: 5px;
`;
const Title = styled.div`
	margin: 5px;
	font-size: 17px;

	span {
		font-weight: bold;
	}
`;
const Coded = styled.div<{ col: string }>`
	margin: 5px;
	display: flex;
	flex-direction: column;
	font-size: 12px;
	align-items: center;
	color: ${({ col }) => col};
	font-weight: bold;

	span {
		color: black;
	}
`;
const Code = styled.div`
	margin: 5px;

	span {
		font-weight: bold;
	}
`;
const CardHolder = styled.div`
	display: flex;
	flex-wrap: wrap;
	// justify-content: center;
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
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const CreateLecture = styled.div`
	width: 90%;
	background-color: #fff;
	margin: 30px 0;
`;
const LectureTitle = styled.div`
	margin-bottom: 15px;
	font-weight: bold;
`;
const CreateLectureHold = styled.div`
	padding: 20px;
`;
const LectureSet = styled.form`
	button {
		height: 40px;
		width: 100%;
		margin-top: 15px;
		font-family: poppins;
		border: 1px solid;
		/* color: #1DA1F2; */
		color: #fff;
		border-radius: 3px;
		font-size: 15px;
		font-weight: 600;
		background-color: #1da1f2;
		cursor: pointer;
		margin-right: 10px;
		transition: all 350ms;

		:hover {
			transform: scale(0.98);
		}

		/* @media (max-width: 500px) {
      height: 40px;
      width: 100px;
      font-size: 12px;
      margin-left: 10px;
      margin-right: 10px;
    } */
	}
`;
const InputHold = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;

	textarea {
		height: 150px;
		width: 100%;
		font-family: poppins;
		border: 1px solid #1da1f2;
		color: #6d6d6e;
		border-radius: 3px;
		font-size: 13px;
		font-weight: 600;
		resize: none;
		padding-left: 10px;
		padding-top: 10px;
		::placeholder {
			color: #a6c4e4;
		}
	}

	input {
		height: 40px;
		/* width: 300px; */
		width: 100%;
		font-family: poppins;
		border: 1px solid #dddddd;
		color: #6d6d6e;
		border-radius: 3px;
		font-size: 13px;
		font-weight: 600;
		padding-left: 10px;
		::placeholder {
			color: #a6c4e4;
		}

		@media (max-width: 500px) {
			margin-bottom: 10px;
		}
	}
	label {
		font-size: 10px;
		font-weight: 600;
		margin-bottom: 3px;
	}
`;

const AllLecture = styled.div`
	width: 90%;
	background-color: #fff;
	margin: 30px 0;
`;
const AllLectureHold = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TestCard = styled.div`
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	width: 90%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 20px;
`;
const Layer1 = styled.div`
	padding: 10px;
`;
const LectureTit = styled.div`
	font-size: 18px;
	font-weight: 800;
`;
const LectureReadTime = styled.div`
	font-size: 10px;
	margin-bottom: 10px;
`;
const LectureObjective = styled.div``;

const Layer2 = styled.div`
	display: flex;
	align-items: flex-end;
	padding: 10px;
	button {
		height: 30px;
		width: 120px;
		font-family: poppins;
		background-color: transparent;
		border: 1px solid #1da1f2;
		color: #000;
		border-radius: 3px;
		font-size: 13px;
		cursor: pointer;
		margin-right: 10px;
		/* border: none; */
		cursor: pointer;
		transition: all 350ms;

		:hover {
			transform: scale(0.96);
		}
	}
`;
