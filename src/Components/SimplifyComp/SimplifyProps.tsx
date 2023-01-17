import React from "react";
import styled from "styled-components";

import pic1 from "../image2/slid.webp";
import pic2 from "../image2/slid2.webp";
import pic3 from "../image2/slid3.webp";

const SimplifyProps = () => {
	return (
		<Holder>
			<First>
				<span>Fee Management</span>
				<h2>Keep track, reduce costs and eliminate administrative hassle.</h2>
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

export default SimplifyProps;

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
		color: #df494b;
	}

	h2 {
		margin-right: 10px;
	}
`;
const Second = styled.div`
	height: 400px;
	width: 600px;
	background-position: cover;
	background-size: contain;
	animation: 5s slider infinite;
	background-image: url(${pic1});
	background-repeat: no-repeat;

	@keyframes slider {
		25% {
			background-image: url(${pic1});
		}

		50% {
			background-image: url(${pic2});
		}
		75% {
			background-image: url(${pic3});
		}
		100% {
			background-image: url(${pic1});
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
	/* flex-wrap: wrap; */
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
