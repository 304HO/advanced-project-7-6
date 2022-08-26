import React from "react";
import "../App.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Button } from "antd";

const StyledHeader = styled.header`
  position: fixed;
  height: 80px;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-duration: 0.8s;
  box-shadow: 0 1px 5px gray;
  background: white;
`;

const StyledText = styled.p`
  margin: 0 auto;
  font-size: 2.5em;
  color: var(--Secondary--Grayscale--G9);
  font-family: "Spoqa Han Sans Neo";
`;
const StyledAntdButton = styled(Button)<{ visibility?: string } & any>`
  visibility: ${(props) => (props.visibility === "hidden" ? "hidden" : "none")};
  /* visibility: none; */
  background-color: var(--Secondary--Grayscale--G9);
  border-color: var(--Secondary--Grayscale--G9);
  border-radius: 8px;
  width: 6em;
  margin: 0 1em;
  justify-content: center;
  align-items: center;
  display: flex;
  &:hover,
  :focus {
    color: #fff;
    background-color: gray;
    border-color: gray;
  }
`;

const StyledBackButton = styled.button`
  border: none;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1em;
  width: 6em;
`;

type HeaderProps = {
  visibility?: string;
  surveyData?: any;
};

function Header({ surveyData }: HeaderProps) {
  const navigate = useNavigate();
  console.log("surveyData", surveyData);
  const onClickBackButtonHandler = () => {
    navigate(-1);
  };
  const visibility = surveyData !== undefined ? "none" : "hidden";
  const onClickSubmitHandler = (surveyData: any) => {
    localStorage.setItem("surveyData", JSON.stringify(surveyData));
    navigate("/");
  };
  return (
    <StyledHeader>
      <StyledBackButton onClick={onClickBackButtonHandler}>
        <RiArrowGoBackFill size={"1.8em"}></RiArrowGoBackFill>
      </StyledBackButton>
      <StyledText>{`설문 조사 제목`}</StyledText>
      <StyledAntdButton onClick={() => onClickSubmitHandler(surveyData)} visibility={visibility} type="primary" size={"large"}>
        생성 완료
      </StyledAntdButton>
    </StyledHeader>
  );
}

export default Header;
