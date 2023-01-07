import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { User } from "../../../../Global/RecoilState";
import AttendanceTable from "./AttendanceTable";

const Attendance = () => {
	const URL: string = "https://school-code.onrender.com";

	const user = useRecoilValue(User);
	const [getClasses, setGetClasses] = useState([]);

	const [load, setLoad] = useState(true);

	const getSub = async () => {
		const uuri = `${URL}/api/teacher/${user._id}/get-classes`;

		await axios.get(uuri).then((res) => {
			setGetClasses(res?.data?.data?.myClass);
			console.log("this is fodfg", res);
			// setTeacherInfo(res.data.data);
			setLoad(false);
		});
	};

	useEffect(() => {
		getSub();
	}, []);
	return (
		<Container>
			<Wrapper>
				{load ? (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "100%",
						}}>
						Fetching Data...
					</div>
				) : null}

				{getClasses?.map((myProps: any) => (
					<>
						<AttendMarker>
							<MarkerHold>
								<Title>{myProps?.className} Class Attendance</Title>
								<span>
									Total No. of Students : {myProps?.students?.length}{" "}
								</span>
								<div>
									Present : <input checked type='radio' />{" "}
								</div>
								<div>
									Absent : <input disabled type='radio' />{" "}
								</div>
							</MarkerHold>
						</AttendMarker>
						<AttendanceTable myProps={myProps} />
					</>
				))}
			</Wrapper>
		</Container>
	);
};

export default Attendance;

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
const AttendMarker = styled.div`
	/* height: 160px; */
	width: 100%;
	background-color: #fff;
	margin: 20px 0;

	@media (max-width: 500px) {
		height: 300px;
	}
`;
const MarkerHold = styled.div`
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
	display: flex;
	flex-direction: column;
	margin-right: 20px;
	select {
		height: 40px;
		width: 200px;
		font-family: poppins;
		border: 1px solid #dddddd;
		color: #6d6d6e;
		border-radius: 3px;
		font-size: 15px;
		font-weight: 600;
		cursor: pointer;
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
	}
`;
