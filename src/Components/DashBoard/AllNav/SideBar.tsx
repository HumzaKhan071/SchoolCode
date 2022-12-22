import React from 'react'
import styled from "styled-components"
import  {NavLink} from "react-router-dom"
import { SideBarItem } from "./RouterSide"

interface Iprops {
  changeFalse : () => void
}

const SideBar:React.FC<Iprops> = ({changeFalse}) => {
  return (
    <div>
      <ContentDash>
      {
                  SideBarItem.map((props, index) => (
					<NavLink to={props.to}
					
          onClick ={changeFalse}
					style={({isActive}) =>
					{
						return {
						color: isActive ? "#1DA1F2" : "black",
						textDecoration: isActive ? "none" : " none",
						
						borderLeft: isActive ? "4px solid #1DA1F2" : "4px solid black",
						display: isActive ? "flex" : "flex",
						marginTop: isActive ? "8px" : "8px"
													
					  };
				  }}
					>
					<NavCon>
					&nbsp;&nbsp;&nbsp;
						<div> {props.icon(props)}</div>
						&nbsp;&nbsp;&nbsp;
						<span> {props.name}</span>

					</NavCon>
					</NavLink>
                  ))
              }
      </ContentDash>

      <LogSide>
					<Dimge src="/Img/kod.png"/>

				</LogSide>
    </div>
  )
}

export default SideBar

const Dimge = styled.img`
width:70%;
height:45px;
object-fit:contain;
`

const LogSide = styled.div`

height:100px;
width:100%;
justify-content:center;

display:flex;

`

const ContentDash = styled.div`
padding-top:30px;
`

const NavCon = styled.div`
  width:100%;
  height:35px;
  
  display:flex;
  align-items:center;

  span{
	font-weight:500;
	
  }


`