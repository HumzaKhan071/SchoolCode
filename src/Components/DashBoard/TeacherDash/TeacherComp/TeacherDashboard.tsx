import React, { useEffect, useState } from "react";
import { FaChalkboardTeacher, FaSchool } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoQrCode } from "react-icons/io5";
import styled from "styled-components";
import { BsFillDisplayFill } from "react-icons/bs";
import { VscSymbolClass } from "react-icons/vsc";
import { IoIosPeople } from "react-icons/io";
import { useRecoilState, useRecoilValue } from "recoil";
import { Session, User } from "../../../Global/RecoilState";
import { useNavigate } from "react-router";
import axios from "axios";
import SliderComp from "./SliderComp";
import NewNotice from "../../AdminDash/Screen/NewNotice";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
// import DoughnutChart from "./DoughnutChart";
// import PieChart from "./PieChart";

interface iTeacher {
	name: string;
	schoolName: string;
	email: string;
	classes: string[];
	teacherCode: string;
	test: [];
	subjectTaken: [];
	notice: {}[];
}
const url: string = "https://school-code.onrender.com";

const TeacherDashboard = () => {
	const navigate = useNavigate();

	const [userState, setUserState] = useRecoilState(User);
	const [change, setChange] = React.useState(false);
	const user = useRecoilValue(User);
	const [session, setSession] = useRecoilState(Session);
	const [teacher, setTeacher] = useState({} as iTeacher);
	const [notice, setNotice] = useState({} as any);
	const [academic, setAcademic] = useState({} as any);

	const getSession = async () => {
		await axios.get(`${url}/api/teacher/${user._id}/`).then((res) => {
			setTeacher(res.data.data);
		});
	};

	const getAcademic = async () => {
		await axios
			.get(`${url}/api/academic/${user._id}/get-academic-session-teacher`)
			.then((res) => {
				setAcademic(res.data.data.academicSession[0]);
			});
	};

	const getNotice = async () => {
		await axios
			.post(
				`${url}/api/announcement/${user._id}/viewing-announcement-teacher`,
				{ code: academic?.sessionCode },
			)
			.then((res) => {
				setNotice(res.data.data);
				setSession(res.data.data);
			});
	};

	useEffect(() => {
		getSession();
		getNotice();
		getAcademic();
	}, [notice, academic]);

	return (
		<Container>
			<Wrapper>
				<h3>Teacher's Dashboard</h3>
				<RowOne>
					<Boxes>
						<BoxOneIconHold bg='#023047'>
							{" "}
							<FaSchool />{" "}
						</BoxOneIconHold>
						<span>
							School Name: <strong> {teacher.schoolName} </strong>{" "}
						</span>
					</Boxes>

					<Boxes>
						<BoxOneIconHold bg='#89087E'>
							{" "}
							<MdAdminPanelSettings />{" "}
						</BoxOneIconHold>
						<span>
							Teacher's Name: <strong> {teacher.name} </strong>
						</span>
					</Boxes>
					<Boxes>
						<BoxOneIconHold bg='#1FAE04'>
							{" "}
							<IoQrCode />{" "}
						</BoxOneIconHold>
						<span>
							Class Teacher of:{" "}
							<strong>
								{" "}
								<div style={{ display: "flex" }}>
									{" "}
									{teacher?.classes?.map((props) => (
										<div style={{ display: "flex", marginRight: "5px" }}>
											{` ${props}`},
										</div>
									))}
								</div>{" "}
							</strong>
						</span>
					</Boxes>
				</RowOne>

				<div>
					<SliderComp notice={notice!.notification} />
				</div>
				<RowTwo>
					<FirstBox>
						<InnerBox>
							<IconHold bgi='#F3E5F5'>
								<FaChalkboardTeacher color='#8E24AA' />
							</IconHold>
							<span> {teacher?.teacherCode} </span>
							<small>Teacher Code</small>
						</InnerBox>
						<InnerBox>
							<IconHold bgi='#E1F1FF'>
								<BsFillDisplayFill color='#3F7AFC' />
							</IconHold>
							<span> {teacher?.test?.length} </span>
							<small>Total test</small>
						</InnerBox>
						<InnerBox>
							<IconHold bgi='#FFF2D8'>
								<VscSymbolClass color='#FFA070' />
							</IconHold>
							<span> {teacher?.subjectTaken?.length} </span>
							<small>Subjects Taken</small>
						</InnerBox>
						<InnerBox>
							<IconHold bgi='#FFEAEA'>
								<IoIosPeople color='#FF0000' />
							</IconHold>
							<span>304 </span>
							<small>Total Students</small>
						</InnerBox>
					</FirstBox>
					<SecondBox>
						<span style={{ padding: "20px", fontWeight: "bold" }}>
							Lecture Rating
						</span>
						<DoughnutChart />
					</SecondBox>
					<ThirdBox>
						<span
							style={{
								padding: "20px",
								fontWeight: "bold",
							}}>
							Top Notice
						</span>

						<PieChart notice={notice!.notification} />
					</ThirdBox>
				</RowTwo>
			</Wrapper>
		</Container>
	);
};

export default TeacherDashboard;

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
	/* width: 95%; */
`;

const RowOne = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 10px;
	flex-wrap: wrap;
	@media (max-width: 768px) {
		justify-content: center;
	}
`;
const Boxes = styled.div`
	height: 120px;
	width: 320px;
	background-color: #fff;
	margin: 10px 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 6px;

	@media (max-width: 770px) {
		width: 90%;
	}

	span {
		font-size: 15px;
	}
`;

const BoxOneIconHold = styled.div<{ bg: string }>`
	height: 60px;
	width: 60px;
	border-radius: 50%;
	background-color: ${({ bg }) => bg};
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
`;

const RowTwo = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
const FirstBox = styled.div`
	height: 350px;
	width: 360px;
	/* background-color: red; */
	margin: 10px 10px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	/* border-radius: 6px; */

	@media (max-width: 700px) {
		width: 90%;
		height: 100%;
		justify-content: center;
	}
`;
const SecondBox = styled.div`
	width: 350px;
	height: 350px;
	background-color: #fff;
	margin: 10px 10px;
`;
const ThirdBox = styled.div`
	width: 350px;
	height: 350px;
	background-color: #fff;
	margin: 10px 10px;
	overflow: hidden;
`;

const InnerBox = styled.div`
	height: 160px;
	width: 173px;
	background-color: #fff;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	span {
		font-weight: 700;
	}
	small {
		font-size: 11px;
	}

	@media (max-width: 700px) {
		width: 150px;
		margin: 10px;
	}
	@media (max-width: 500px) {
		width: 200px;
		margin: 10px;
	}
`;

const IconHold = styled.div<{ bgi: string }>`
	margin: 0 10px;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: ${({ bgi }) => bgi};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	margin-bottom: 10px;
`;
