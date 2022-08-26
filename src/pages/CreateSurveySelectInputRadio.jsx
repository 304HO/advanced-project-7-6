import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import { Radio } from "antd";
import ContentBackground from "../components/ContentBackground";
import RadioOptionModal from "../components/RadioOptionModal";

function CreateSurveySelectInputRadio({ surveyData, setSurveyData }) {
  // const selectFormData = surveyData.formData[3];
  const [optionsData, setOptionsData] = React.useState([""]);
  const [open, setOpen] = React.useState(false);

  const [isRequired, setIsRequired] = useState(false);
  const [question, setQuestion] = useState("");

  const onClose = (type) => {
    setOpen(false);
  };

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
            inputType: "radio",
            inputOptions: optionsData
          }
        });
        return newPrev;
      });
  };

  return (
    <>
      <RootContainer>
        <ContentBackground>
          <LeftContainer>
            <LeftItemContainer>
              <InputBox
                onChange={(e) => setQuestion(e.target.value)}
                value={question}
                type="text"
                placeholder="  2. Radio 설문조사 제목을 입력해주세요."
              />
              <Radio.Group size="large" name="radiogroup" defaultValue={1} buttonStyle="solid">
                {optionsData.map((item, idx) => {
                  return (
                    <Radio.Button style={{ width: "40%", margin: 2 }} key={idx} value={idx}>
                      <ButtonWrap>
                        <IdxContainer>{idx + 1}</IdxContainer>
                        {item}
                      </ButtonWrap>
                    </Radio.Button>
                  );
                })}
              </Radio.Group>
            </LeftItemContainer>
            <AddOptionButton onClick={() => setOpen(true)}>옵션 추가하기</AddOptionButton>
            <button onClick={onClickAddForm}>+ 질문 추가하기</button>
          </LeftContainer>
          <RightContainer>
            <RightItemContainer>
              <Sidebar checked={isRequired} requiredCheckHandler={requiredCheckHandler} />
            </RightItemContainer>
          </RightContainer>
        </ContentBackground>
      </RootContainer>
      <RadioOptionModal open={open} onClose={onClose} optionsData={optionsData} setOptionsData={setOptionsData}></RadioOptionModal>
    </>
  );
}

export default CreateSurveySelectInputRadio;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const IdxContainer = styled.div`
  display: flex;
  border: solid 2px;
  border-radius: 20%;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
`;

const AddOptionButton = styled.div`
  outline: none;
  background-color: transparent;
  border: none;
  width: 92px;
  height: 24px;
  font-size: 14px;
  text-decoration: underline;
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
  /* height: 100vh; */
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
