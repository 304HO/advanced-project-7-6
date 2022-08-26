import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { defaultSurveyDataTypes } from "../common/constants";
import ContentBackground from "../components/ContentBackground";

type CreateSurveyDefaultProps = {
  surveyData: any;
  setSurveyData: any;
};

function CreateSurveyDefault({ surveyData, setSurveyData }: CreateSurveyDefaultProps) {
  const navigator = useNavigate();
  const createsurvey = () => {
    navigator("/CreateSurveySelectInput");
  };
  const onChangehandler = (type: string, inputValue: string) => {
    if (type === "title") {
      setSurveyData((prev: any) => ({ ...prev, title: inputValue }));
    }
    if (type === "description") {
      setSurveyData((prev: any) => ({ ...prev, description: inputValue }));
    }
  };

  return (
    <RootContainer>
      <ContentBackground>
        <LeftContainer>
          <LeftItemContainer>
            <InputBox onChange={(e) => onChangehandler("title", e.target.value)} value={surveyData.title} type="text" placeholder="  문서 제목" />
            <InputBox
              onChange={(e) => onChangehandler("description", e.target.value)}
              value={surveyData.description}
              type="text"
              placeholder="  문서 설명"
            />
          </LeftItemContainer>
          <button onClick={() => createsurvey()}>+ 설문조사 생성하기</button>
          <div>Enter키를 눌러주세요 </div>
        </LeftContainer>
      </ContentBackground>
    </RootContainer>
  );
}

export default CreateSurveyDefault;

const LeftItemContainer = styled.div`
  /* border: 3px solid black; */
  display: flex;
  flex-direction: column;
  gap: 60px;
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
