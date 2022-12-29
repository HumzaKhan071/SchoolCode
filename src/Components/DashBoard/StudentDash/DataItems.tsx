import React from 'react'
import styled from 'styled-components'
import { SlCalender } from 'react-icons/sl';
import { BiTimeFive } from 'react-icons/bi';

interface iProps{
  data:any
}

const TimeLine:React.FC<iProps> = ({data}) => {
  return (
   <Container>
    <Holder>
        <Mydate>
            {data.date}
        </Mydate>

        <Details>
            <DeOne>
                <div><span>{data.subject}</span></div>
                <ConDeOne>
                    <p><SlCalender/></p>
                    &nbsp;
                    <p>{data.dateFull} </p> 
                    <p>|</p> 
                    &nbsp;
                    <p><BiTimeFive/></p>
                    &nbsp;
                    <p>{data.timeRange}</p>
                </ConDeOne>
            </DeOne>
            <Detwo>

            </Detwo>

        </Details>
       
    </Holder>
   </Container>
  )
}

export default TimeLine

const ConDeOne = styled.div`
display: flex;
color:grey;


p{
    font-size:15px;
}
`

const DeOne = styled.div`
width:450px;
height:100%;
display: flex;
flex-direction: column;
margin-left:20px;
line-height:10px;

@media screen and (max-width:800px){
    width:100%;
}
`
const Detwo = styled.div`
width:150px;
height:100%;
background-color:red;


@media screen and (max-width:800px){
    width:100%;
    margin-left:20px;
}
`

const Mydate = styled.div`
display: flex;
justify-content: center;
width:10%;
height:100%;
color:#3D90E6;

@media screen and (max-width:600px){
    width:23%;
    fontSize: 10px;
    font-weight:700;
}
`

const Details = styled.div`
width:90%;
height:100%;

display:flex;
@media screen and (max-width:800px){
  width:80%;
  display: flex;
  flex-direction: column;


}

`
const Container = styled.div``


const Holder = styled.div`
  width:700px;
  height:60px;
 
  margin-bottom:10px;
  display:flex;

  @media only screen and (max-width: 768px) {
    width:100%;
    height:150px;

   
  }

  
  
`