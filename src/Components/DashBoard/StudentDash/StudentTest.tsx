import React from 'react'
import styled from "styled-components"
import ExamCard from './ExamCard'
import {TestData} from "./TestData"

const StudentTest = () => {
  return (
    <Container>
		<MyContent>
			<UserName>
			Mock Test 
			<span>Student&nbsp;/&nbsp;test</span>
			</UserName>
			<Mysubject>
				{
					TestData.map((item, index) => (
						<ExamCard data= {item} />
					))

				}
				
			</Mysubject>
		</MyContent>
	</Container>
  )
}

export default StudentTest


const Mysubject = styled.div`
width:100%;
min-height:500px;
height:100%;
display:flex;
justify-content:center;
flex-wrap:wrap;


@media screen and (min-width:600px){
	width:100%;
	height:auto;
}
`


const UserName = styled.div`
height:50px;
width:100%;
display: flex;
flex-direction: column;
color:#2C323F;
font-weight:800px;
font-size:20px;

span {
	font-size:15px;
	font-weight:500px;
}

`

const MyContent  = styled.div`
width:95%;
margin-top: 30px;
display:flex;
flex-direction: column;
`


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