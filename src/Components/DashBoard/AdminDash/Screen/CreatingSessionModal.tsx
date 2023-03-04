import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { User } from "../../../Global/RecoilState";
import { Navigate, useNavigate } from "react-router";

interface iSession {
	sessionCode: string;
	academicSession: string;
	academicTerm: string;
}
interface Iprops {
	toggleDrop: () => void;
	academic: iSession;
}

const url: string = "https://school-code.onrender.com";

const CreatingSessionModal: React.FC<Iprops> = ({ toggleDrop, academic }) => {
	const navigate = useNavigate();
	const [startDate, setStartDate] = useState(new Date());
	const user = useRecoilValue(User);
	const [endDate, setEndDate] = useState(new Date());
	const [term, setTerm] = useState("");
	const [show, setShow] = useState(false);

	const createSession = async () => {
		setShow(true);
		const newUrl = `${url}/api/academic/${user._id}/create-academic-session`;
		await axios
			.post(newUrl, {
				academicSession: `${startDate?.getFullYear()}/${endDate?.getFullYear()}`,
				academicTerm: term,
			})
			.then((res) => {
				setShow(false);
				navigate("/");
				window.location.reload();
			});
	};

	return (
		<Container>
			<Card>
				<Cont>
					<FirstHold>
						<Text>Add New Session</Text>
						{academic === null ? null : (
							<Cancel onClick={toggleDrop}>
								<MdOutlineClose />
							</Cancel>
						)}
					</FirstHold>

					<span>
						Please note that each session you create, holds records of that
						particular session.
					</span>

					<Holden>
						<InpHold>
							<Title>
								Session Start <div style={{ color: "red" }}>*</div>
							</Title>
							<DatePickerStyle
								required
								selected={startDate}
								onChange={(date: any) => setStartDate(date)}
								showYearPicker
								dateFormat='yyyy'
								yearItemNumber={9}
								// disabled
							/>
						</InpHold>
						<InpHold>
							<Title>
								Session Ends <div style={{ color: "red" }}>*</div>
							</Title>
							<DatePickerStyle
								required
								selected={endDate}
								onChange={(date: any) => setEndDate(date)}
								showYearPicker
								dateFormat='yyyy'
								yearItemNumber={9}
							/>
						</InpHold>
					</Holden>
					<InpHold>
						<Title>Session Term</Title>
						<Input
							onChange={(e) => {
								setTerm(e.target.value);
							}}
							required>
							<option selected disabled>
								select term
							</option>
							<option value='1st Term'>First Term</option>
							<option value='2nd Term'>Second Term</option>
							<option value='3rd Term'>Third Term</option>
						</Input>
					</InpHold>
					<ButtonHold>
						{term !== "" ? (
							<Button2
								onClick={createSession}
								style={{ backgroundColor: "#1da1f2", color: "white" }}>
								{show ? <>Loading...</> : <>Create Session</>}
							</Button2>
						) : (
							<>
								{show ? (
									<Button2>Loading...</Button2>
								) : (
									<Button2
										style={{
											cursor: "not-allowed",
										}}>
										Procceed
									</Button2>
								)}
							</>
						)}
					</ButtonHold>
				</Cont>
			</Card>
		</Container>
	);
};

export default CreatingSessionModal;

const DatePickerStyle = styled(DatePicker)`
	height: 30px;
	width: 200px;
	border: 1px solid #f4f4f4;
	outline: none;
	border-radius: 5px;
	margin-right: 10px;

	@media screen and (max-width: 960px) {
		width: 90%;
	}
`;

const Holden = styled.div`
	display: flex;
`;

const ButtonHold = styled.div`
	margin-top: 20px;
	/* background-color: red; */
	width: 100%;
	display: flex;

	justify-content: flex-end;
`;

const Button3 = styled.div`
	height: 40px;
	width: 120px;
	background-color: none;
	color: #1da1f2;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	margin-right: 10px;
	border: 1px solid #1da1f2;
	cursor: pointer;
	transition: all 350ms;

	:hover {
		transform: scale(0.97);
	}
`;
const Button2 = styled.div`
	height: 40px;
	width: 120px;
	background-color: #dcdada;
	/* color: #1da1f2; */
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	font-size: 13px;

	/* border: 1px solid #1da1f2; */
	cursor: pointer;
	transition: all 350ms;

	:hover {
		transform: scale(0.97);
	}
`;

const InpHold = styled.div`
	margin-top: 10px;
`;
const Title = styled.div`
	font-size: 13px;
	display: flex;
	align-items: center;
`;

const Input = styled.select`
	height: 35px;
	width: 97%;
	background-color: none;
	color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	padding-left: 10px;
	border: 1px solid #f4f4f4;
	transition: all 350ms;
	outline: none;
`;

const Cancel = styled.div`
	height: 30px;
	width: 30px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	:hover {
		background-color: #eeeeee;
	}
`;
const FirstHold = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid silver;
`;
const Text = styled.div`
	font-weight: bold;
`;
const Cont = styled.div`
	width: 90%;
	height: 100%;
	margin-top: 10px;

	span {
		font-size: 13px;
	}
`;

const Card = styled.div`
	height: 300px;
	width: 500px;
	background-color: white;
	margin-top: 50px;
	border-radius: 5px;
	transition: all 350ms;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 768px) {
		width: 97%;
	}
`;

const Container = styled.div`
	position: absolute;

	background-color: rgba(30, 145, 243, 0.3);

	height: 100%;
	width: 100%;
	color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(5px);
	z-index: 10;
	top: 0;
	/* display: none; */
`;
