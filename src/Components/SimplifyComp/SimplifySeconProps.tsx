import React from "react";
import styled from "styled-components";

const SimplifySeconProps = () => {
	return (
		<Holder>
			<First>
				<span>Student Information System</span>
				<h2>Manage student information, securely and efficiently</h2>
				<Text>Simplified fee management</Text>{" "}
				<Desc>
					Customize fee structures and provide discounts and
					<br /> offers with ease
				</Desc>
				<Text>Simplified fee management</Text>{" "}
				<Desc>
					Customize fee structures and provide discounts and
					<br /> offers with ease
				</Desc>
				<Button>Get Started</Button>
			</First>
			<Second></Second>
		</Holder>
	);
};

export default SimplifySeconProps;

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

const Desc = styled.div`
	color: gray;
	padding-bottom: 20px;

	border-bottom: 1px dotted silver;

	width: 90%;
	margin-bottom: 30px;

	@media screen and (max-width: 500px) {
		width: 100%;

		br {
			display: none;
		}
	}
`;
const Text = styled.div`
	padding-bottom: 5px;
`;

const First = styled.div`
	span {
		color: #484fe1;
	}
`;
const Second = styled.div`
	height: 400px;
	width: 600px;
	background-position: cover;
	background-size: contain;
	animation: 5s slider infinite;
	background-image: url("/image/slid.webp");
	background-repeat: no-repeat;

	@keyframes slider {
		25% {
			background-image: url("/image/slid.webp");
		}

		50% {
			background-image: url("/image/slid2.webp");
		}
		75% {
			background-image: url("/image/slid3.webp");
		}
		100% {
			background-image: url("/image/slid.webp");
		}
	}
	/* background-color: red; */

	@media screen and (max-width: 500px) {
		height: 200px;
	}
`;
const Holder = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row-reverse;

	/* flex-wrap: wrap; */

	justify-content: center;
	margin-top: 50px;

	@media screen and (max-width: 960px) {
		flex-wrap: wrap;
	}
`;
// const SlidImage = styled.img`
// 	height: 100%;
// 	width: 100%;
// 	object-fit: contain;

// 	@media screen and (max-width: 500px) {
// 		object-fit: cover;
// 	}
// `;
