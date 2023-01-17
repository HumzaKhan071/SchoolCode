import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { User } from "../../Global/RecoilState";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";

import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";
import Loading from "../../Auth/Loading";

const url: string = "https://school-code.onrender.com";

const StudentReport = () => {
	const schema = yup.object().shape({
		message: yup.string().required("This field has to be filled"),
	});

	const {
		register,
		formState: { errors },
		reset,
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = handleSubmit(async (data: any) => {
		setLoad(true);
		const { message } = data;
		console.log(data);

		const newURL = `${url}/api/report/${user._id}/create-student-report`;
		await axios.post(newURL, { message }).then((res) => {
			// console.log(res);
			setLoad(false);

			Swal.fire({
				icon: "success",
				title: "Report Submitted",
			});
		});
	});

	const data = [
		{
			id: 1,
			createdAt: "22 June 2022",
			message:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			createdBy: "Olorunda Samuel",
			createdAtTime: "5 months ago",
			bg: "#40dfcd",
		},
		{
			id: 2,
			createdAt: "22 September 2022",
			message:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			createdBy: "Olorunda Samuel",
			createdAtTime: "3 months ago",
			bg: "#FBD540",
		},
		{
			id: 3,
			createdAt: "28 December 2022",
			message:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			createdBy: "Olorunda Samuel",
			createdAtTime: "5 min ago",
			bg: "#F939A1",
		},
	];
	interface iReport {
		message: string;
		_id: string;
		status: string;
		// status: string,
	}
	const user = useRecoilValue(User);

	const [viewReport, setViewReport] = useState([] as any[]);

	const [load, setLoad] = useState(false);
	const fetchReport = async () => {
		const newURL = `${url}/api/report/${user._id}/view-student-report`;
		await axios.get(newURL).then((res) => {
			setViewReport(res.data.data.report);
		});
	};

	useEffect(() => {
		fetchReport();
	}, []);
	return (
		<>
			{load ? <Loading /> : null}
			<Container>
				<Wrapper>
					<MakeReport>
						<MakeReportHold onSubmit={onSubmit}>
							<Title>Make A Report</Title>
							<InputHold>
								<Inputt>
									<label>Make Report</label>
									<textarea
										placeholder='Enter Your Report Here'
										{...register("message")}
									/>
								</Inputt>
							</InputHold>
							<ButtonHold>
								<button
									type='submit'
									style={{
										backgroundColor: "",
									}}>
									Save
								</button>
							</ButtonHold>
						</MakeReportHold>
					</MakeReport>

					<BoardCard>
						<BoardHold>
							<ReportTitle>All Report so far! </ReportTitle>

							<NoticeHold>
								{viewReport?.map((props) => (
									<NoticeData key={props._id}>
										{props.status === "not seen" ? (
											<Div bg='red'>unseen</Div>
										) : props.status === "seen" ? (
											<Div bg='orange'>seen</Div>
										) : props.status === "done" ? (
											<Div bg='green'>done</Div>
										) : null}
										<div
											style={{
												display: "flex",
												justifyContent: "space-between",
											}}>
											<NoticeDate>
												{" "}
												{moment(props?.createdAt).format("MMMM Do YYYY")}{" "}
											</NoticeDate>
											<div style={{ fontSize: "12px", fontWeight: "bold" }}>
												{/* Edit */}
											</div>
										</div>
										<NoticeMessage> {props.message} </NoticeMessage>
									</NoticeData>
								))}
							</NoticeHold>
						</BoardHold>
					</BoardCard>
				</Wrapper>
			</Container>
		</>
	);
};

export default StudentReport;
const Div = styled.div<{ bg: string }>`
	background-color: ${({ bg }) => bg};
	color: white;
	font-size: 12px;
	width: 70px;
	display: flex;
	justify-content: center;
	border-radius: 2px;
`;
const BoxHold = styled.div`
	/* min-height: 90vh; */
	width: 100%;
	background-color: white;
	border-radius: 5px;
	// display: flex;
	// flex-wrap: wrap;
	// justify-content: center;
	max-height: 70vh;
	overflow-y: scroll;
	/* align-items: center; */
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
	flex-direction: column;
	align-items: center;
`;

const MakeReport = styled.div`
	height: 300px;
	width: 95%;
	background-color: #fff;
	margin: 20px 0;

	@media (max-width: 500px) {
		height: 300px;
	}
`;
const MakeReportHold = styled.form`
	padding: 20px;
`;
const Title = styled.div`
	font-weight: bold;
	margin-bottom: 20px;
`;

const InputHold = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
const Inputt = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-right: 20px;
	textarea {
		height: 100px;
		width: 100%;
		font-family: poppins;
		border: 1px solid #1da1f2;
		color: #6d6d6e;
		border-radius: 3px;
		font-size: 13px;
		font-weight: 600;
		resize: none;
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

const ButtonHold = styled.div`
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
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 350ms;

		:hover {
			transform: scale(0.98);
		}

		@media (max-width: 500px) {
			height: 40px;
			width: 100px;
			font-size: 12px;
			margin-left: 10px;
			margin-right: 10px;
		}
	}
`;

const BoardCard = styled.div`
	width: 95%;
	background-color: #fff;
	margin: 30px 0;
`;
const BoardHold = styled.div`
	padding: 30px;
`;
const ReportTitle = styled.div`
	font-weight: bold;
	margin-bottom: 20px;
`;

const NoticeHold = styled.div``;
const NoticeData = styled.div`
	border-bottom: 1px solid lightgray;
	margin-bottom: 10px;
`;
const NoticeDate = styled.div`
	height: 30px;
	width: 120px;
	background-color: #40dfcd;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 40px;
	font-size: 10px;
	color: #fff;
	font-weight: 600;
	margin-bottom: 15px;
`;
const NoticeMessage = styled.div`
	font-size: 13px;
	margin-bottom: 10px;
	text-transform: uppercase;
	strong {
		font-size: 12px;
		color: red;
		text-transform: normal;
	}
`;
const SenderDate = styled.div`
	font-size: 11px;
	margin-bottom: 20px;
`;
