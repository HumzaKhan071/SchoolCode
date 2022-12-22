import React from "react";

import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Loading from "../Loading";
import Swal from "sweetalert2";
import { User } from "../../Global/RecoilState";
import { useRecoilState } from "recoil";

interface iData {
	schoolName: string;
	email: string;
	password: string;
	confirm: string;
}
const TeacherLogin = () => {
	const [userData, setUserData] = useRecoilState(User);
	const Navigate = useNavigate();
	const schema = yup.object().shape({
		email: yup.string().email().required("This field has to be filled"),
		password: yup.string().required("This field has to be filled"),
	});

	const [loading, setLoading] = React.useState(false);

	const {
		handleSubmit,
		formState: { errors },
		register,
		reset,
	} = useForm<iData>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<iData> = async (data) => {
		setLoading(true);

		await axios
			.post("https://school-code.onrender.com/api/teacher/login", data)
			.then((res) => {
				setLoading(false);
				console.log(res);
				setUserData(res.data.data);

				Navigate("/admin-dashboard");
			})
			.catch((err) => {
				Swal.fire({
					title: "Error Occured",
					text: `${err.response?.data?.message}`,
					icon: "error",
					showConfirmButton: false,
					timer: 3500,
				}).then(() => {
					setLoading(false);
				});
			});
	};
	return (
		<Container>
			{loading ? <Loading /> : null}
			<First>
				<Logo>
					<img src='/Img/kod.png' alt='' />
				</Logo>

				<HeadHold>
					<Cont onSubmit={handleSubmit(onSubmit)}>
						<Head>Welcome Back to SchoolKod</Head>

						<p> Sign in your Teacher account </p>

						<InputHold>
							<Input {...register("email")} placeholder='Enter Email' />
							<Error>{errors.email && "Email is required"}</Error>
							<Input {...register("password")} placeholder='Enter password' />
							<Error>{errors.password && "password is required"}</Error>
							{/* <Input placeholder='Enter your name' /> */}
						</InputHold>

						<ButHold type='submit'>
							<Button>Log In Now</Button>
						</ButHold>
						<span>
							Don't have an account?{" "}
							<Link style={{ textDecoration: "none" }} to='/get-started'>
								<span style={{ color: "#1A75FC", cursor: "pointer" }}>
									Create account
								</span>
							</Link>
						</span>
					</Cont>
				</HeadHold>
			</First>

			<Second>
				<Wrapper>
					<Text>
						From the School Admin, Teachers, Students down to the Parents
						schoolcode is here to provide learning facilitated by technology
						that gives students some element of control over time, place, path
						and/or pace.
					</Text>

					<p>~ Luciana C.</p>

					<ImageHold>
						<Image src='/Img/SckoolCodMain.png' />
					</ImageHold>
				</Wrapper>
			</Second>
		</Container>
	);
};

export default TeacherLogin;

const Error = styled.div`
	font-size: 10px;
	color: red;
`;

const HeadHold = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

const ButHold = styled.button`
	border: none;
	background-color: transparent;
	/* padding-left: 30px; */
`;

const Button = styled.div`
	padding: 15px 40px;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	/* width: 200px; */
	/* height: 50px; */
	color: white;
	border-radius: 30px;
	cursor: pointer;
	transition: all 350ms;

	:hover {
		transform: scale(0.98);
	}
`;

const InputHold = styled.div`
	display: flex;
	align-items: flex-start;
	/* padding-left: 30px; */
	flex-direction: column;
	margin-top: 10px;
	width: 100%;
`;
const Input = styled.input`
	border: none;
	border-bottom: 1px solid silver;
	outline: none;
	padding-bottom: 5px;
	width: 100%;
	height: 30px;
	margin-bottom: 10px;

	@media screen and (max-width: 500px) {
		width: 90%;
	}
`;

const Head = styled.div`
	font-size: 22px;
	font-weight: 700;
	text-align: left;
	/* padding-left: 30px; */
`;

const Cont = styled.form`
	display: flex;
	justify-content: center;
	/* background-color: red; */
	/* align-items: center; */
	flex-direction: column;
	text-align: left;

	height: 100%;
	text-align: center;
	width: 60%;
	/* background-color: red; */
	p {
		width: 100%;
		margin: 0;
		margin-top: 5px;
		padding-bottom: 20px;
		text-align: left;
		/* padding-left: 30px; */
	}

	@media screen and (max-width: 960px) {
		width: 90%;
	}
`;

const Logo = styled.div`
	margin-top: 20px;
	margin-left: 20px;

	img {
		width: 100px;
	}
`;

const ImageHold = styled.div`
	flex: 1;
	/* background-color: black; */
	height: 100%;
	width: 100%;
`;
const Image = styled.img`
	object-fit: cover;
	height: 100%;
	border: 3px solid gray;
	border-top-left-radius: 20px;
	/* width: 100%; */
`;

const Text = styled.div`
	font-size: 20px;
	margin-top: 100px;
	font-weight: 600;
`;

const Wrapper = styled.div`
	width: 90%;
	height: 100%;
`;

const First = styled.div`
	width: 50%;
	/* text-align: left; */

	@media screen and (max-width: 960px) {
		width: 100%;
	}
`;
const Second = styled.div`
	height: 100%;
	width: 50%;
	background-color: #f9fafb;
	display: flex;

	flex-direction: column;
	justify-content: center;
	align-items: center;
	p {
		padding-bottom: 50px;
	}

	@media screen and (max-width: 960px) {
		display: none;
	}
`;
const Container = styled.div`
	display: flex;

	height: 100vh;
	overflow: hidden;

	@media screen and (max-width: 750px) {
		overflow: auto;
		overflow-x: hidden;
		/* height: 100%; */
	}
`;
