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

        <CircleDot>

        </CircleDot>

        <Details>
            <DeOne>
                <Subject><span>{data.subject}</span></Subject>
                <ConDeOne>
                 
                    <p><SlCalender style={{
                        fontSize: "12px",
                        marginTop:"-7px"
                    }}/> {data.dateFull} | </p> 
                    &nbsp;
                   
                  
                 
                    <p> <BiTimeFive style={{
                        fontSize: "14px",
                        marginTop:"-7px"
                    }}/> {data.timeRange}</p>
                </ConDeOne>
            </DeOne>
            <Detwo>
                <ProButton>{data.progress}</ProButton>
            </Detwo>

        </Details>
       
    </Holder>
   </Container>
  )
}

export default TimeLine

const Subject = styled.div`
height:auto;
`

const ProButton = styled.div`
height:35px;
width: 150px;
background-color:#CDEAEE;
display: flex;
align-items: center;
border-radius:6px;
justify-content:center;
cursor: pointer;

:hover{
    background-color: #028EE1;
    color:white;
}

`

const CircleDot = styled.div`
width:7px;
height:7px;
border-radius:50%;
left: calc(10% - -5px);
border:2px solid blue;
background-color:white;
position: absolute;


z-index:100;

 @media screen and (max-width:800px){
        left: calc(23% - 85px);
        

    }
@media screen and (max-width:600px){
    left: calc(23% - 4px );

}





`

const ConDeOne = styled.div`
display: flex;
color:grey;
flex-wrap: wrap;
line-height: 1px;
height:auto;

@media screen and (max-width:600px){
    width200px;

}



p{
    font-size:15px;
}
`

const DeOne = styled.div`
width:450px;
height:100%;
display: flex;
flex-direction: column;
margin-left:22px;




@media screen and (max-width:800px){
    width:100%;
}
`
const Detwo = styled.div`
width:150px;
height:100%;


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
  position: relative;
  margin-bottom:10px;
  display:flex;

  @media only screen and (max-width: 768px) {
    width:100%;
    height:150px;

   
  }

  
  
`