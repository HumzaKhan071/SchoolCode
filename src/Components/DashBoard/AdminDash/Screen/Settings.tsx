import React, { useEffect, useState } from "react";
import styled from "styled-components";
import pic2 from "../../../Img/prof.png";
import { BiPencil } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useRecoilValue, useRecoilState } from "recoil";
import { User } from "../../../Global/RecoilState";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../../Auth/Loading";

const url: string = "https://school-code.onrender.com";

const Settings: React.FC = () => {
	const navigate = useNavigate();

	const user = useRecoilValue(User);
	const [userState, setUserState] = useRecoilState(User);

	const [image, setImage] = useState(pic2);
	const [logo, setLogo] = useState("");
	const [address, setAddress] = useState("");
	const [contact, setContact] = useState("");
	const [vision, setVision] = useState("");
	const [mission, setMission] = useState("");
	const [loading, setLoading] = useState(false);

	const [data, setData] = useState({} as any);

	const fetchData = async () => {
		const newURL = `${url}/api/school/${user?._id}`;
		await axios.get(newURL).then((res) => {
			setData(res.data.data);
			console.log(res.data.data);
		});
	};

	const uploadImage = async (e: any) => {
		const file = e.target.files[0];
		const save = URL.createObjectURL(file);
		setImage(save);
		setLogo(file);
		console.log(file);
		console.log(save);
	};

	const uploadLogo = async () => {
		const newURL = `${url}/api/school/${user?._id}`;
		const formData = new FormData();
		formData.append("image", logo);

		const config = {
			"Content-Type": "multipart/form-data",
		};
		await axios
			.patch(newURL, formData)
			.then(() => {
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Your profile info has been updated",
					showConfirmButton: false,
					timer: 2500,
				}).then(() => {
					//   navigate("/");
				});
				setLoading(false);
			})
			.catch((error) => {
				Swal.fire({
					title: "An Error occure",
					text: "Please check and fix this ERROR",
					icon: "error",
					showConfirmButton: false,
					timer: 3500,
				}).then(() => {
					setLoading(false);
				});
			});
	};

	const uploadInfo = async () => {
		const newURL = `${url}/api/school/${user?._id}`;

		setLoading(true);
		await axios
			.patch(newURL, { address, contact, vision, mission })
			.then(() => {
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Your profile info has been updated",
					showConfirmButton: false,
					timer: 2500,
				}).then(() => {
					//   navigate("/");
				});
				setLoading(false);
			})
			.catch((error) => {
				Swal.fire({
					title: "An Error occure",
					text: "Please check and fix this ERROR",
					icon: "error",
					showConfirmButton: false,
					timer: 3500,
				}).then(() => {
					setLoading(false);
				});
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			{/* <Loading /> */}
			<Container>
				{loading ? <Loading /> : null}
				<Holder>
					<Hols>
						<Hold>
							<h3>Settings</h3>
							<Span>Dashboard / Settings</Span>
						</Hold>
					</Hols>
					<BoxHold>
						<MyHead>PERSONAL DATA</MyHead>
						<First>
							<Title>School's Logo</Title>
							<AvatarHold>
								<UserAvatar src={data?.logo ? data?.logo : image} />
								<MyInput id='pix' type='file' onChange={uploadImage} />
								<But htmlFor='pix'>
									<BiPencil />
								</But>
							</AvatarHold>
							<div
								style={{
									display: "flex",
									flexDirection: "row-reverse",
									width: "90%",
								}}>
								<Button
									style={{
										backgroundColor: "#1DA1F2",
									}}
									onClick={uploadLogo}>
									Save Logo
								</Button>
							</div>
						</First>

						<First>
							<Title>School's Name</Title>
							<MainInp
								placeholder="Enter the school's Address"
								type='text'
								defaultValue={data?.schoolName}
								disabled
							/>
						</First>
						<First>
							<Title>School's Email</Title>
							<MainInp
								placeholder="Enter the school's Address"
								type='text'
								defaultValue={data?.email}
								disabled
							/>
						</First>
						<First>
							<Title>School's Address</Title>
							<MainInp
								placeholder="Enter the school's Address"
								type='text'
								defaultValue={data?.address}
								value={address}
								onChange={(e: any) => {
									setAddress(e.target.value);
								}}
							/>
						</First>
						<First>
							<Title>School's Contact</Title>
							<MainInp
								placeholder="Enter the school's Contact number"
								type='text'
								defaultValue={data.contact}
								value={contact}
								onChange={(e: any) => {
									setContact(e.target.value);
								}}
							/>
						</First>
						<First>
							<Title>School's Mission</Title>
							<MainInp
								placeholder="Enter the school's Mission"
								type='text'
								defaultValue={data.mission}
								value={mission}
								onChange={(e: any) => {
									setMission(e.target.value);
								}}
							/>
						</First>
						<First>
							<Title>School's Vision</Title>
							<MainInp
								placeholder="Enter the school's Vision"
								type='text'
								defaultValue={data.vision}
								value={vision}
								onChange={(e: any) => {
									setVision(e.target.value);
								}}
							/>
						</First>

						<div
							style={{
								display: "flex",
								flexDirection: "row-reverse",
								width: "90%",
							}}>
							<Button
								style={{
									backgroundColor: "#1DA1F2",
								}}
								onClick={uploadInfo}>
								Save info
							</Button>
						</div>
					</BoxHold>
					<BoxHold>
						<MyHead>
							CHANGE YOUR PASSWORD{" "}
							<BsFillInfoCircleFill
								style={{
									marginLeft: "10px",
								}}
							/>
						</MyHead>

						<First>
							<Title>CurrentPassword</Title>
							<MainInp placeholder='Enter your formal password' type='text' />
						</First>
						<First>
							<Title>New Password</Title>
							<MainInp placeholder='Enter your new password' type='text' />
						</First>
						<First>
							<Title>Confirm Password</Title>
							<MainInp placeholder='re-enter your new password' type='text' />
						</First>
						<div
							style={{
								display: "flex",
								flexDirection: "row-reverse",
								width: "90%",
							}}>
							<Button
								style={{
									backgroundColor: "#1DA1F2",
								}}>
								Save password
							</Button>
						</div>
					</BoxHold>

					<DivHold>
						<ButHold>
							<Button
								onClick={() => {
									setUserState(null);
									navigate("/");
								}}>
								Log Out
							</Button>
						</ButHold>
					</DivHold>
				</Holder>
			</Container>
		</>
	);
};

