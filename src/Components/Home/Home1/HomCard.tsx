import React from "react";
import styled from "styled-components";
import pic from "../../Img/grr.jpg";

const HomCard = () => {
	return (
		<Card>
			<img src={pic} alt='' />
		</Card>
	);
};

export default HomCard;

const Card = styled.div`
	height: 300px;
	width: 300px;
	border-radius: 3px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	img {
		width: 93%;
		height: 93%;
		object-fit: cover;
		border-radius: 3px;
	}
`;
