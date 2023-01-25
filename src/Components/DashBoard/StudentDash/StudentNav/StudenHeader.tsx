import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSchool, FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import {

  AiOutlineCopy,
  AiFillQuestionCircle,
  AiFillBell,
  AiOutlineCalendar,

} from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import { SideBarItem } from "./RouterSide";
import { NavLink, useNavigate } from "react-router-dom";
import img from "./1.jpg";
import SideBar from "./SideBar";
import { Session, User } from "../../../Global/RecoilState";
import axios from "axios";

interface iSession {
	sessionCode: string;
	academicSession: string;
	academicTerm: string;
}

interface iData {
	_id: string;
}

const url: string = "https://school-code.onrender.com";
const StudentHeader = () => {

  const [change, setChange] = React.useState(false);
  const [academic, setAcademic] = useState({} as iSession);
  const [studentData, setStudentData] = useState({} as iData);
  const navigate = useNavigate();
  const user = useRecoilValue(User);
  const [session, setSession] = useRecoilState(Session);
  const [userState, setUserState] = useRecoilState(User);

  const myRef = React.useRef<HTMLDivElement>(null!);
  const backRef = React.useRef<HTMLDivElement>(null!);

  const getStudent = async () => {
    const myURL = `${url}/api/student/${user._id}/student-detail-school`;
    await axios.get(myURL).then((res) => {
      setStudentData(res.data.data);
    });
  };

  const dataURL = `${url}/api/academic/${studentData._id}/viewing-present-academic-session`;

  const getSession = async () => {
    await axios.get(dataURL).then((res) => {
      setAcademic(res.data.data);
      setSession(academic);
    });
  };

  useEffect(() => {
    getStudent();
    getSession();
    axios.get(url);
  }, [dataURL, academic]);

  const changeTrue = () => {
    setChange(true);
    myRef.current.style.left = "0px";
    backRef.current.style.left = "0px";
  };
  const changeFalse = () => {
    setChange(false);
    myRef.current.style.left = "-300px";
    backRef.current.style.left = "-2000px";
  };

  return (
    <div>
      <HeaderDash>
        <HolderCon>
          <MenuHold>
            {change ? (
              <FaBars fontSize="20px" cursor="pointer" onClick={changeFalse} />
            ) : (
              <FaBars fontSize="20px" cursor="pointer" onClick={changeTrue} />
            )}
          </MenuHold>
          <LogoName>
            <MyIcon>
              <FaSchool
                style={{
                  color: "white",
                  fontSize: "25px",
                }}
              />
            </MyIcon>
            <AdminDetails>
              <SchoolName>
                <Title>{user?.schoolName}</Title>
                <SubTitle>
                  <RiArrowDropDownLine
                    style={{
                      fontSize: "30px",
                      fontWeight: "500",
                      marginTop: "5px",
                    }}
                  />
                </SubTitle>
              </SchoolName>
              <SchoolId>
                <div>ID: {academic?.sessionCode}</div>

                <span>
                  <AiOutlineCopy
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "blue",
                      marginTop: "2px",
                    }}
                  />
                </span>
              </SchoolId>
            </AdminDetails>
          </LogoName>

          <RightCon>
            <One>
              <div>
                <AiOutlineCalendar
                  style={{
                    fontSize: "15px",
                    marginTop: "5px",
                  }}
                />
              </div>
              <span>{academic?.academicSession}</span>
              <div>
                <RiArrowDropDownLine
                  style={{
                    color: "gray",
                    fontSize: "25px",
                    marginTop: "5px",
                  }}
                />
              </div>
            </One>
            <Two>
              <div>
                <AiFillQuestionCircle
                  style={{
                    fontSize: "20px",
                    marginTop: "8px",
                  }}
                />
              </div>
              <span>Help</span>
            </Two>
            <Three>
              <AiFillBell />
            </Three>
            <Four>
              <img src={img} />
            </Four>
            <div>
              <RiArrowDropDownLine
                style={{
                  color: "gray",
                  fontSize: "25px",
                  marginTop: "5px",
                }}
              />
            </div>
          </RightCon>
        </HolderCon>
      </HeaderDash>
      <Side>
        <ContentDash>
          {SideBarItem.map((props, index) => (
            <NavLink
              to={props.to}
              key={index}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#1DA1F2" : "black",
                  textDecoration: isActive ? "none" : " none",

                  borderLeft: isActive
                    ? "4px solid #1DA1F2"
                    : "4px solid black",
                  display: isActive ? "flex" : "flex",
                  marginTop: isActive ? "8px" : "8px",
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
          ))}
        </ContentDash>

        <LogSide
          onClick={() => {
            setUserState(null);
            navigate("/");
          }}
        >
          {user?.logo ? (
            <Dimge src={user?.logo} />
          ) : (
            <Dimge src="/Img/phe.png" />
          )}
          <div
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Log Out
          </div>
        </LogSide>
      </Side>

      <Back ref={backRef}>
        <SideHold ref={myRef}>
          <SideBar changeFalse={changeFalse} user={user} />
        </SideHold>
      </Back>
    </div>
  );

};

