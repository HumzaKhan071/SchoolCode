import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRecoilValue } from "recoil";
import moment from "moment";
import { User } from "../../../Global/RecoilState";
import ReportForm from "./Homeforms/ReportForm";

const url = "https://school-code.onrender.com";
const Report = () => {
  const [getReport, setGetReport] = useState<any[]>([]);

  const user = useRecoilValue(User);

  const getAllReport = async () => {
    const URL: string = `${url}/api/report/${user._id}/view-school-report`;
    await axios.get(URL).then((res) => {
      console.log(res.data.data.report);
      setGetReport(res.data.data.report);
    });
  };

  const handleForm = yup.object().shape({
    message: yup.string().required("Empty fills, Be sure to put in something"),
  });

  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(handleForm) });

  const onSubmmit = handleSubmit(async (value) => {
    console.log("Success");
    const { message } = value;
    const URL: string = `https://school-code.onrender.com/api/report/${user._id}/create--report`;

    await axios
      .post(URL, { message })
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log("From Catch", error);
      });
  });

  const [rep, setRep] = useState("");
  const [view, setView] = useState(false);
  const [show, setShow] = useState(false);
  const [myProps, setMyProps] = useState({} as any);
  const [name, setName] = useState("");

  const toggle = () => {
    setView(!view);
  };

  useEffect(() => {
    getAllReport();
  }, []);

  return (
    <>
      {" "}
      {view && rep !== "" ? (
        <ReportForm
          toggle={toggle}
          rep={rep}
          myProps={myProps}
          buttonCall="Update Report Status"
          show={show}
          check={false}
          setName={setName}
          name={name}
        />
      ) : null}
      <Container>
        <Wrapper>
          <BoardCard>
            <BoardHold>
              <ReportTitle>All Report so far! </ReportTitle>

              <NoticeHold>
                {getReport?.map((props) => (
                  <NoticeData key={props._id}>
                    {props.status === "not seen" ? (
                      <Div bg="red">unseen</Div>
                    ) : props.status === "seen" ? (
                      <Div bg="orange">unseen</Div>
                    ) : props.status === "done" ? (
                      <Div bg="green">done</Div>
                    ) : null}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <NoticeDate>
                        {" "}
                        {moment(props.createdAt).format("MMMM Do YYYY")}{" "}
                      </NoticeDate>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setRep(props._id);
                          setMyProps(props);
                          toggle();
                        }}
                      >
                        Edit
                      </div>
                    </div>
                    <NoticeMessage> {props.message} </NoticeMessage>
                    <br />
                    <div style={{ fontSize: "11px", marginBottom: "10px" }}>
                      Sent By: {props.senderName}
                      <strong> ({props.who})</strong>
                    </div>
                  </NoticeData>
                ))}
              </NoticeHold>
            </BoardHold>
          </BoardCard>
        </Wrapper>
      </Container>
    </>
  );
};

export default Report;

const Div = styled.div<{ bg: string }>`
  background-color: ${({ bg }) => bg};
  color: white;
  font-size: 12px;
  width: 70px;
  display: flex;
  justify-content: center;
  border-radius: 2px;
`;

const Container = styled.div`
  /* width: 100%; */
  width: calc(100vw - 230px);
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  background-color: #f7f9fc;
  /* background-color: gold; */
  overflow: hidden;
  position: absolute;
  right: 0px;
  // top: 50px;
  padding-top: 60px;
  @media screen and (max-width: 1100px) {
    width: 95%;
  }
  @media screen and (max-width: 1005px) {
    width: 100%;
  }

  /* background-color: #352b1e; */
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MakeReport = styled.div`
  height: 300px;
  width: 95%;
  background-color: #fff;
  margin: 20px 0;

  @media (max-width: 500px) {
    height: 300px;
  }
`;
const MakeReportHold = styled.form`
  padding: 20px;
`;
const Title = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;

const InputHold = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Inputt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  textarea {
    height: 100px;
    width: 100%;
    font-family: poppins;
    border: 1px solid #1da1f2;
    color: #6d6d6e;
    border-radius: 3px;
    font-size: 13px;
    font-weight: 600;
    resize: none;
    padding-left: 10px;
    ::placeholder {
      color: #a6c4e4;
    }

    @media (max-width: 500px) {
      margin-bottom: 10px;
    }
  }
  label {
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 3px;
  }
`;

const ButtonHold = styled.div`
  button {
    height: 40px;
    width: 100%;
    margin-top: 15px;
    font-family: poppins;
    border: 1px solid;
    /* color: #1DA1F2; */
    color: #fff;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 600;
    background-color: #1da1f2;
    cursor: pointer;
    margin-right: 10px;
    transition: all 350ms;

    :hover {
      transform: scale(0.98);
    }

    @media (max-width: 500px) {
      height: 40px;
      width: 100px;
      font-size: 12px;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

const BoardCard = styled.div`
  width: 95%;
  background-color: #fff;
  margin: 30px 0;
`;
const BoardHold = styled.div`
  padding: 30px;
`;
const ReportTitle = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;

const NoticeHold = styled.div``;
const NoticeData = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 10px;
`;
const NoticeDate = styled.div`
  height: 30px;
  width: 120px;
  background-color: #40dfcd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  font-size: 10px;
  color: #fff;
  font-weight: 600;
  margin-bottom: 15px;
`;
const NoticeMessage = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
`;
const SenderDate = styled.div`
  font-size: 11px;
  margin-bottom: 20px;
`;
