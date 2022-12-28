import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { User } from "../../../../Global/RecoilState";
import { string } from "yargs";

interface iProps {
	toggle?: () => void;
	//   toggleSubject?: () => void;
	mainAction?: () => void;
	mainActionAdmin?: (id: any) => void;
	title?: string;
	title1?: string;
	title2?: string;
	title3?: string;
	title4?: string;
	title5?: string;
	title6?: string;
	subTitle?: string;
	holder?: string;
	holder1?: string;
	holder2?: string;
	holder3?: string;
	holder4?: string;
	holder5?: string;
	show: boolean;
	setName: React.Dispatch<React.SetStateAction<string>>;
	setName3: React.Dispatch<React.SetStateAction<string>>;
	setName4: React.Dispatch<React.SetStateAction<string>>;
	setName5: React.Dispatch<React.SetStateAction<string>>;
	setName1: React.Dispatch<React.SetStateAction<string>>;
	setName2: React.Dispatch<React.SetStateAction<string>>;
	one: boolean;
	two: boolean;
	three: boolean;
	four: boolean;
	five: boolean;
	check: boolean;

	name?: string;
	name1?: string;
	name2?: string;

	name3?: string;
	name4?: string;
	name5?: string;
	id?: string;
}

const url: string = "https://school-code.onrender.com";

const MyForm: React.FC<iProps> = ({
	toggle,
	title,
	subTitle,
	mainAction,
	mainActionAdmin,
	one,
	two,
	three,
	four,
	five,
	check,
	show,
	title1,
	title2,
	title3,
	title4,
	title5,
	title6,
	holder,
	holder1,
	holder2,
	holder3,
	holder4,
	holder5,

	setName,
	setName1,
	setName2,
	setName3,
	setName4,
	setName5,

	name,
	name1,
	name2,
	name3,
	name4,
	name5,
}) => {
	return (
		<Container>
			<Card>
				<Cont>
					<FirstHold>
						<Text>{title}</Text>
						<Cancel onClick={toggle}>
							<MdOutlineClose />
						</Cancel>
					</FirstHold>

					<span>{subTitle}</span>
					<br />
					<br />
					<Holden></Holden>
					<InpHold>
						<Title>{title1}:</Title>
						<Input
							placeholder={`${holder}`}
							onChange={(e) => {
								setName(e.target.value);
							}}
							required
						/>
						<br />
						{one ? (
							<>
								<Title>{title2}:</Title>
								<Input
									placeholder={`${holder1}`}
									onChange={(e) => {
										setName1(e.target.value);
									}}
									required
								/>
							</>
						) : null}
						<br />
						{two ? (
							<>
								<Title>{title3}:</Title>
								<Input
									placeholder={`${holder2}`}
									onChange={(e) => {
										setName2(e.target.value);
									}}
									required
								/>
							</>
						) : null}{" "}
						<br />
						{three ? (
							<>
								<Title>{title4}:</Title>
								<Input
									placeholder={`${holder3}`}
									onChange={(e) => {
										setName3(e.target.value);
									}}
									required
								/>
							</>
						) : null}{" "}
						<br />
						{four ? (
							<>
								<Title>{title5}:</Title>
								<Input
									placeholder={`${holder4}`}
									onChange={(e) => {
										setName4(e.target.value);
									}}
									required
								/>
							</>
						) : null}{" "}
						<br />
						{five ? (
							<>
								<Title>{title6}:</Title>
								<Input
									placeholder={`${holder5}`}
									onChange={(e) => {
										setName5(e.target.value);
									}}
									required
								/>
							</>
						) : null}
					</InpHold>
					{check ? (
						<ButtonHold>
							{name !== "" ? (
								<Button2
									onClick={mainAction}
									style={{ backgroundColor: "#1da1f2", color: "white" }}>
									{show ? <>Loading...</> : <>Create Class Room</>}
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
					) : (
						<ButtonHold>
							{name !== "" ? (
								<Button2
									onClick={(id) => {
										mainActionAdmin!(id);
									}}
									style={{ backgroundColor: "#1da1f2", color: "white" }}>
									{show ? <>Loading...</> : <>Create Class Room</>}
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
					)}
				</Cont>
			</Card>
		</Container>
	);
};

export default MyForm;

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
	width: 150px;
	background-color: #dcdada;
	/* color: #1da1f2; */
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	font-size: 13px;
	font-family: Poppins;
	text-transform: uppercase;

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

const Input = styled.input`
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
	::placeholder {
		font-family: Poppins;
	}
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

	margin-bottom: 5px;
`;
const Text = styled.div`
	font-weight: bold;
	text-transform: uppercase;
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
	position: absolute;
	min-height: 300px;
	width: 500px;
	background-color: white;
	margin-top: 50px;
	border-radius: 5px;
	transition: all 350ms;
	display: flex;
	justify-content: center;
	z-index: 20;
	padding-bottom: 30px;

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
	left: 0;
	top: 0;
	//   padding-top: 100px;
`;
