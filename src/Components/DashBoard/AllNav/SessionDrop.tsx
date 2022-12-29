import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { User } from "../../Global/RecoilState";
import CreatingSessionModal from "../AdminDash/Screen/CreatingSessionModal";

interface Iprops {
  toggleDrop: () => void;
  academic: any;
}

interface iSession {
  _id: string;
  sessionCode: string;
  schoolName: string;
  academicTerm: string;
  academicSession: string;
}

const url: string = "https://school-code.onrender.com";

const SessionDrop: React.FC<Iprops> = ({ toggleDrop, academic }) => {
  const user = useRecoilValue(User);
  const [mySession, setMySession] = useState([] as iSession[]);
  const viewSession = async () => {
    const newUrl = `${url}/api/academic/${user._id}/view-academic-sessions`;
    await axios.get(newUrl).then((res) => {
      setMySession(res.data.data!.academicSession);
    });
  };

  useEffect(() => {
    viewSession();
  }, []);

  return (
    <>
      <Container>
        <span>Academic Session</span>
        {mySession?.map((props) => (
          <AcBox>
            <Sec key={props._id}>Session: {props!.academicSession} </Sec>
          </AcBox>
        ))}

        <ButHold onClick={toggleDrop}>
          <Button>+ Add New</Button>
        </ButHold>
      </Container>
    </>
  );
};

export default SessionDrop;

const ButHold = styled.div`
  margin-top: 50px;
`;
const Button = styled.div`
  height: 40px;
  width: 200px;
  background-color: none;
  color: #1da1f2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  cursor: pointer;
  transition: all 350ms;

  :hover {
    transform: scale(0.97);
  }
`;
const AcBox = styled.div`
  margin-top: 8px;
  border: 1px solid #f4f4f4;
  border-radius: 5px;
  min-height: 30px;
  display: flex;
  /* justify-content: center; */
  align-items: left;
  flex-direction: column;
`;
const Sec = styled.div`
  margin-left: 5px;
  font-weight: bold;
  margin-top: 3px;
`;

const Container = styled.div`
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  top: 40px;
  padding: 10px;
  border-radius: 5px;
  left: 20px;
  flex-direction: column;

  span {
    font-size: 11px;
    font-weight: 400;
  }
`;
