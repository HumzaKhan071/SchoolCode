import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSchool, FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  AiOutlineCopy,
  AiFillQuestionCircle,
  AiFillBell,
  AiFillDashboard,
  AiOutlineCalendar,
  AiOutlineDown,
} from "react-icons/ai";
// import { BsCalendarCheck } from 'react-icons/bs';
import { SideBarItem } from "./RouterSide";
import { NavLink } from "react-router-dom";
import img from "./1.jpg";
import SideBar from "./SideBar";
import { Session, User } from "../../Global/RecoilState";
import { useRecoilValue, useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import axios from "axios";
import SessionDrop from "./SessionDrop";
import CreatingSessionModal from "../AdminDash/Screen/CreatingSessionModal";

interface iSession {
  sessionCode: string;
  academicSession: string;
  academicTerm: string;
}

const url: string = "https://school-code.onrender.com";
const Header = () => {
  // const navigate = useNavigate();
  const [userState, setUserState] = useRecoilState(User);
  const [sessionState, setSessionState] = useRecoilState(Session);

  const [academic, setAcademic] = useState({} as iSession);
  const user = useRecoilValue(User);
  const [change, setChange] = React.useState(false);
  const [showSession, setShowSession] = React.useState(false);
  const [showMySession, setShowMySession] = React.useState(false);
  const [showDrop, setShowDrop] = React.useState(false);

  const [data, setData] = useState({} as any);

  const fetchData = async () => {
    const newURL = `${url}/api/school/${user._id}`;
    await axios.get(newURL).then((res) => {
      setData(res.data.data);
    });
  };

  const myRef = React.useRef<HTMLDivElement>(null!);
  const backRef = React.useRef<HTMLDivElement>(null!);

  const toggleSession = () => {
    setShowSession(!showSession);
  };

  const toggleShowSession = () => {
    setShowMySession(!showMySession);
  };

  const toggleDrop = () => {
    setShowDrop(!showDrop);
  };

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

  const getSession = async () => {
    await axios
      .get(`${url}/api/academic/${user._id}/viewing-present-academic-session`)
      .then((res) => {
        setAcademic(res.data.data);
        setSessionState(academic);
      });
  };
  useEffect(() => {
    getSession();
    axios.get(url);
    fetchData();
  }, [academic]);

  React.useEffect(() => {
    if (change) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [change]);
  React.useEffect(() => {
    if (showDrop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showDrop]);

  return (
    <MainDown>
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
                <div>SCH ID: {user?.schoolCode}</div>

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
              <SchoolId>
                <div>Session Code: {academic?.sessionCode}</div>
              </SchoolId>
            </AdminDetails>
          </LogoName>

          <RightCon>
            <One onClick={toggleShowSession}>
              <div>
                <AiOutlineCalendar
                  style={{
                    fontSize: "15px",
                    marginTop: "5px",
                    marginLeft: "4px",
                    marginRight: "4px",
                  }}
                />
              </div>
              <span>Session: {academic?.academicSession} </span>
              <div>
                <RiArrowDropDownLine
                  style={{
                    color: "gray",
                    fontSize: "25px",
                    marginTop: "5px",
                  }}
                />
              </div>
              {showMySession ? (
                <SessionDrop academic={academic} toggleDrop={toggleDrop} />
              ) : null}
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
          {SideBarItem.map((props: any, index) => (
            <NavLink
              key={index}
              to={props.to}
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
                <span onClick={toggleSession}> {props.name} </span>
              </NavCon>
            </NavLink>
          ))}
        </ContentDash>

        <LogSide
          onClick={() => {
            setUserState(null);
            // navigate("/");
          }}
        >
          {data?.logo ? (
            <Dimge src={data?.logo} />
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
          <SideBar changeFalse={changeFalse} data={data} />
        </SideHold>
      </Back>

      <br />
      <br />
      <br />

      <One1 onClick={toggleSession}>
        <div>
          <AiOutlineCalendar
            style={{
              fontSize: "15px",
              marginTop: "5px",
            }}
          />
        </div>
        <span>Session</span>
        <div>
          <RiArrowDropDownLine
            style={{
              color: "gray",
              fontSize: "25px",
              marginTop: "5px",
            }}
          />
        </div>
        {showSession ? (
          <SessionDrop academic={academic} toggleDrop={toggleDrop} />
        ) : null}
      </One1>

      {showDrop ? <CreatingSessionModal toggleDrop={toggleDrop} /> : null}
    </MainDown>
  );
};

export default Header;

const MainDown = styled.div`
  br {
    display: none;

    @media screen and (max-width: 960px) {
      display: flex;
    }
  }
`;

const One1 = styled.div`
  width: 200px;
  height: 35px;
  border-radius: 9px;

  justify-content: space-evenly;
  background-color: #f4f4f4;
  align-items: center;
  /* margin-bottom: 20px; */
  margin-top: 10px;
  display: none;
  position: relative;
  cursor: pointer;

  span {
    font-weight: 600;
  }

  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

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
  cursor: pointer;
  text-decoration: none;
  color: black;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

const NavCon = styled.div`
  width: 100%;
  height: 35px;

  display: flex;
  align-items: center;
  position: relative;

  span {
    font-weight: 500;
  }
`;

const ContentDash = styled.div`
  padding-top: 30px;
`;

const One = styled.div`
  //   width: 200px;
  height: 35px;
  border-radius: 9px;
  display: flex;
  justify-content: space-evenly;
  background-color: #f4f4f4;
  align-items: center;
  position: relative;
  cursor: pointer;

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
  //   width: 90px;
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
  //   width: 150px;
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
  margin-right: 5px;
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
  background-color: white;
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100001;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
  /* box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
		rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
		rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px; */
`;

const Side = styled.div`
  margin-top: 80px;
  width: 230px;
  min-height: calc(100vh - 60px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
		rgba(0, 0, 0, 0.22) 0px 10px 10px; */
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
