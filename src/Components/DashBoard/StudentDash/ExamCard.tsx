import React from 'react'
import styled from "styled-components"
import { CiLocationOn } from 'react-icons/ci';
import { IoNewspaper } from 'react-icons/io5';
import {Link} from "react-router-dom"


interface iProps {
    data: any;
}

const ExamCard:React.FC<iProps> = ({data}) => {
  return (
    <Container>
        <Holder>
            <Propoint>
                <Dmain>

                    <span>
                        100% completed
                    </span>
                    <meter
                    min="0" max="100"
                    low={35 }high={100}
                    value={100}
                    >
                     
                    </meter>

                </Dmain>

                <HoldIcon>
                    <CiLocationOn/>
                </HoldIcon>
            </Propoint>

            <ShoWSubject bg={data.subjectTest.charAt(0).toUpperCase() === "E" ? "#FDF4E6" : 
            data.subjectTest.charAt(0).toUpperCase() === "B" ? "#EAF9FF" : 
            data.subjectTest.charAt(0).toUpperCase() === "M" ? "#EDE8FF" : "#FDF4E6" }>

                <Iconmy cl={data.subjectTest.charAt(0).toUpperCase() === "E" ? "#EC951F" : 
            data.subjectTest.charAt(0).toUpperCase() === "B" ? "#3AC6FE" : 
            data.subjectTest.charAt(0).toUpperCase() === "M" ? "#551FFF" : "#EC951F" }/> 
                <span>{data.subjectTest}</span>
             
                <MyButton
                to={`student-test-details/${data.id}`}
                >Start Test</MyButton>

            </ShoWSubject>

        </Holder>
    </Container>
  )
}

export default ExamCard


const MyButton  = styled(Link)`
height:30px;
width:120px;
background-color:#0FBBFE;
color:white;
border:none;
margin-top:10px;
border-radius:10px;
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

const Iconmy = styled(IoNewspaper)<{ cl: string }>`
font-size:60px;
color:${({cl})=>cl};
`

const ShoWSubject = styled.div<{ bg: string }>`
width:95%;
height:150px;
background-color:${({bg})=>bg};
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;


span{
    font-weight:600;
    font-size:15px;
}
`

const Dmain = styled.div`
width:150px;
height:100%;
display: flex;
flex-direction: column;

span{
    font-size:9px;
}
`
const HoldIcon = styled.div`

width:20px;
border-radius:50%;
height:20px;
background-color:#FDF4E6;
display:flex;
justify-content:center;
align-items:center;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`

const Propoint = styled.div`
width:95%;
display:flex;
height:35px;
justify-content:space-between;
align-items: center;
margin-top:5px;
`

const Holder = styled.div`
width: 230px;
height: 200px;
background-color:white;
align-items: center;
border-radius:6px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
display: flex;
flex-direction:column;
margin:10px;
transition: all 350ms;

:hover{
    transform: scale(1.1)
}

`

const Container = styled.div`
`