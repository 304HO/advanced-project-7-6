import React from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import ContentBackground from "../components/ContentBackground";
import PlusButton from "../components/PlusButton";
import MinusButton from "../components/MinusButton";

function CreateSurveySelectInputText({ surveyData, setSurveyData }) {
  const [isRequired, setIsRequired] = React.useState(false);
  const [question, setQuestion] = React.useState("");

  const requiredCheckHandler = () => {
    setIsRequired((prev) => !prev);
  };

  const onClickAddForm = () => {
    setSurveyData &&
      setSurveyData((prev) => {
        const newPrev = { ...prev };
        newPrev.formData.push({
          question,
          isRequired,
          answer: {
            inputType: "text",
            inputOptions: ""
          }
        });
        return newPrev;
      });
  };

  return (
    <RootContainer>
      <ContentBackground>
        <LeftContainer>
          <LeftItemContainer>
            <InputBox
              onChange={(e) => setQuestion(e.target.value)}
              value={question}
              type="text"
              placeholder="  2. Text input 설문조사 제목을 입력해주세요."
            />
            <InputBox type="text" placeholder="  미리보기 입니다." />
          </LeftItemContainer>
          <ButtonContainer>
            <MinusButton />
            <PlusButton />
          </ButtonContainer>
        </LeftContainer>
        <RightContainer>
          <RightItemContainer>
            <Sidebar checked={isRequired} requiredCheckHandler={requiredCheckHandler} />
          </RightItemContainer>
        </RightContainer>
      </ContentBackground>
    </RootContainer>
  );
}

export default CreateSurveySelectInputText;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 35px;
`;

const LeftItemContainer = styled.div`
  /* border: 3px solid black; */
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const RightItemContainer = styled.div`
  padding: 119px 24px;
  background-color: white;
  height: 100%;
`;

const InputBox = styled.input`
  display: block;
  width: 720px;
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
  width: 288px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const LeftContainer = styled.div`
  /* border: 3px solid green; */
  align-items: center;
  gap: 72px;
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