export default Settings;

const ButHold = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 98%;
	padding-left: 10px;
`;

const MyHead = styled.div`
	height: 40px;
	width: 98%;
	background-color: #f8f8fa;
	color: black;
	padding-left: 20px;
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	font-weight: 500;
`;

const MainInp = styled.input`
	width: 98%;
	border: none;
	outline: none;
	height: 25px;
	border-bottom: 1px solid #f1f1f1;

	::placeholder {
		font-family: Poppins;
	}
`;

const MyInput = styled.input`
	display: none;
`;
const First = styled.div`
	padding-bottom: 20px;
`;
const Title = styled.div`
	padding-bottom: 5px;
	font-weight: 600;
`;
const AvatarHold = styled.div`
	position: relative;
	/* display: flex;
	width: 10%; */
`;
const But = styled.label`
	position: absolute;
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background-color: #4e4e4e;
	display: flex;
	justify-content: center;
	align-items: center;
	/* top: 50px;
	right: -10px; */
	top: 50px;
	left: 75px;
	color: white;
	cursor: pointer;
`;
const UserAvatar = styled.img`
	height: 100px;
	width: 100px;
	border-radius: 50%;
	object-fit: cover;
`;

const DivHold = styled.div`
	/* position: absolute; */
	box-shadow: rgba(90, 90, 90, 0.1) 0px 4px 10px;
	width: 100%;
	background-color: white;
	/* top: 0; */
	/* bottom: 0; */
	display: flex;
	justify-content: flex-start;
	/* position: fixed; */
	/* padding-left: 20px; */
	/* padding-top: 20px; */
	height: 70px;
`;

const Main = styled.div`
	position: fixed;
`;

const Span = styled.div`
	font-size: 13px;
`;

const BoxHold = styled.div`
	/* min-height: 90vh; */
	width: 98%;
	background-color: white;
	border-radius: 5px;
	display: flex;
	flex-wrap: wrap;
	box-shadow: rgba(90, 90, 90, 0.1) 0px 4px 10px;
	/* justify-content: center; */
	padding: 10px;
	flex-direction: column;
	padding-left: 20px;
	margin-bottom: 20px;

	/* align-items: center; */
`;

const Hols = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
const Button = styled.div`
	height: 40px;
	width: 150px;
	background-color: #4a148c;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	cursor: pointer;
	padding: 0 10px;
	transition: all 350ms;

	:hover {
		transform: scale(0.97);
	}

	@media screen and (max-width: 760px) {
		width: 100px;
		font-size: 13px;
	}
`;

const Hold = styled.div`
	margin: 10px 0px;
`;
const Header = styled.div`
	width: 90%;
	max-width: 1500px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-left: 10px;
`;

const Holder = styled.div`
	width: 95%;
	height: 100%;
	display: flex;
	margin-top: 20px;
	flex-direction: column;
	/* align-items: center; */
	/* justify-content: space-between; */

	/* background-color: red; */
`;

const Container = styled.div`
	/* width: 100%; */
	width: calc(100vw - 230px);
	min-height: calc(100vh - 60px);
	display: flex;
	justify-content: center;
	margin-top: 80px;
	position: relative;
	/* flex-direction: column; */

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

	@media screen and (max-width: 960px) {
		margin-top: 0;
	}
`;
