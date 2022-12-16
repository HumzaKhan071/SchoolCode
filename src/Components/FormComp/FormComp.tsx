import React from "react";
import styled from "styled-components";

const FormComp = () => {
	return (
		<Container>
			<Wrapper>
				<h1>
					Digitize your school in minutes
					<br /> with Teachmint’s integrated platform
				</h1>

				<Hold>
					<First>
						<InputHold>
							<MainHold>
								<span>Your Name</span>
								<br />
								<input required placeholder='Enter your name' />
							</MainHold>
							<MainHold>
								<span>Your School Name</span>
								<br />
								<input placeholder='eg.creek senior high school' />
							</MainHold>
						</InputHold>
						<InputHold>
							<MainHold>
								<span>Your Phone Number</span>
								<br />
								<input
									placeholder='090 0000 0000'
									pattern='^[0-9-+\s()]{6,16}'
									type='tel'
									required
								/>
							</MainHold>
							<MainHold>
								<span>Your Role</span>
								<br />
								<select required>
									<option id='select'>--select category--</option>
									<option>Student</option>
									<option>Pricipal</option>
									<option>Teacher</option>
									<option>Admin</option>
								</select>
							</MainHold>
						</InputHold>
						<InputHold>
							<MainHold>
								<span>Your Email</span>
								<br />
								<input
									type='email'
									required
									placeholder='Enter your email address'
								/>
							</MainHold>
						</InputHold>

						<Button>Get Started</Button>
					</First>
					<Second>
						<Image src='/image/45.webp' />
					</Second>
				</Hold>
			</Wrapper>
		</Container>
	);
};

export default FormComp;

const Button = styled.button`
	height: 40px;
	padding: 25px 60px;
	background-color: #484fe1;
	color: white;
	border: none;
	outline: none;
	border-radius: 5px;
	transition: all 350ms;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	margin-bottom: 30px;

	:hover {
		transform: scale(0.95);
	}
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: contain;
`;

const Hold = styled.div`
	display: flex;
	justify-content: space-between;
`;
const First = styled.form`
	flex: 1;
`;
const InputHold = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	/* margin-bottom: 20px; */
	/* flex-wrap: wrap; */

	input {
		width: 300px;
		margin-right: 10px;
		height: 40px;
		border-radius: 5px;
		margin-bottom: 15px;
		border: none;
		outline: none;
		padding-left: 10px;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

		@media screen and (min-width: 330px) and (max-width: 500px) {
			width: 300px;
		}
		@media screen and (min-width: 400px) and (max-width: 500px) {
			width: 330px;
		}
		@media screen and (min-width: 500px) and (max-width: 960px) {
			width: 230px;
		}
		@media screen and (max-width: 320px) {
			width: 250px;
		}
	}
	select {
		width: 305px;
		margin-right: 10px;
		height: 40px;
		border-radius: 5px;
		border: none;
		margin-bottom: 15px;
		outline: none;
		/* padding-left: 10px; */
		box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

		@media screen and (min-width: 330px) and (max-width: 500px) {
			width: 310px;
		}
		@media screen and (min-width: 400px) and (max-width: 500px) {
			width: 340px;
		}
		@media screen and (min-width: 500px) and (max-width: 960px) {
			width: 230px;
		}
		@media screen and (max-width: 320px) {
			width: 260px;
		}
	}

	@media screen and (max-width: 500px) {
		flex-wrap: wrap;
	}
`;
const MainHold = styled.div`
	display: block;

	#select {
		display: none;
	}
`;
const Second = styled.div`
	height: 350px;
	width: 500px;

	@media screen and (max-width: 960px) {
		display: none;
	}
	/* background-color: red; */
`;

const Wrapper = styled.div`
	/* height: 500px; */
	width: 80%;
	background-color: #eaf7ff;
	border-radius: 5px;
	padding: 20px;

	h1 {
		@media screen and (max-width: 500px) {
			font-size: 20px;

			br {
				display: none;
			}
		}
	}
`;

const Container = styled.div`
	width: 100%;
	margin-top: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 100px;
`;