export default StudentHeader;

const Back = styled.div`
	display: none;

	@media (max-width: 1000px) {
		height: 100vh;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		position: fixed;
		transition: 1ms;
		left: -2000px;
		display: block;
		z-index: 1111;
	}
`;

const SideHold = styled.div`
	display: none;

	@media (max-width: 1000px) {
		width: 260px;
		display: block;

		height: 100vh;
		transition: all 350ms;
		/* display: flex; */
		background-color: white;

		position: fixed;

		left: -300px;
	}
`;

const MenuHold = styled.div`
	display: none;

	@media (max-width: 1000px) {
		display: flex;

		height: 100%;
		width: 50px;
		justify-content: center;
		align-items: center;
	}
`;

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
	flex-direction: column;
`;

const NavCon = styled.div`
	width: 100%;
	height: 35px;

	display: flex;
	align-items: center;

	span {
		font-weight: 500;
	}
`;

const ContentDash = styled.div`
	padding-top: 10px;
`;

const One = styled.div`
	width: 200px;
	height: 35px;
	border-radius: 9px;
	display: flex;
	justify-content: space-evenly;
	background-color: #f4f4f4;
	align-items: center;

	span {
		font-weight: 600;
	}

	@media (max-width: 800px) {
		display: none;
	}
`;
const Two = styled.div`
	width: 80px;
	height: 35px;
	border-radius: 9px;
	display: flex;
	justify-content: space-evenly;
	background-color: #f4f4f4;
	align-items: center;

	span {
		font-weight: 500;
		font-size: 15px;
	}

	@media (max-width: 800px) {
		display: none;
	}
`;
const Three = styled.div`
	width: 50px;
	height: 35px;
	border-radius: 9px;
	display: flex;
	justify-content: space-evenly;
	background-color: #f4f4f4;
	align-items: center;

	span {
		font-weight: 600;
	}
`;
const Four = styled.div`
	width: 50px;
	height: 35px;
	border-radius: 9px;
	display: flex;
	justify-content: space-evenly;
	background-color: #f4f4f4;
	align-items: center;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 9px;
	}

	span {
		font-weight: 600;
	}

	@media (max-width: 800px) {
		display: none;
	}
`;

const Title = styled.div`
	width: 90px;
	height: 20px;
	display: flex;
	align-items: flex-end;
	overflow: hidden;
	font-size: 15px;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
const SubTitle = styled.div``;

const SchoolName = styled.div`
	height: 25px;
	width: 150px;
	display: flex;
	align-items: center;
`;
const SchoolId = styled.div`
	margin-top: -7px;
	font-size: 12px;
	display: flex;
	color: grey;
	span {
		cursor: pointer;
		margin-left: 7px;
	}
`;

const MyIcon = styled.div`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	background-color: #1da1f2;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const AdminDetails = styled.div`
	height: 70%;
	width: 150px;

	display: flex;
	flex-direction: column;
`;

const LogoName = styled.div`
	width: 200px;
	height: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const RightCon = styled.div`
	width: 500px;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: space-evenly;

	@media (max-width: 800px) {
		width: 80px;
	}
`;

const HolderCon = styled.div`
	width: 97%;
	display: flex;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

const HeaderDash = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

	background-color: white;
	position: fixed;
	top: 0;
	z-index: 999;
`;

const Side = styled.div`
	width: 230px;
	min-height: calc(100vh - 0px);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	padding-top: 70px;
	position: fixed;
	justify-content: space-between;

	z-index: 1;
	@media (max-width: 1000px) {
		display: none;
		/* left: -300px; */
	}

	//box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	//box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	//box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;
