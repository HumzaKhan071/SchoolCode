import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { User } from "../../../Global/RecoilState";

const url: string = "https://school-code.onrender.com";

interface Iprops {
	notice: any;
}
const PieChart: React.FC<Iprops> = ({ notice }) => {
	useEffect(() => {}, [notice]);

	return (
		<div>
			<BoardHold>
				<NoticeHold>
					{notice?.length >= 1 ? (
						<div>
							{notice?.map((props: any, i: any) => (
								<div key={i}>
									{i <= 1 ? (
										<div>
											{" "}
											<NoticeData key={props.id}>
												<Div>{props.title}</Div>
												<NoticeMessage> {props.detail} </NoticeMessage>
												<SenderDate>
													<small> {moment(props.createdAt).fromNow()} </small> /{" "}
												</SenderDate>
											</NoticeData>
										</div>
									) : null}
								</div>
							))}
						</div>
					) : (
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
							No notice found
						</div>
					)}
				</NoticeHold>
			</BoardHold>
		</div>
	);
};

export default PieChart;

const Div = styled.div`
	height: 30px;
	//   width: 120px;
	padding: 0 10px;
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

const Container = styled.div`
	//   wifth: 100%;
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
	//   width: 95%;
	display: flex;
	justify-content: center;
`;

const BoardCard = styled.div`
	width: 95%;
	background-color: #fff;
	margin-top: 30px;
`;
const BoardHold = styled.div`
	padding: 30px;
`;
const Title = styled.div`
	font-weight: bold;
	margin-bottom: 10px;
`;
const Serarch = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 20px 0;
	align-items: flex-end;

	button {
		height: 40px;
		width: 120px;
		font-family: poppins;
		background-color: #1da1f2;
		color: #fff;
		border-radius: 3px;
		font-size: 15px;
		font-weight: 600;
		cursor: pointer;
		margin-right: 10px;
		border: none;
		@media (max-width: 500px) {
			height: 40px;
			/* width: 100%; */
			font-size: 12px;
			/* margin-left: 10px; */
			margin-right: 10px;
		}
	}
`;

const Inputt = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 20px;
	input {
		height: 40px;
		width: 200px;
		font-family: poppins;
		border: 1px solid #dddddd;
		color: #6d6d6e;
		border-radius: 3px;
		font-size: 14px;
		font-weight: 600;
		cursor: pointer;
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
const NoticeHold = styled.div``;
const NoticeData = styled.div`
	border-bottom: 1px solid lightgray;
	margin-bottom: 10px;
`;
const NoticeDate = styled.div`
	height: 30px;
	width: 120px;
	/* background-color: #40dfcd; */
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
`;
const SenderDate = styled.div`
	font-size: 11px;
	margin-bottom: 20px;
`;
