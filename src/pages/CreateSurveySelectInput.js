import React from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

function CreateSurveySelectInput() {
  return (
    <RootContainer>
      <LeftContainer>
        <LeftItemContainer>
          <InputBox type="text" placeholder="  1.Select input 설문조사 질문" />
          <InputBox type="text" placeholder="  미리보기 입니다." />
          <AddOptionButton>옵션 추가하기</AddOptionButton>
        </LeftItemContainer>
        <button>+ 질문 추가하기</button>
      </LeftContainer>
      <RightContainer>
        <RightItemContainer>
          <Sidebar />
        </RightItemContainer>
      </RightContainer>
    </RootContainer>
  );
}

export default CreateSurveySelectInput;

const LeftItemContainer = styled.div`
  /* border: 3px solid black; */
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const RightItemContainer = styled.div`
  padding: 119px 24px;
`;

const AddOptionButton = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  width: 92px;
  height: 24px;
  font-size: 14px;
  text-decoration: underline;
`;

const InputBox = styled.input`
  display: block;
  width: 50vw;
  font-family: inherit;
  padding: 0 0 8px;
  font-size: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: rgb(145 213 255 / 30%) 0px 1px;
  -webkit-text-fill-color: rgba(145, 213, 255, 1);
`;

const RightContainer = styled.div`
  /* border: 3px solid gold; */
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const LeftContainer = styled.div`
  /* border: 3px solid green; */
  /* width: 80vw; */
  /* display: flex; */
  /* justify-content: center; */
  align-items: center;
  /* flex-direction: column; */
  gap: 5vw;
  background: linear-gradient(180deg, #69c0ff 0%, #6993ff 100%);

  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
`;

const RootContainer = styled.div`
  /* border: 3px solid red; */
  display: flex;
  width: 100%;
  height: 100vh;
`;
