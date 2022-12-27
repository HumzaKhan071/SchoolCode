import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { User } from "../../Global/RecoilState";
import { MdOutlineClose } from "react-icons/md";

const url: string = "https://school-code.onrender.com";

interface iData {
  classes?: string;
  name?: string;
  email?: string;
  image?: string;
  schoolName: string;
}

interface Iprops {
  toggleShow: () => void;
}
const CreateStudent: React.FC<Iprops> = ({ toggleShow }) => {
  const user = useRecoilValue(User);

  const [name, setName] = useState("");

  const [show, setShow] = useState(false);

  const createStudents = async () => {
    const newURL = `${url}/api/student/${user._id}/create-student`;
    setShow(true);
    await axios
      .post(newURL, {
        name,
        schoolName: user?.schoolName,
      })
      .then((res) => {
        setShow(false);

        window.location.reload();
      });
  };

  return (
    <Container>
      <Card>
        <Cont>
          <FirstHold>
            <Text>Add New Student</Text>
            <Cancel onClick={toggleShow}>
              <MdOutlineClose />
            </Cancel>
          </FirstHold>

          <span>
            Please make sure you fill in the correct name of the student.
          </span>

          <InpHold>
            <Title>
              Student Name <div style={{ color: "red" }}>*</div>
            </Title>
            <Input
              disabled={show === true}
              placeholder="e.g Gideon ekeke"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </InpHold>
          <InpHold>
            <Title>School Name</Title>
            <Input
              style={{ color: "silver" }}
              disabled
              value={user?.schoolName}
            />
          </InpHold>

          <ButtonHold>
            <Button3 onClick={toggleShow}>Cancel</Button3>
            {name !== "" ? (
              <Button2
                onClick={createStudents}
                style={{ backgroundColor: "#1da1f2", color: "white" }}
              >
                {show ? <>Loading...</> : <>Procceed</>}
              </Button2>
            ) : (
              <>
                {show ? (
                  <Button2>Loading...</Button2>
                ) : (
                  <Button2
                    style={{
                      cursor: "not-allowed",
                    }}
                  >
                    Procceed
                  </Button2>
                )}
              </>
            )}
          </ButtonHold>
        </Cont>
      </Card>
    </Container>
  );
};

export default CreateStudent;

const ButtonHold = styled.div`
  margin-top: 20px;
  /* background-color: red; */
  width: 100%;
  display: flex;

  justify-content: flex-end;
`;

const Button3 = styled.div`
  height: 40px;
  width: 120px;
  background-color: none;
  color: #1da1f2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-right: 10px;
  border: 1px solid #1da1f2;
  cursor: pointer;
  transition: all 350ms;

  :hover {
    transform: scale(0.97);
  }
`;
const Button2 = styled.div`
  height: 40px;
  width: 120px;
  background-color: #dcdada;
  /* color: #1da1f2; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  /* border: 1px solid #1da1f2; */
  cursor: pointer;
  transition: all 350ms;

  :hover {
    transform: scale(0.97);
  }
`;

const InpHold = styled.div`
  margin-top: 10px;
`;
const Title = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  height: 35px;
  width: 97%;
  background-color: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding-left: 10px;
  border: 1px solid #f4f4f4;
  transition: all 350ms;
  outline: none;
`;

const Cancel = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #eeeeee;
  }
`;
const FirstHold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid silver;
`;
const Text = styled.div`
  font-weight: bold;
`;
const Cont = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 10px;

  span {
    font-size: 13px;
  }
`;

const Card = styled.div`
  height: 300px;
  width: 500px;
  background-color: white;
  margin-top: 50px;
  border-radius: 5px;
  transition: all 350ms;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 97%;
  }
`;

const Container = styled.div`
  position: absolute;

  background-color: rgba(30, 145, 243, 0.3);

  height: 100%;
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  backdrop-filter: blur(5px);
  z-index: 10;
`;
