import React from 'react'
import styled from "styled-components"
import { IoNewspaper } from 'react-icons/io5';
import ClipLoader from "react-spinners/ClipLoader";

function AssignmentScreen() {

	const dataLecture= []
	const [load, setLoad] = React.useState(false);

  return (
    <Container>
		<MyContent>
			<UserName>
			All  Lecture 
			<span>Student&nbsp;/&nbsp;test</span>
			</UserName>
			<Mysubject>

				{
					dataLecture?.length >= 1 ? (
					<>
					<Card>
					<First>
						<Iconmy cl="#0FBBFE"/>
					</First>
					<Second>
						<LectureName>
							<span>Biology</span>
							<pre>
							...	
							</pre>
						</LectureName>
						<Content>
						Let’s start with a quick tour of Vue’s data binding features.
						</Content>

						<TeacherDetails>
							<div>Teacher </div>
							&nbsp;
							<pre>Peter Obi</pre>
						</TeacherDetails>
						<TeacherMeter>
						</TeacherMeter>

						<LectureButton>
							<MyButton>View Lecture</MyButton>
						</LectureButton>

					</Second>

				</Card>
					</>
					) :(
					<>
					<BoxHold1>
							{load ? (
								<div>
									<div>
										<ClipLoader color='#36d7b7' />
									</div>
									<div> Fetching data...</div>
								</div>
							) : (
								<>
									<BoxImag src='/img/emp.gif' />
									<h3>Lecture Not Available</h3>
									<p>
										Your institute has no lecture  yet. Added lecture will
										appear here.
									</p>
								</>
							)}
						</BoxHold1>
					</>
					)
				}
				
				
				
				
				
				
			</Mysubject>
		</MyContent>
	</Container>
  )
}

export default AssignmentScreen

const BoxImag = styled.img`
  height: 200px;
`;

const BoxHold1 = styled.div`
  min-height: 70vh;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  display: flex;

  justify-content: center;
  max-height: 70vh;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    margin: 0;
  }

  /* align-items: center; */
`;


const LectureButton = styled.div`
width:370px;
height:30px;
margin-top:5px;
@media screen and (max-width:600px){
	width:90%;
}
`
const MyButton  = styled.div`
height:30px;
width:120px;
background-color:#0FBBFE;
color:white;
border:none;
margin-top:5px;
border-radius:6px;
cursor:pointer;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;

transition: all 350ms;

:hover{
    transform: scale(1.1)
}



`

const TeacherMeter = styled.div`
width:370px;
height:1px;
background-color:grey;

@media screen and (max-width:600px){
	width:90%;
}
`

const TeacherDetails = styled.div`
width:370px;
height:30px;
display: flex;
justify-content:space-between;

@media screen and (max-width:600px){
	width:90%;
}

div{
	font-size:15px;
}

pre{
	margin-top:5px;
	font-width:600;
	color:grey;

}

`

const Content = styled.div`
width:370px;
height:40px;
color:light:#9C9C9C;
font-size:15px;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;

@media screen and (max-width:600px){
	width:90%;
}

`

const LectureName = styled.div`
display: flex;
width: 90%;
height:30px;
justify-content:space-between;
padding-right:10px;

@media screen and (max-width:600px){
	width:90%;
}

span {
	color:#508ED7;
	font-weight:600;
	font-size:20px;

	@media screen and (max-width:600px){
		font-size:15px;
	}

}

`

const First = styled.div`
width:80px;
height: 100%;
display: flex;
justify-content: center;

@media screen and (max-width:600px){
	width:60px;
}

`

const Iconmy = styled(IoNewspaper)<{ cl: string }>`
font-size:60px;
margin-top:20px;
color:${({cl})=>cl};

@media and screen and (max-width:600px){
	font-size:15px;
}
`
const Second= styled.div`
width:400px;
height:100%;

display: flex;
justify-content:center;
flex-direction: column;
`


const Mysubject = styled.div`
width:100%;
min-height:500px;
height:100%;
display:flex;
justify-content:space-between;
flex-wrap:wrap;
margin-top:15px;


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
width:87%;
margin-top: 30px;
display:flex;
flex-direction: column;
`


const Card = styled.div`
width: 480px;
height: 170px;
background-color:white;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
display: flex;
align-items: center;
border-radius:10px;
justify-content:space-between;

@media screen and (max-width:600px){
width:100%;
margin-top:10px;
}
`
const Holder = styled.div`
 width:95%;
 min-height:500px;
 height:auto;
 display:flex;
 flex-wrap:wrap;


 @medis screen and (max-width:600px){
	width:100%;
    
 }
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
