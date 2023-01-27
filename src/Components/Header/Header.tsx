import React from "react";
import styled from "styled-components";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";
import log from '../image/phe.png'

const Header = () => {
	return (
		<Container>
			<Wrapper>
				<Logo>
					<img src={log} alt='' />
				</Logo>
				<ButHold>
					<Link style={{ textDecoration: "none" }} to='/login'>
						<Button1>
							<button
								style={{
									backgroundColor: "transparent",
									border: "1px solid #4285f4",
									color: "#000",
								}}>
								Log In
							</button>
						</Button1>
					</Link>
					<Link style={{ textDecoration: "none" }} to='/get-started'>
						<Button2>
							<button>Get Started</button>
						</Button2>{" "}
					</Link>
				</ButHold>
				{/* <Nav>
					<VscThreeBars size='25px' />
				</Nav> */}
			</Wrapper>
		</Container>
	);
};

export default Header;

const ButHold = styled.div`
	display: flex;
`;

const Container = styled.div`
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: skyblue; */
`;
const Wrapper = styled.div`
	width: 85%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Logo = styled.div`
	img {
		width: 150px;

		@media (max-width: 800px) {
			width: 100px;
		}
	}
`;
const Button1 = styled.div`
	button {
		height: 35px;
		width: 150px;
		background-color: #4285f4;
		color: #fff;
		font-family: Montserrat;
		font-size: 13px;
		font-weight: bold;
		border-radius: 5px;
		margin-left: 10px;
		outline: none;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: all 350ms;
		:hover {
			transform: scale(0.94);
		}
	}
	@media (max-width: 800px) {
		display: none;
	}
`;
const Button2 = styled.div`
	button {
		height: 35px;
		width: 150px;
		background-color: #4285f4;
		color: #fff;
		font-family: Montserrat;
		font-size: 13px;
		font-weight: bold;
		border-radius: 5px;
		margin-left: 10px;
		outline: none;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: all 350ms;
		:hover {
			transform: scale(0.94);
		}
	}
	@media (max-width: 800px) {
		/* display: none; */
	}
`;

const Nav = styled.div`
	display: none;
	@media (max-width: 800px) {
		display: block;
	}
`;
