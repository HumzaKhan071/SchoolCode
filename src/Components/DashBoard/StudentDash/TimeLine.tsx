import React from 'react'
import {myDta} from "./DataSide"
import DataItems from './DataItems'
import styled from "styled-components"

const TimeLine = () => {
  return (
    <TimeContainer>
       {
        myDta.map((props)=>(
            <DataItems data = {props}/>
            
        ))
       }
    </TimeContainer>
  )
}

export default TimeLine

const TimeContainer = styled.div`
display: flex;
flex-direction: column;

::after{
    content:"";
    background-color:#3D90E6;
    position:absolute;
    width:3px;
    height: 200px;
    left: calc(10% - 2px);

    @media screen and (max-width:800px){
        left: calc(23% - 2px);
        height:450px;

    }
    

}


`        