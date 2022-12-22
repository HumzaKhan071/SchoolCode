import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainAuth = () => {
	return (
		<Container>
			<First>
				<Logo>
					<img src='/Img/kod.png' alt='' />
				</Logo>

				<Cont>
					<Head>Sign Up to SchoolKod</Head>

					<p>Sign up now and create a free account</p>

					<Holded>
						<Card to='/get-started/school-signup'>
							<Hol>
								<Images>
									<Img1 bg='#71A0F0' src='/Img/o.png' />
								</Images>

								<TitleHold>
									<Title>Sign up as a School</Title>
									<span>I'm a school school admin</span>
								</TitleHold>
							</Hol>
						</Card>

						<Card to='/get-started/teacher-signup'>
							<Hol>
								<Images>
									<Img1 bg='#FFF2E4' src='/Img/ooo.png' />
								</Images>

								<TitleHold>
									<Title>Sign up as a Teacher</Title>
									<span>I'm a Teacher in a School </span>
								</TitleHold>
							</Hol>
						</Card>
						{/* <Card to='/get-started/student-signup'>
							<Hol>
								<Images>
									<Img1 bg='#D38FFC' src='/Img/oo.png' />
								</Images>

								<TitleHold>
									<Title>Sign up as a Student/Parent</Title>
									<span>I'm a student in a school. </span>
								</TitleHold>
							</Hol>
						</Card> */}
						<span>
							Already have an account?{" "}
							<Link style={{ textDecoration: "none" }} to='/login'>
								<span style={{ color: "#1A75FC", cursor: "pointer" }}>
									Login
								</span>
							</Link>
						</span>
					</Holded>
				</Cont>
			</First>

			<Second>
				<Wrapper>
					<Text>
						From the School Admin, Teachers, Students down to the Parents
						schoolcode is here to provide learning facilitated by technology
						that gives students some element of control over time, place, path
						and/or pace
					</Text>

					<p>~ Gideon Ekeke</p>

					<ImageHold>
						<Image src='/image/slid4.png' />
					</ImageHold>
				</Wrapper>
			</Second>
		</Container>
	);
};

export default MainAuth;

const Hol = styled.div`
	display: flex;
	align-items: center;
`;
const Img1 = styled.img<{ bg: string }>`
	height: 40px;
	width: 40px;
	background-color: ${(props) => props.bg};
	border-radius: 50%;
	object-fit: contain;
`;

const Holded = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	span {
		font-size: 14px;
		margin: 0;
		color: gray;
	}
`;
const Images = styled.div`
	display: flex;
	margin-left: 20px;
	margin-right: 15px;
`;
const Card = styled(Link)`
	width: 80%;
	box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 0px 1px;
	/* border: 1px solid silver; */
	margin-bottom: 20px;
	height: 60px;
	display: flex;
	align-items: center;
	cursor: pointer;
	justify-content: space-between;
	text-align: left;
	border-radius: 5px;
	transition: all 350ms;
	text-decoration: none;
	:hover {
		box-shadow: rgba(0, 0, 0, 0.89) 0px 0px 0px 1px;
	}
	@media screen and (max-width: 960px) {
		width: 90%;
	}

	input {
		margin-right: 20px;
	}
`;
const TitleHold = styled.div``;
const Title = styled.div`
	font-weight: 600;
	color: black;
`;

const Head = styled.div`
	font-size: 22px;
	font-weight: 700;
`;

const Cont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	height: 100%;
	text-align: center;

	p {
		width: 90%;
		margin: 0;
		margin-top: 5px;
		padding-bottom: 20px;
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
	/* justify-content: center; */
	/* align-items: center; */
	height: 100vh;
	overflow: hidden;
`;
