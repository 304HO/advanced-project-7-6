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

  React.useEffect(() => {
    const surveyListString = localStorage.getItem("surveyList");
    const surveyList = JSON.parse(surveyListString);
    console.log("surveyListString2", surveyList);
    if (surveyListString !== null) setSurveyList(surveyList);
    setIsLoading(false);
  }, []);

  const nextPage = (e) => {
    // TODO: 질문 개수에 따라, 마지막 설문 제출시 alert 호출, Button(제출하기) 렌더링
    setPage(page + 1);
  };

  useEffect(() => {
    console.log(page);
  }, [page]);

  let list = null;
  // useEffect(() => {
  //   setIsLoading(true);
  //   const getSurveyList = () => {
  //     for (let key in localStorage) {
  //       if (!localStorage.hasOwnProperty(key)) {
  //         continue;
  //       }
  //       // TODO: LocalStorage에 저장할 key에 따라서 수정
  //       if (key.slice(0, 6) === "survey") {
  //         const res = localStorage.getItem(key) || "{}";
  //         const json = JSON.parse(res);
  //         if (list === null) {
  //           list = [json];
  //         } else {
  //           list = [...list, json];
  //         }
  //         setSurveyList(list);
  //       }
  //     }
  //   };
  //   getSurveyList();
  //   setIsLoading(false);
  // }, []);

  // const onChangeDateHandler = (date, dateString) => {
  //   setDateSurveyData(dateString);
  // };

  if (isLoading) {
    return <Loading />;
  }
  console.log("message, surveyList", surveyList, surveyIdx);

  if (surveyList.length === 0) {
    message.info("설문 리스트가 없습니다.");
    return <Navigate replace to="/" />;
  }

  if (page > surveyList[surveyIdx].formData.length) {
    message.info("설문을 제출했습니다. 감사합니다.");
    return <Navigate replace to="/" />;
  }

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
    const isRequired = submitData[page - 1].isRequired;
    switch (inputType) {
      case "text":
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
                  <Input size="large" style={{ width: 500 }}></Input>
                </Form.Item>
              </Form>
              <NextButton page={page} nextPage={nextPage} submitData={submitData} setPage={setPage} />
            </SubmitSurveyContainer>
          </Container>
        );
      case "select":
        const answerSelect = submitData[page - 1].answer.inputOptions;
        console.log(answerSelect);
        return (
          <Container>
            <SubmitSurveyContainer>
              <Step submitData={submitData} page={page} setPage={setPage} />
              <SurveyTitle>{question}</SurveyTitle>

              <SelectAnswer props={answerSelect} />
              <NextButton page={page} nextPage={nextPage} submitData={submitData} setPage={setPage} />
            </SubmitSurveyContainer>
          </Container>
        );
      case "date":
        const selectedDate = submitData[page - 1].answer.inputOptions === "" ? new Date() : submitData[page - 1].answer.inputOptions;

        return (
          <Container>
            <SubmitSurveyContainer>
              <Step submitData={submitData} page={page} setPage={setPage} />
              <SurveyTitle>{question}</SurveyTitle>
              {/* <DatePicker size="large" defaultValue={moment(selectedDate, dateFormat)} format={dateFormat} onChange={onChangeDateHandler} /> */}
              <DatePicker size="large" />
              <NextButton page={page} nextPage={nextPage} submitData={submitData} setPage={setPage} />
            </SubmitSurveyContainer>
          </Container>
        );
      case "radio":
        const radioArrayData = submitData[page - 1].answer.inputOptions;
        return <RadioInput nextPage={nextPage} radioArrayData={radioArrayData} />;
      default:
        return <Navigate replace to="/" />;
    }
  }
}

export default SubmitSurvey;
