import React, { useEffect } from "react";
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

const url: string = "https://school-code.onrender.com";

interface IData {

	_id: string;
	className: string;
	attendance: [];
	schoolName: string;
	classTeacher: string;
	subject: [];
	classToken: string;
}
interface IDataSubject {
	_id: string;
	className: string;
	test: [];
	subjectName: string;
	lecture: [];
	subjectTeacher?: string;
}

function ClassRoomDetails() {
	const { id } = useParams();
	const user = useRecoilValue(User);
	const [load, setLoad] = React.useState(false);
	const [show, setShow] = React.useState(false);
	const [showSubjects, setShowSubjects] = React.useState(false);
	const [classData, setClassData] = React.useState({} as IData);
	const [showDelete, setShowDelete] = React.useState(false);
	const [subjectData, setSubjectData] = React.useState([] as IDataSubject[]);
	const [teacherName, setTeacherName] = React.useState("");
	const [subjectName, setSubjectName] = React.useState("");
	const [subTeacher, setSubTeacher] = React.useState("");
	const [subjectID, setSubjectID] = React.useState("");
	const [showAssignSubject, setShowAssignSubject] = React.useState(false);
	console.log(user._id);
	const toggleShow = () => {
		setShow(!show);
	};
	const toggleShowSubject = () => {
		setShowSubjects(!showSubjects);
	};
	const toggleShowDelete = () => {
		setShowDelete(!showDelete);
	};
	const toggleShowAssignSubject = (id: any) => {
		setShowAssignSubject(!showAssignSubject);
	};

	const changeId = (id: any) => {
		setSubjectID(id);
	};

	const getClassDetails = async () => {
		await axios.get(`${url}/api/class/${id}/viewing-class`).then((res) => {
			setClassData(res.data.data);
			// console.log("thisdbff", res.data.data);
		});
	};
	const getClassDetailsSubject = async () => {
		await axios
			.get(`${url}/api/subject/${id}/view-class-subject`)
			.then((res) => {
				setSubjectData(res?.data?.data?.subject);
			});
	};

	const AssiningClassTeacher = async () => {
		setLoad(true);
		await axios
			.post(`${url}/api/class/${user?._id}/${id}/assign-teacher-class`, {
				teacherName,
			})
			.then((res) => {
				setLoad(false);
				window.location.reload();
			})
			.catch((res) => {
				setLoad(false);
				Swal.fire({
					icon: "error",
					title: "An error occured",
					text: "Teacher can't be found",
				});
			});
	};

	const createNewSubject = async () => {
		setLoad(true);
		await axios
			.post(`${url}/api/subject/${user?._id}/create-class-single-subject`, {
				classToken: classData?.classToken,
				subjectName,
			})
			.then((res) => {
				setLoad(false);
				window.location.reload();
			})
			.catch(() => {
				setLoad(false);
				Swal.fire({
					icon: "error",
					title: "An error occured",
					text: "Subject can't be found",
				});
			});
	};

	console.log("all subject", subjectData);

	const assignTeacherToSubject = async (props: any) => {
		setLoad(true);
		console.log("propssss", props);
		await axios
			.post(`${url}/api/subject/${user?._id}/assign-subject-to-teacher`, {
				subjectToken: props?.subjectToken,
				subjectTeacher: subTeacher,
			})
			.then((res) => {
				console.log("this is the teacher student", res);
				setLoad(false);
			})
			.catch((res) => {
				setLoad(false);
				Swal.fire({
					icon: "error",
					title: "An error occured",
					text: "Teacher can't be found",
				});
			});
	};

	useEffect(() => {
		getClassDetails();
		getClassDetailsSubject();
	}, [subjectID]);

	return (
		<>
			{load ? <Loading /> : null}
			<Container>
				<Content>
					<span>{classData?.className}</span>
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
							{!classData?.classTeacher ? (
								<ButtonH>Pending</ButtonH>
							) : (
								<ButtonH>Completed</ButtonH>
							)}
							<Tog>
								<h5>Manage class teacher, attendance for 12 - B</h5>
								<span>
									Class teacher is responsible for day to day activities of the
									class
								</span>
							</Tog>
							<But onClick={toggleShow}>+ Assign Class Teacher</But>
							{!classData?.classTeacher ? (
								<></>
							) : (
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
										ClassTeacher Assigned :{" "}
									</div>
									<div style={{ display: "flex", alignItems: "center" }}>
										{" "}
										<TeacherImage src='/img/prof.png' />
										{classData?.classTeacher}
									</div>
								</div>
							)}
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

									<Iput
										value={teacherName}
										onChange={(e) => {
											setTeacherName(e.target.value);
										}}
										placeholder='Teacher Name'
									/>

									<ButHold2 onClick={AssiningClassTeacher}>
										<Button>+ Assign Teacher</Button>
									</ButHold2>
								</Conta>
							) : null}
						</Cont>
					</MainHold2>
					<MainHold2>
						<Cont>
							<Tog>
								<h5>Manage subjects for 12 - A</h5>
								<span>
									Add/remove subjects for the class and assign teachers to
									respective subjects
								</span>
							</Tog>
							<But onClick={toggleShowSubject}>+ Add Subject</But>
							{subjectData?.map((props, i) => (
								<AllSubBox key={props._id}>
									<Main>
										<First>
											<Title>{props?.subjectName?.toUpperCase()}</Title>
											<IconHold onClick={toggleShowDelete}>
												<FiMoreVertical />
											</IconHold>
											{showDelete ? (
												<Conta3>
													<div
														style={{
															display: "flex",
															justifyContent: "space-between",
															alignItems: "center",
														}}>
														<div style={{ fontSize: "10px" }}></div>
														<Cancel onClick={toggleShowDelete}>
															<AiOutlineClose />
														</Cancel>
													</div>

													<ButHold3>
														<Button style={{ color: "red" }}>
															<MdDeleteForever /> Delete Subject
														</Button>
													</ButHold3>
												</Conta3>
											) : null}
										</First>
										<span>Compulsory</span>

										<But
											onClick={() => {
												toggleShowAssignSubject(props._id);
												changeId(props._id);
											}}>
											+ Assign Teacher
										</But>

										{props.subjectTeacher ? (
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
													SubjectTeacher Assigned :{" "}
												</div>
												<div style={{ display: "flex", alignItems: "center" }}>
													{" "}
													<TeacherImage src='/img/prof.png' />
													{props?.subjectTeacher}
												</div>
											</div>
										) : null}
									</Main>
									{showAssignSubject && props._id === subjectID ? (
										<Conta4>
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
												}}>
												<span>Select Teacher</span>
												<Cancel
													onClick={() => {
														toggleShowAssignSubject(props._id);
													}}>
													<AiOutlineClose />
												</Cancel>
											</div>

											<Iput
												onChange={(e) => {
													setSubTeacher(e.target.value);
												}}
												placeholder='Teacher Name'
											/>

											<ButHold2
												onClick={() => {
													assignTeacherToSubject(props);
												}}>
												<Button>+ Assign Teacher</Button>
											</ButHold2>
										</Conta4>
									) : null}
								</AllSubBox>
							))}

							{showSubjects ? (
								<Conta2>
									<div
										style={{
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
										}}>
										<span>create Subject</span>
										<Cancel onClick={toggleShowSubject}>
											<AiOutlineClose />
										</Cancel>
									</div>

									<Iput
										onChange={(e) => {
											setSubjectName(e.target.value);
										}}
										placeholder='Subject Name'
									/>

									<ButHold2 onClick={createNewSubject}>
										<Button>+ Create Subject</Button>
									</ButHold2>
								</Conta2>
							) : null}
						</Cont>
					</MainHold2>
				</Content>
			</Container>
		</>
	);

}

export default ClassRoomDetails;

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
    height: 20px;
    width: 100px;
    display: flex;
    background-color: #f4f4f4;
    padding-left: 5px;
    font-size: 12px;
    /* justify-content: center; */
    align-items: center;
    /* border: 3px solid #f4f4f4; */
    border-radius: 10px;
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

const AllSubBox = styled.div`
  width: 100%;
  border: 1px solid #f4f4f4;
  position: relative;
  /* height: 100px; */
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin-top: 10px;
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
  margin-top: 80px;
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
