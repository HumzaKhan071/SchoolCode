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
    width:1px;
    height: 200px;
    left: calc(10% - 5px);

    @media screen and (max-width:800px){
        left: calc(23% - 70px);
        height:450px;

    }
    
    @media screen and (max-width:600px){
        left: calc(23% - -5px);
        height:450px;

    }
    

}


`        