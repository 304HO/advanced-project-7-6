import React from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import { DatePicker } from "antd";
import moment from "moment";
import ContentBackground from "../components/ContentBackground";

const dateFormat = "YYYY-MM-DD";

function CreateSurveySelectInputDatePicker({ surveyData, setSurveyData }) {
  const selectFormData = surveyData.formData[2];
  const selectedDate = selectFormData.answer.inputOptions === "" ? new Date() : selectFormData.answer.inputOptions;
  function onChange(date, dateString) {
    setSurveyData &&
      setSurveyData((prev) => {
        const newPrev = { ...prev };
        newPrev.formData[2].answer.inputOptions = dateString;
        return newPrev;
      });
  }

  const requiredCheckHandler = (isRequired) => {
    setSurveyData &&
      setSurveyData((prev) => {
        const newPrev = { ...prev };
        newPrev.formData[2].isRequired = isRequired;
        return newPrev;
      });
  };

  const onChangeInputHandler = (e) => {
    const question = e.target.value;
    setSurveyData &&
      setSurveyData((prev) => {
        const newPrev = { ...prev };
        newPrev.formData[2].question = question;
        return newPrev;
      });
  };

  return (
    <RootContainer>
      <ContentBackground>
        <LeftContainer>
          <LeftItemContainer>
            <InputBox
              onChange={onChangeInputHandler}
              value={selectFormData.question}
              type="text"
              placeholder="3. Datepicker 설문조사 제목을 입력해주세요."
            />
            <DatePicker defaultValue={moment(selectedDate, dateFormat)} format={dateFormat} onChange={onChange} />
          </LeftItemContainer>
          <button>+ 질문 추가하기</button>
        </LeftContainer>
        <RightContainer>
          <RightItemContainer>
            <Sidebar checked={selectFormData.isRequired} requiredCheckHandler={requiredCheckHandler} />
          </RightItemContainer>
        </RightContainer>
      </ContentBackground>
    </RootContainer>
  );
}

export default CreateSurveySelectInputDatePicker;

const LeftItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const RightItemContainer = styled.div`
  padding: 119px 24px;
  height: 100%;
  background-color: white;
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
  align-items: center;
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
