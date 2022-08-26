import React from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import { DatePicker } from "antd";
import moment from "moment";
import ContentBackground from "../components/ContentBackground";
import PlusButton from "../components/PlusButton";
import MinusButton from "../components/MinusButton";

const dateFormat = "YYYY-MM-DD";

function CreateSurveySelectInputDatePicker({ surveyData, setSurveyData }) {
  const [selectedDate, setSelectedData] = React.useState(new Date());

  const [isRequired, setIsRequired] = React.useState(false);
  const [question, setQuestion] = React.useState("");

  const requiredCheckHandler = () => {
    setIsRequired((prev) => !prev);
  };

  const onChangeDateHandler = (date, dateString) => {
    setSelectedData(dateString);
  };

  const onClickAddForm = () => {
    setSurveyData &&
      setSurveyData((prev) => {
        const newPrev = { ...prev };
        newPrev.formData.push({
          question,
          isRequired,
          answer: {
            inputType: "date",
            inputOptions: selectedDate
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
              placeholder="3. Datepicker 설문조사 제목을 입력해주세요."
            />
            <DatePicker defaultValue={moment(selectedDate, dateFormat)} format={dateFormat} onChange={onChangeDateHandler} />
          </LeftItemContainer>
          <ButtonContainer>
            <MinusButton />
            <PlusButton onClick={onClickAddForm} />
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

export default CreateSurveySelectInputDatePicker;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 35px;
`;

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
