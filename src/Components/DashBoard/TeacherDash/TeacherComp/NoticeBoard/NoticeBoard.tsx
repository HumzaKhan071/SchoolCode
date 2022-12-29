import React from "react";
import styled from "styled-components";

const NoticeBoard = () => {
  const data = [
    {
      id: 1,
      createdAt: "22 June 2022",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      createdBy: "Olorunda Samuel",
      createdAtTime: "5 months ago",
      bg: "#40dfcd",
    },
    {
      id: 2,
      createdAt: "22 September 2022",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      createdBy: "Olorunda Samuel",
      createdAtTime: "3 months ago",
      bg: "#FBD540",
    },
    {
      id: 3,
      createdAt: "28 December 2022",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      createdBy: "Olorunda Samuel",
      createdAtTime: "5 min ago",
      bg: "#F939A1",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <BoardCard>
          <BoardHold>
            <Title>Notice Board</Title>
            <Serarch>
              <Inputt>
                <label
                  style={{
                    color: "#8338ec",
                  }}
                >
                  Search By Date
                </label>
                <input type="search" placeholder="Search By Date" />
              </Inputt>
              <Inputt>
                <label
                  style={{
                    color: "#e76f51",
                  }}
                >
                  Search By Title
                </label>
                <input type="search" placeholder="Search By Title" />
              </Inputt>

              <button>Search</button>
            </Serarch>
            <NoticeHold>
              {data?.map((props) => (
                <NoticeData key={props.id}>
                  <NoticeDate
                    style={{
                      backgroundColor: `${props.bg}`,
                    }}
                  >
                    {" "}
                    {props.createdAt}{" "}
                  </NoticeDate>
                  <NoticeMessage> {props.message} </NoticeMessage>
                  <SenderDate>
                    <small> {props.createdBy} </small> /{" "}
                    <small> {props.createdAtTime} </small>
                  </SenderDate>
                </NoticeData>
              ))}
            </NoticeHold>
          </BoardHold>
        </BoardCard>
      </Wrapper>
    </Container>
  );
};

export default NoticeBoard;

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
  display: flex;
  justify-content: center;
`;

const BoardCard = styled.div`
  width: 95%;
  background-color: #fff;
  margin-top: 30px;
`;
const BoardHold = styled.div`
  padding: 30px;
`;
const Title = styled.div`
  font-weight: bold;
`;
const Serarch = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  align-items: flex-end;

  button {
    height: 40px;
    width: 120px;
    font-family: poppins;
    background-color: #1da1f2;
    color: #fff;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    margin-right: 10px;
    border: none;
    @media (max-width: 500px) {
      height: 40px;
      /* width: 100%; */
      font-size: 12px;
      /* margin-left: 10px; */
      margin-right: 10px;
    }
  }
`;

const Inputt = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  input {
    height: 40px;
    width: 200px;
    font-family: poppins;
    border: 1px solid #dddddd;
    color: #6d6d6e;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
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
const NoticeHold = styled.div``;
const NoticeData = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 10px;
`;
const NoticeDate = styled.div`
  height: 30px;
  width: 120px;
  /* background-color: #40dfcd; */
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
