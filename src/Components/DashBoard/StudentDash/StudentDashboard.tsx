import React from "react";
import { FaUserNinja } from "react-icons/fa";
import styled from "styled-components";

const StudentDashboard = () => {
	return <Container>
		<MyContent>
			<UserName>
			Welome Peter Brooks
			<span>Student/</span>
			</UserName>

			<DisPlayBoard>
				<DisPlay>
					<One>
						<div>
							All Course
							<span>04/06</span>
						</div>
							
					</One>
					<Two>
						<BackTwo>
						<img src='/svg/teacher-icon-01.svg'/>
						</BackTwo>
						
					</Two>

				</DisPlay>
				<DisPlay>
				<One>
						<div>
							All Project
							<span>40/50</span>
						</div>
							
					</One>
					<Two>
						<BackTwo>
						<img src='/svg/teacher-icon-02.svg'/>
						</BackTwo>
					</Two>
				</DisPlay>
				<DisPlay>
				<One>
						<div>
							Tested Attented
							<span>10/30</span>
						</div>
							
					</One>
					<Two>
						<BackTwo>
						<img src='/svg/student-icon-01.svg'/>
						</BackTwo>
						
					</Two>

				</DisPlay>
				<DisPlay>
				<One>
						<div>
							Test Passed
							<span>08/13</span>
						</div>
							
					</One>
					<Two>
						<BackTwo>
						<img src='/svg/student-icon-02.svg'/>
						</BackTwo>
					</Two>

				</DisPlay>

			</DisPlayBoard>

			<MainDisplay>
				<FirstPart>
					<TodadyLesson>
						<TodayClass>
							<div><span>Today Lesson</span></div>
							
							<Circle>
							</Circle>
						</TodayClass>

						<DetailsClass>

						</DetailsClass>

						<ViewAll>

						</ViewAll>
						
					</TodadyLesson>

					<History>
						2
					</History>
					

				</FirstPart>

				<SecondPart>
					<ShowBox>
						<DateBox>

						</DateBox>

						<UpcomingEvent>

						</UpcomingEvent>

					</ShowBox>

				</SecondPart>

			</MainDisplay>

		</MyContent>

	</Container>;
};

export default StudentDashboard;

const Circle = styled.div`
width:100%;
height:150px;

`

const TodayClass = styled.div`
width:190px;
height:240px;
display: flex;
flex-direction: column;

div{
    
	margin-top:20px;
	span{
		margin-left:20px;
		font-size:20px;
		font-weight:600;
		text-align:center;
		
		
	}
}



@media screen and (max-width:600px){
	width:100%;
}

`
const DetailsClass = styled.div`
width:320px;
height:230px;


@media screen and (max-width:600px){
	width:100%;
}
`
const ViewAll = styled.div`
width:200px;
height:230px;


@media screen and (max-width:600px){
   width:100%
}
`

const TodadyLesson = styled.div`
width:720px;
height:230px;
background-color:white;
border-radius: 5px;
display: flex;
flex-wrap: wrap;

@media screen and (max-width: 600px) {
	width:100%;
	height:auto;
	flex-wrap:wrap;

}
`
const History = styled.div`
width:720px;
height:250px;
background-color:white;
border-radius: 5px;
margin-top:30px;


@media screen and (max-width: 600px) {
	width:100%;
}

`

const UpcomingEvent = styled.div`
width:310px;
height:190px;
background-color:white;

@media screen and (max-width: 600px) {
	

	width:100%;
}
`

const DateBox = styled.div`
 width:310px;
 height:320px;
 background-color:white;

 @media screen and (max-width: 600px) {
	

	width:100%;
}
`

const  ShowBox = styled.div
`
width:320px;
display: flex;
flex-direction: column;
align-items: flex-end;
border-radius:5px;


@media screen and (max-width: 600px) {
	align-items:center;
    display: flex;
	flex-direction: column;
	width:100%;
}

`

const FirstPart = styled.div`
flex: 1;
display: flex;
flex-direction: column;
height:auto;


@media screen and (max-width: 768px) {
	margin-top: 30px;
	height:auto;
}

span {
	font-weight: 500;
}
`
const SecondPart = styled.div`
span {
	font-weight: 500;
}
`

const MainDisplay = styled.div`

display: flex;
margin-top: 30px;
width: 97%;




@media screen and (max-width: 768px) {
	flex-wrap: wrap;
	flex-direction: column;
	height:auto;
	margin-left: 0;
}

`

const  BackTwo = styled.div`
padding:3px;
border-radius:4px;
background-color:#EDF4FF;
padding-bottom:1px;
`
 
const One = styled.div`
height:80px;
width:140px;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;


div{
	display: flex;
    flex-direction: column;
	width:120px;
	color: grey;
	font-size:15px;
   
	span{
		font-size:20px;
		font-weight:700;
		color: black;
		margin-top:5px;

	}

}


`
const Two = styled.div`
height:80px;
width:100px;
display: flex;
justify-content: center;
align-items: center;

`

const DisPlay = styled.div`
height:110px;
 width:330px;
 display: flex;
 margin-right: 30px;
 margin-bottom: 30px;
 overflow: hidden;
 border-radius:5px;
background-color:#ffffff;
 align-items: center;
 

 @media screen and (max-width: 600px) {
	width: 100%;
	margin-right: 0px;
	margin-bottom: 10px;
	display:flex;
	justify-content: space-between;
}

`

const DisPlayBoard  = styled.div`
height:110px;


display: flex;
margin-top:30px;
justify-content:center;
align-items: center;

	@media screen and (max-width: 1030px) {
		flex-wrap: wrap;
		height: auto;
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
	padding-top: 40px;

	background-color: #F7F9FC;
	/* background-color: gold; */
	overflow: hidden;
	position: absolute;
	right: 0px;
	// top: 50px;

	@media screen and (max-width: 1100px) {
		width: 95%;
		height:auto;
	}
	@media screen and (max-width: 1005px) {
		width: 100%;
		height:auto;
	}

	/* background-color: #352b1e; */
`;
