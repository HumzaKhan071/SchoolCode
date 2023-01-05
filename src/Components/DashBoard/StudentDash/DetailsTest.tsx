import React from 'react'
import styled from "styled-components"
import { useParams } from "react-router-dom";

const DetailsTest = () => {
    const { id } = useParams();
  return (
    <Container>{id}</Container>
  )
}

export default DetailsTest


const Container = styled.div`
	/* width: 100%; */
	width: calc(100vw - 230px);
	min-height: calc(100vh - 60px);
	display: flex;
	justify-content: center;
	padding-bottom: 80px;
	padding-top: 70px;

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