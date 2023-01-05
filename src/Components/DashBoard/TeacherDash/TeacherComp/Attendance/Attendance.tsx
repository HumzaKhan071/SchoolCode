import React from "react";
import styled from "styled-components";
import AttendanceTable from "./AttendanceTable";

const Attendance = () => {
  return (
    <Container>
      <Wrapper>
        <AttendMarker>
          <MarkerHold>
            <Title>Student Attendance</Title>
            <InputHold>
              <Inputt>
                <label>Select Student</label>
                <select name="" id="">
                  <option value="DEFAULT" disabled hidden>
                    Select Student
                  </option>
                  <option value="">James</option>
                  <option value="">John</option>
                  <option value="">Kunle</option>
                </select>
              </Inputt>
              <Inputt>
                <label>Attendance Present/Absent</label>
                <select name="" id="">
                  <option value="DEFAULT" disabled hidden>
                    Attendance
                  </option>
                  <option value="">Present</option>
                  <option value="">Absent</option>
                </select>
              </Inputt>
            </InputHold>
            <ButtonHold>
              <button
                style={{
                  backgroundColor: "#1DA1F2",
                }}
              >
                Save
              </button>
              <button
                style={{
                  backgroundColor: "#123456",
                }}
              >
                Reset
              </button>
            </ButtonHold>
          </MarkerHold>
        </AttendMarker>
        <AttendanceTable />
      </Wrapper>
    </Container>
  );
};

export default Attendance;

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
`;
const AttendMarker = styled.div`
  height: 200px;
  width: 100%;
  background-color: #fff;
  margin: 20px 0;

  @media (max-width: 500px) {
    height: 300px;
  }
`;
const MarkerHold = styled.div`
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
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  select {
    height: 40px;
    width: 200px;
    font-family: poppins;
    border: 1px solid #dddddd;
    color: #6d6d6e;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
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
    width: 120px;
    margin-top: 15px;
    font-family: poppins;
    border: 1px solid #dddddd;
    /* color: #6d6d6e; */
    color: #fff;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 600;
    background-color: transparent;
    cursor: pointer;
    margin-right: 10px;
    @media (max-width: 500px) {
      height: 40px;
      width: 100px;
      font-size: 12px;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;
