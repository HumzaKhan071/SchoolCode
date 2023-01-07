import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GoCheck } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { BsCheckLg } from "react-icons/bs";
import moment from "moment";
import { useRecoilValue } from "recoil";
import { User } from "../../../../Global/RecoilState";
import axios from "axios";
import DetailsTest from "../../../StudentDash/DetailsTest";
import DetailAttend from "./DetailAttend";

interface Iprops {
	myProps: any;
}

const AttendanceTable: React.FC<Iprops> = ({ myProps }) => {
	const URL: string = "https://school-code.onrender.com";

	interface iTeacher {
		_id: string;
		name: string;
	}
	const user = useRecoilValue(User);

	interface iSubject {
		_id: string;
		className: string;
		subjectToken: string;
		subjectName: string;
		students: [];
		test: [];
		lecture: [];
	}
	let todayDate = moment().add().format("dddd, Do MMMM YYYY");
	let days: any[] = [];
	let daysRequired = 90;

	for (let i = 0; i <= daysRequired; i++) {
		days.push(moment().add(i, "days").format("dddd, Do MMMM YYYY"));
	}

	const CreatePresent = async (id: any) => {
		console.log("id ooooo", id);
		const uuri = `${URL}/api/attendance/${user?._id}/${id}/present`;

		await axios.post(uuri).then((res) => {
			console.log("student present", res);
		});
	};

	return (
		<Container>
			<Wrapper>
				<Title>Attendence Sheet Of Class One: Section A, April 2019</Title>
				<Table>
					<table>
						<tr>
							<th>Students</th>
							{days.map((props) => (
								<th>{props}</th>
							))}
						</tr>
						{myProps?.students?.map((newProps: any) => (
							<tr>
								<DetailAttend props={newProps} />

								{days.map((props) => (
									<td>
										<input
											onClick={() => {
												CreatePresent(newProps);
											}}
											disabled={todayDate !== props}
											type='radio'
										/>{" "}
									</td>
								))}
							</tr>
						))}
					</table>
				</Table>
				{/* <Button
					style={{
						backgroundColor: "#123456",
					}}>
					Submit
				</Button> */}
			</Wrapper>
		</Container>
	);
};

export default AttendanceTable;
{
	/* <td>
								{" "}
								<BsCheckLg color='green' />{" "}
							</td> */
}

const Button = styled.button`
	height: 40px;
	width: 120px;
	margin-top: 15px;
	font-family: poppins;
	border: 1px solid #dddddd;
	/* color: #6d6d6e; */
	color: #fff;
	border-radius: 3px;
	font-size: 15px;
	font-weight: 600;
	background-color: transparent;
	cursor: pointer;
	margin-right: 10px;
	@media (max-width: 500px) {
		height: 40px;
		width: 100px;
		font-size: 12px;
		margin-left: 10px;
		margin-right: 10px;
	}
`;

const Container = styled.div`
	height: 100%;
	width: 100%;
	background-color: #fff;
`;
const Wrapper = styled.div`
	padding: 20px;
`;

const Title = styled.div`
	font-weight: bold;
	margin-bottom: 20px;
`;
const Table = styled.div`
	overflow-x: auto;
	font-size: 13px;
	table,
	th,
	td {
		border: 1px solid lightgray;
		border-collapse: collapse;
	}
	tr:nth-child(even) {
		background-color: #f2f2f2;
	}
	th,
	td {
		padding: 3px 10px;
	}

	th {
		font-size: 10px;
	}
`;
