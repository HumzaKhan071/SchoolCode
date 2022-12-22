import React from "react";
import styled from "styled-components";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Container>
			<Wrapper>
				<Logo>
					<img src='/Img/kod.png' alt='' />
				</Logo>
				<Button>
					<Link to='/login'>
						<button
							style={{
								backgroundColor: "transparent",
								border: "1px solid #4285f4",
								color: "#000",
							}}>
							Log In
						</button>
					</Link>
					<Link to='/get-started'>
						<button>Get Started</button>
					</Link>
				</Button>
				<Nav>
					<VscThreeBars size='25px' />
				</Nav>
			</Wrapper>
		</Container>
	);
};

export default Header;

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
	}
`;
const Button = styled.div`
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

const Nav = styled.div`
	display: none;
	@media (max-width: 800px) {
		display: block;
	}
`;
