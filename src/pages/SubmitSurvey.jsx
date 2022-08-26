import React, { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import SelectSurvey from "../components/SelectSurvey";
import SelectAnswer from "../components/SelectAnswer";
import styled from "styled-components";
import SurveyTitle from "../components/SurveyTitle";
import RadioInput from "../components/RadioInput";
import { Button, Input, DatePicker, Form } from "antd";
import { CheckOutlined } from "@ant-design/icons";
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

function SubmitSurvey({ surveyData, setSurveyData }) {
  const navigate = useNavigate();

  const [surveyList, setSurveyList] = useState(surveyData);
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(0);
  const [surveyIdx, setSurveyIdx] = useState(0);
  const [selectSurveyIdx, setSelectSurveyIdx] = useState(-1);
  const [textSurveyData, setTextSurveyData] = useState("");
  const [dateSurveyData, setDateSurveyData] = useState("");
  const [radioSurveyIdx, setRadioSurveyIdx] = useState(-1);

  // React.useEffect(() => {
  //   const test = JSON.stringify({
  //     selectSurveyIdx,
  //     textSurveyData,
  //     dateSurveyData,
  //     radioSurveyIdx
  //   });
  //   console.log(test);
  //   // localStorage.setItem(
  //   //   "test",
  //   //   JSON.stringify({
  //   //     selectSurveyIdx,
  //   //     textSurveyData,
  //   //     dateSurveyData,
  //   //     radioSurveyIdx
  //   //   })
  //   // );
  // }, [selectSurveyIdx, textSurveyData, dateSurveyData, radioSurveyIdx]);

  const nextPage = (e) => {
    // TODO: 질문 개수에 따라, 마지막 설문 제출시 alert 호출, Button(제출하기) 렌더링
    // const test = e.target.value;
    // console.log("prevPage", test);
    // setInputSubmitData((prev) => [...prev]);
    setPage(page + 1);
  };
  const prevPage = (e) => {
    setPage(page - 1);
  };

  useEffect(() => {
    console.log(page);
  }, [page]);

  let list = null;
  useEffect(() => {
    setIsLoading(true);
    const getSurveyList = () => {
      for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue;
        }
        // TODO: LocalStorage에 저장할 key에 따라서 수정
        if (key.slice(0, 6) === "survey") {
          const res = localStorage.getItem(key) || "{}";
          const json = JSON.parse(res);
          if (list === null) {
            list = [json];
          } else {
            list = [...list, json];
          }
          setSurveyList(list);
        }
      }
    };
    getSurveyList();
    setIsLoading(false);
  }, []);

  const onChangeDateHandler = (date, dateString) => {
    setDateSurveyData(dateString);
  };

  if (isLoading) {
    return <Loading />;
  }
  console.log(surveyList[surveyIdx]);

  if (page > 4) {
    return <Navigate replace to="/" />;
  }

  if (page === 0) {
    return (
      <Container>
        <SubmitSurveyContainer>
          <SurveyTitle>설문을 선택하세요</SurveyTitle>
          <SelectSurvey props={surveyList} setSurveyIdx={setSurveyIdx} />
          <Button size="large" onClick={() => nextPage()}>
            <CheckOutlined />
            선택하기
          </Button>
        </SubmitSurveyContainer>
      </Container>
    );
  } else {
    const inputType = surveyList[surveyIdx].formData[page - 1].answer.inputType;
    const question = surveyList[surveyIdx].formData[page - 1].question;
    const isRequired = surveyList[surveyIdx].formData[page - 1].isRequired;
    if (isRequired === false) {
      nextPage();
    }
    console.log(inputType);
    switch (inputType) {
      case "text":
        return (
          <Container>
            <SubmitSurveyContainer>
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
                  <Input size="large" value={textSurveyData} onChange={setTextSurveyData} style={{ width: 500 }}></Input>
                </Form.Item>
              </Form>
              <Button size="large" onClick={() => nextPage()}>
                <CheckOutlined />
                다음
              </Button>
            </SubmitSurveyContainer>
          </Container>
        );
      case "select":
        const answerSelect = surveyList[surveyIdx].formData[page - 1].answer.inputOptions;
        console.log(answerSelect);
        return (
          <Container>
            <SubmitSurveyContainer>
              <SurveyTitle>{question}</SurveyTitle>
              <SelectAnswer props={answerSelect} setSelectSurveyIdx={setSelectSurveyIdx} />
              <Button size="large" onClick={() => nextPage()}>
                <CheckOutlined />
                다음
              </Button>
            </SubmitSurveyContainer>
          </Container>
        );
      case "date":
        const selectedDate =
          surveyList[surveyIdx].formData[page - 1].answer.inputOptions === ""
            ? new Date()
            : surveyList[surveyIdx].formData[page - 1].answer.inputOptions;

        return (
          <Container>
            <SubmitSurveyContainer>
              <SurveyTitle>{question}</SurveyTitle>
              <DatePicker size="large" defaultValue={moment(selectedDate, dateFormat)} format={dateFormat} onChange={onChangeDateHandler} />
              <Button size="large" onClick={() => nextPage()}>
                <CheckOutlined />
                다음
              </Button>
            </SubmitSurveyContainer>
          </Container>
        );
      case "radio":
        const radioArrayData = surveyList[surveyIdx].formData[page - 1].answer.inputOptions;
        return <RadioInput nextPage={nextPage} radioArrayData={radioArrayData} />;
      default:
        return <Navigate replace to="/" />;
    }
  }
}

export default SubmitSurvey;
