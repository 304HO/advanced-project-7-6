import React from "react";
import ContentBackground from "../components/ContentBackground";
import styled from "styled-components";
import { Button } from "antd";
import { ReactComponent as Icon } from "./../assets/images/checkList.svg";

import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const StyledArticle = styled.article`
  position: relative;
  padding: 15em;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const StyledH1 = styled.h1`
  display: flex;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 160%;
  justify-content: center;
  margin-bottom: 2em;
  font-family: "Spoqa Han Sans Neo";
  color: var(--color--primary--blue--bl1);
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  & > button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3px;
    padding: 8px 24px;
    width: 122px;
    height: 44px;
    border: none;
    border-radius: 2px;
  }

  & > :first-child {
    background-color: var(--color--primary--blue--bl10);
    color: var(--color--primary--blue--bl1);
  }
  & > :last-child {
    background-color: var(--color--primary--blue--bl1);
    color: var(--color--primary--blue--bl10);
  }
`;

function Main() {
  const navigate = useNavigate();

  const onClickNavigateHandler = (path: string) => {
    navigate(path);
  };
  return (
    <>
      <ContentBackground>
        <StyledArticle>
          <div>
            <StyledH1>설문조사를 생성 또는 작동할 수 있습니다.</StyledH1>
            <StyledButtons>
              <Button onClick={() => onClickNavigateHandler("/CreateSurveyDefault")}>생성하기</Button>
              <Button onClick={() => onClickNavigateHandler("/SubmitSurvey")}>작성하기</Button>
            </StyledButtons>
          </div>
          <Icon></Icon>
        </StyledArticle>
      </ContentBackground>
    </>
  );
}

export default Main;
