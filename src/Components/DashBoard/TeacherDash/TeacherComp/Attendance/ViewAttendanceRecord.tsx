import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import Swal from "sweetalert2";
import numeral from "numeral";
import moment from "moment";
import { User } from "../../../../Global/RecoilState";

const url: string = "https://school-code.onrender.com";

interface IData {
  _id: string;
  className: string;
  attendance: [];
  schoolName: string;
  classTeacher: string;
  name: string;
  email: string;
  classID: string;
  subject: [];
}

function ViewAttendanceRecord() {
  const { id } = useParams();
  const user = useRecoilValue(User);

  const [fee, setFee] = useState(false);
  const [register, setRegister] = useState(false);

  const [myResult, setMyResult] = useState([] as any[]);
  const [result, setResult] = useState([] as any[]);
  const [classInfo, setClassInfo] = useState({} as any);

  const getResult = async () => {
    await axios
      .get(`${url}/api/class/${id}/viewing-class-students`)
      .then((res) => {
        setResult(res?.data?.data?.students);
        console.log(res?.data?.data);
      });
  };

  const getClass = async () => {
    await axios.get(`${url}/api/class/${id}/viewing-class`).then((res) => {
      setClassInfo(res?.data?.data);
    });
  };

  const markPresent = async (studentID: string) => {
    await axios
      .post(`${url}/api/attendance/${user._id}/${studentID}/present`)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Student is marked Present",
          showConfirmButton: false,
          timer: 2500,
        });
        console.log(studentID);
      });
  };

  const markAdsent = async (studentID: string) => {
    await axios
      .post(`${url}/api/attendance/${user._id}/${studentID}/absent`)
      .then((res) => {
        setClassInfo(res?.data?.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Student is marked Adsent",
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };

  const viewAttendance = async () => {
    await axios
      .get(`${url}/api/attendance/${id}/teacher-viewing-student-attendance`)
      .then((res) => {
        setMyResult(res?.data?.data?.attendance);
      });
  };

  const groupData = (data: {}[], props: string) => {
    return data.reduce((el: any, newEL: any) => {
      (el[newEL[props]] = el[newEL[props]] || []).push(newEL);
      return el;
    }, {});
  };

  let dateValue = groupData(myResult, "dateTime");

  let dateValueKey = Object.keys(dateValue);
  let dateValues = Object.values(dateValue);

  console.log("values: ", dateValues);

  useEffect(() => {
    getResult();
    getClass();
    viewAttendance();
  }, []);

  return (
    <>
      <Container>
        <Content>
          {/* <span>{user?.name}</span> */}
          <MainHold>
            <LoaderHold>
              <Holding>
                <span>Viewing class Attendance</span>
                <Div>Recording Attendance</Div>
              </Holding>
            </LoaderHold>
            <NextRec>
              <span>Next Recommended action:</span>
              <Ad>{user?.email}</Ad>
            </NextRec>
          </MainHold>
          <MainHold2>
            <Cont>
              <Tog>
                <h5>Detail test and exam performance for {user?.name}</h5>
                <span>
                  Present class: <strong>{classInfo?.className}</strong>
                </span>
                <br />
                <span>
                  class Teacher: <strong>{classInfo?.classTeacher}</strong>
                </span>
                <br />
                <span>
                  total Students: <strong>{classInfo?.students?.length}</strong>
                </span>
                <br />
              </Tog>
            </Cont>
          </MainHold2>
          <MainHold22>
            <div style={{ width: "150px" }} />
            <div
              style={{
                display: "flex",
              }}
            >
              {dateValueKey.map((props, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    margin: "0 5px ",
                    width: "100px",
                    textAlign: "center",
                  }}
                >
                  {props}
                </div>
              ))}
            </div>
          </MainHold22>
          {/* <MainHold221>
            {result?.map((props, i) => (
              <MainHold1 key={props._id}>
                <div style={{ width: "150px" }}>{props.name}</div>
                <div
                  style={{
                    width: "100px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {props.present === true ? (
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "green",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "red",
                      }}
                    />
                  )}
                </div>
              </MainHold1>
            ))}

            {dateValues.map((props: any, i) => (
              <div>
                {props?.map((props: any) => (
                  <div
                    style={{
                      width: "100px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {props.present === true ? (
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          backgroundColor: "green",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          backgroundColor: "red",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </MainHold221>{" "} */}
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "5px 0",
                width: "150px",
              }}
            >
              {result?.map((props, i) => (
                <div style={{ height: "30px" }}>{props.name}</div>
              ))}
            </div>
            <div
              style={{
                margin: "5px 0",
              }}
            >
              {dateValues.map((props: any, i) => (
                <div key={i}>
                  {props?.map((props: any, i: number) => (
                    <div
                      key={i}
                      style={{
                        width: "100px",
                        display: "flex",
                        justifyContent: "center",
                        height: "30px",
                      }}
                    >
                      {props.present === true ? (
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: "green",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: "red",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Content>
      </Container>
    </>
  );
}

export default ViewAttendanceRecord;

const Div111 = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
`;

const Div11 = styled.div`
  display: flex;
`;

const TeacherImage = styled.img`
  height: 20px;
  width: 20px;
  background-color: silver;
  border-radius: 50%;
  margin-right: 5px;
`;

const Conta4 = styled.div`
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  top: 0;
  right: 0;
  padding: 10px;
  border-radius: 5px;
  /* left: 20px; */
  flex-direction: column;

  span {
    font-size: 11px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    /* top: 150px; */
  }
`;

const Conta3 = styled.div`
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  top: 0;
  right: 0;
  /* left: 0; */
  padding: 10px;
  border-radius: 5px;
  /* left: 20px; */
  flex-direction: column;

  span {
    font-size: 11px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    /* top: 150px; */
  }
`;

const Main = styled.div`
  margin-left: 10px;

  span {
    height: 25px;
    width: 150px;
    display: flex;
    background-color: #f4f4f4;
    padding-left: 5px;
    font-size: 12px;
    /* justify-content: center; */
    align-items: center;
    /* border: 3px solid #f4f4f4; */
    border-radius: 4px;
    font-weight: 500;
    color: #9e9e9e;
    margin-bottom: 5px;
  }
`;

const First = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
`;
const Title = styled.div`
  font-weight: bold;
`;
const IconHold = styled.div`
  margin-right: 10px;
`;

const AllSubBox1 = styled.div`
  width: 300px;
  border: 1px solid #f4f4f4;
  position: relative;
  /* height: 100px; */
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin: 10px;
  transition: all 350ms;
  cursor: pointer;

  :hover {
    border: 1px solid #c3c3c3;
  }
`;

const AllSubBox = styled.div`
  width: 100%;
  border: 1px solid #f4f4f4;
  position: relative;
  /* height: 100px; */
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin: 10px;
  transition: all 350ms;
  cursor: pointer;

  :hover {
    border: 1px solid #c3c3c3;
  }
`;

const Iput = styled.input`
  margin-top: 8px;
  border: 1px solid #f4f4f4;
  outline: none;
  height: 30px;
  border-radius: 5px;
  padding-left: 10px;

  ::placeholder {
    font-size: 12px;
  }
`;

const Cancel = styled.div`
  cursor: pointer;
  height: 25px;
  width: 25px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;

  :hover {
    background-color: #ebeaea;
  }
`;

const ButHold2 = styled.div`
  margin-top: 10px;
`;
const ButHold3 = styled.div`
  color: red;
`;
const ButHold = styled.div`
  margin-top: 50px;
`;

const Button1 = styled.div`
  height: 45px;
  width: 200px;
  background-color: #1da1f2;
  color: white;
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

const Button11 = styled.div`
  //   height: 40px;
  padding: 8px 13px;
  //   width: 200px;
  background-color: none;
  color: #1da1f2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #000269;
  color: white;

  cursor: pointer;
  transition: all 350ms;

  :hover {
    transform: scale(0.97);
  }
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

const Conta2 = styled.div`
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  top: 0;
  padding: 10px;
  border-radius: 5px;
  left: 20px;
  flex-direction: column;

  span {
    font-size: 11px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    /* top: 150px; */
  }
`;
const Conta = styled.div`
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  top: 130px;
  padding: 10px;
  border-radius: 5px;
  left: 20px;
  flex-direction: column;

  span {
    font-size: 11px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    top: 150px;
  }
`;

const ButtonH = styled.div`
  height: 30px;
  width: 100px;
  border-radius: 5px;
  background-color: #fff2e9;
  color: #f6c06b;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
const Tog = styled.div`
  margin-bottom: 10px;

  span {
    font-size: 13px;
  }
`;
const But = styled.div`
  color: #1da1f2;
  font-weight: 500;
  cursor: pointer;
`;

const Cont = styled.div`
  margin-left: 10px;
  width: 95%;
`;

const Ad = styled.div`
  font-weight: bold;
`;

const Holding = styled.div`
  margin-left: 10px;
  /* align-items: center; */
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  height: 100%;
  color: white;

  span {
    font-size: 12px;
    opacity: 0.8;
  }
`;
const Div = styled.div`
  font-weight: bold;
`;
const LoaderHold = styled.div`
  height: 100%;
  background-color: orange;
  width: 30%;
  border-radius: 10px;
`;
const NextRec = styled.div`
  margin-right: 10px;
`;

const MainHold1 = styled.div`
  display: flex;
  width: 97.6%;
  background-color: white;
  border-radius: 5px;
  //   justify-content: space-between;
  align-items: center;
  font-size: 15px;
  margin-top: 10px;
  padding: 10px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  h5 {
    margin: 0;
  }
`;

const MainHold221 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  font-size: 15px;
  margin-top: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;

  h5 {
    margin: 0;
  }
`;

const MainHold22 = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  font-size: 15px;
  margin-top: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;

  h5 {
    margin: 0;
  }
`;

const MainHold2 = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  margin-top: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;

  h5 {
    margin: 0;
  }
`;

const MainHold = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  background-color: white;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  width: 90%;
  flex-direction: column;
`;

const Container = styled.div`
  width: calc(100vw - 230px);
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  background-color: #f7f9fc;
  overflow: hidden;
  position: absolute;
  right: 0px;
  padding-top: 100px;
  @media screen and (max-width: 1100px) {
    width: 95%;
  }
  @media screen and (max-width: 1005px) {
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    margin-top: 0;
  }

  /* background-color: #352b1e; */
`;
