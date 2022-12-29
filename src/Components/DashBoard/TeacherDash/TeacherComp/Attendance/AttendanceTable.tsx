import React from "react";
import styled from "styled-components";
import { GoCheck } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { BsCheckLg } from "react-icons/bs";

const AttendanceTable = () => {
  // const attendanceData = [
  //     {
  //         id: 1,
  //         name: "Olorunda Samuel",

  //     }s
  // ]

  return (
    <Container>
      <Wrapper>
        <Title>Attendence Sheet Of Class One: Section A, April 2019</Title>
        <Table>
          <table>
            <tr>
              <th>Students</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
            </tr>
            <tr>
              <td>Olorunda Samuel</td>
              <td>
                {" "}
                <BsCheckLg color="green" />
              </td>
              <td>
                {" "}
                <BsCheckLg color="green" />{" "}
              </td>
              <td>
                {" "}
                <ImCross color="red" />{" "}
              </td>
              <td>
                {" "}
                <BsCheckLg color="green" />{" "}
              </td>
              <td>
                {" "}
                <BsCheckLg color="green" />
              </td>
              <td>
                {" "}
                <BsCheckLg color="green" />{" "}
              </td>
              <td>
                {" "}
                <BsCheckLg color="green" />{" "}
              </td>
              <td>
                {" "}
                <BsCheckLg color="green" />{" "}
              </td>
              <td>
                {" "}
                <ImCross color="red" />{" "}
              </td>
              <td>
                {" "}
                <BsCheckLg color="green" />{" "}
              </td>
            </tr>
            <tr>
              <td>Jacob Kofo</td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <ImCross color="red" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <ImCross color="red" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
            </tr>
            <tr>
              <td>Jide Mike</td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <ImCross color="red" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <ImCross color="red" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
            </tr>
            <tr>
              <td>Wilians Kunle</td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
            </tr>
            <tr>
              <td>Jerry Omowumi</td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <ImCross color="red" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <ImCross color="red" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
              <td>
                <BsCheckLg color="green" />
              </td>
            </tr>
          </table>
        </Table>
      </Wrapper>
    </Container>
  );
};

export default AttendanceTable;

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
`;
const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;
const Table = styled.div`
  overflow-x: auto;
  font-size: 13px;
  table,
  th,
  td {
    border: 1px solid lightgray;
    border-collapse: collapse;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  th,
  td {
    padding: 3px 10px;
  }
`;
