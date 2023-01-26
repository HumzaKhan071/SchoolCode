import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { SideBarItem } from "./RouterSide";
import { AiOutlineDown } from "react-icons/ai";

interface Iprops {
  changeFalse: () => void;
  user?: any;
  data?: any;
}

const SideBar: React.FC<Iprops> = ({ changeFalse, user, data }) => {
  return (
    <div>
      <ContentDash>
        {SideBarItem.map((props, index) => (
          <NavLink
            key={index}
            to={props.to}
            onClick={changeFalse}
            style={{
              color: "black",
              textDecoration: " none",
              borderLeft: "4px solid black",
              display: "flex",
              marginTop: "8px",
            }}
          >
            <NavCon>
              &nbsp;&nbsp;&nbsp;
              <div> {props.icon(props)}</div>
              &nbsp;&nbsp;&nbsp;
              <span> {props.name}</span>
            </NavCon>
          </NavLink>
        ))}
      </ContentDash>

      <LogSide>
        {data?.logo ? <Dimge src={data?.logo} /> : <Dimge src="/Img/phe.png" />}
      </LogSide>
    </div>
  );
};

export default SideBar;

const Dimge = styled.img`
  width: 70%;
  height: 45px;
  object-fit: contain;
`;

const LogSide = styled.div`
  height: 100px;
  width: 100%;
  justify-content: center;
  display: flex;
`;

const ContentDash = styled.div`
  padding-top: 30px;

  margin-top: 80px;
`;

const NavCon = styled.div`
  width: 100%;
  height: 35px;

  display: flex;
  align-items: center;
  overflow: hidden;

  span {
    font-weight: 500;
    display: flex;
    align-items: center;
    /* padding-right: 100px; */
    width: 70%;

    justify-content: space-between;
  }
`;
