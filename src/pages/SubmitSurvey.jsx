import React, { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import SelectSurvey from "../components/SelectSurvey";
import InputSurvey from "../components/InputSurvey";
import SelectAnswer from "../components/SelectAnswer";
import Step from "../components/Step";
import styled from "styled-components";
import SurveyTitle from "../components/SurveyTitle";
import RadioInput from "../components/RadioInput";
import { Button, Input, DatePicker, Form, message } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import NextButton from "../components/NextButton";
import moment from "moment";
const dateFormat = "YYYY-MM-DD";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubmitSurveyContainer = styled.div`
  width: 72%;
  height: 72%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 120px 100px;
  gap: 60px;
  background: linear-gradient(180deg, #69c0ff 0%, #6993ff 100%);
  border-radius: 8px;
`;

function SubmitSurvey({}) {
  const [isLoading, setIsLoading] = useState(true);
  const [surveyList, setSurveyList] = useState([]);
  const [surveyIdx, setSurveyIdx] = useState(0);
  const [page, setPage] = useState(0);
  const [inputFormData, setInputFormData] = useState([]);

  React.useEffect(() => {
    const surveyListString = localStorage.getItem("surveyList");
    if (surveyListString !== null) {
      const surveyList = JSON.parse(surveyListString);
      setSurveyList(surveyList);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (surveyList[surveyIdx]?.formData) {
      console.log("useEffect", surveyList[surveyIdx], surveyList[surveyIdx].formData.length);
      setInputFormData(new Array(surveyList[surveyIdx].formData.length).fill(null));
    }
  }, [surveyIdx, surveyList]);

  React.useEffect(() => {
    console.log("inputFormData?", inputFormData);
  }, [inputFormData]);

  const nextPage = (e) => {
    // TODO: 질문 개수에 따라, 마지막 설문 제출시 alert 호출, Button(제출하기) 렌더링
    setPage(page + 1);
  };

  useEffect(() => {
    console.log(page);
  }, [page]);

  if (isLoading) {
    return <Loading />;
  }

  if (surveyList.length === 0) {
    message.info("설문 리스트가 없습니다.");
    return <Navigate replace to="/" />;
  }

  if (surveyList[surveyIdx].formData.length === 0) {
    message.info("FORM이 없습니다.");
    return <Navigate replace to="/" />;
  }

  const onChangeDateHandler = (date, dateString) => {
    setInputFormData((prev) => {
      const newPrev = [...prev];
      newPrev[page - 1] = dateString;
      return newPrev;
    });
  };

  const onChangeTextHandler = (e) => {
    const value = e.target.value;
    setInputFormData((prev) => {
      const newPrev = [...prev];
      newPrev[page - 1] = value;
      return [...newPrev];
    });
  };

  const onChangeSelectHandler = (value) => {
    setInputFormData((prev) => {
      const newPrev = [...prev];
      newPrev[page - 1] = value;
      return newPrev;
    });
  };

  const onChangeRadioHandler = (value) => {
    setInputFormData((prev) => {
      const newPrev = [...prev];
      newPrev[page - 1] = value;
      return newPrev;
    });
  };

  if (page === 0) {
    return (
      <Container>
        <SubmitSurveyContainer>
          <SurveyTitle>설문을 선택하세요</SurveyTitle>
          <SelectSurvey props={surveyList} setSurveyIdx={setSurveyIdx} nextPage={nextPage} />
          <Button size="large" onClick={() => nextPage()}>
            <CheckOutlined />
            선택하기
          </Button>
        </SubmitSurveyContainer>
      </Container>
    );
  } else {
    const submitData = surveyList[surveyIdx].formData;

    const inputType = submitData[page - 1].answer.inputType;
    const question = submitData[page - 1].question;
    const completionNotice = surveyList[surveyIdx].completionNotice;
    const isRequired = submitData[page - 1].isRequired;
    switch (inputType) {
      case "text":
        console.log("inputFormData?", inputFormData[page - 1]);
        return (
          <Container>
            <SubmitSurveyContainer>
              <Step submitData={submitData} page={page} setPage={setPage} />
              <SurveyTitle>{question}</SurveyTitle>
              <Form>
                <Form.Item
                  name={["user", "introduction"]}
                  rules={[
                    {
                      type: "string",
                      min: 1,
                      max: 20
                    },
                    {
                      required: true
                    }
                  ]}>
                  <Input size="large" defaultValue={inputFormData[page - 1]} onChange={onChangeTextHandler} style={{ width: 500 }}></Input>
                </Form.Item>
              </Form>
              <NextButton
                page={page}
                completionNotice={completionNotice}
                nextPage={nextPage}
                submitData={submitData}
                setPage={setPage}
                inputFormData={inputFormData}
              />
            </SubmitSurveyContainer>
          </Container>
        );
      case "select":
        const answerSelect = submitData[page - 1].answer.inputOptions;
        const selectInputFormData = inputFormData[page - 1] || "default";
        return (
          <Container>
            <SubmitSurveyContainer>
              <Step submitData={submitData} page={page} setPage={setPage} />
              <SurveyTitle>{question}</SurveyTitle>
              <SelectAnswer
                props={answerSelect}
                selectInputFormData={selectInputFormData}
                setInputFormData={setInputFormData}
                onChangeSelectHandler={onChangeSelectHandler}
              />
              <NextButton
                page={page}
                completionNotice={completionNotice}
                nextPage={nextPage}
                submitData={submitData}
                setPage={setPage}
                inputFormData={inputFormData}
              />
            </SubmitSurveyContainer>
          </Container>
        );
      case "date":
        const selectedDate = inputFormData[page - 1] === null || inputFormData[page - 1] === "" ? new Date() : inputFormData[page - 1];
        return (
          <Container>
            <SubmitSurveyContainer>
              <Step submitData={submitData} page={page} setPage={setPage} />
              <SurveyTitle>{question}</SurveyTitle>
              <DatePicker size="large" defaultValue={moment(selectedDate, dateFormat)} format={dateFormat} onChange={onChangeDateHandler} />
              <NextButton
                page={page}
                completionNotice={completionNotice}
                nextPage={nextPage}
                submitData={submitData}
                setPage={setPage}
                inputFormData={inputFormData}
              />
            </SubmitSurveyContainer>
          </Container>
        );
      case "radio":
        const radioArrayData = submitData[page - 1].answer.inputOptions;
        const radioInputFormData = inputFormData[page - 1] || -1;
        console.log("radioInputFormData", radioInputFormData);
        return (
          <RadioInput
            page={page}
            completionNotice={completionNotice}
            radioInputFormData={radioInputFormData}
            nextPage={nextPage}
            submitData={submitData}
            setPage={setPage}
            inputFormData={inputFormData}
            radioArrayData={radioArrayData}
            onChangeRadioHandler={onChangeRadioHandler}
          />
        );
      default:
        return <Navigate replace to="/" />;
    }
  }
}

export default SubmitSurvey;
