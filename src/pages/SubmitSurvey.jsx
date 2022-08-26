import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import SelectSurvey from "../components/SelectSurvey";
import SelectAnswer from "../components/SelectAnswer";
import styled from "styled-components";
import SurveyTitle from "../components/SurveyTitle";
import RadioInput from "../components/RadioInput";
import { Icon, Button, Input, DatePicker } from "antd";

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

function SubmitSurvey() {
  const [surveyList, setSurveyList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(0);
  const [surveyIdx, setSurveyIdx] = useState(0);

  const nextPage = () => {
    // TODO: 질문 개수에 따라, 마지막 설문 제출시 alert 호출, Button(제출하기) 렌더링
    setPage(page + 1);
  };
  const prevPage = () => {
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

  if (isLoading) {
    return <Loading />;
  }
  console.log(surveyList[surveyIdx]);
  if (page === 0) {
    return (
      <Container>
        <SubmitSurveyContainer>
          <SurveyTitle>설문을 선택하세요</SurveyTitle>
          <SelectSurvey props={surveyList} setSurveyIdx={setSurveyIdx} />
          <Button size="large" onClick={() => nextPage()}>
            <Icon type="check" />
            선택하기
          </Button>
        </SubmitSurveyContainer>
      </Container>
    );
  } else {
    const inputType = surveyList[surveyIdx].formData[page - 1].answer.inputType;
    const question = surveyList[surveyIdx].formData[page - 1].question;

    switch (inputType) {
      case "text":
        return (
          <Container>
            <SubmitSurveyContainer>
              <SurveyTitle>{question}</SurveyTitle>
              <Input size="large" style={{ width: 500 }}></Input>
              <Button size="large" onClick={() => nextPage()}>
                <Icon type="check" />
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
              <SelectAnswer props={answerSelect} setSurveyIdx={setSurveyIdx} />
              <Button size="large" onClick={() => nextPage()}>
                <Icon type="check" />
                다음
              </Button>
            </SubmitSurveyContainer>
          </Container>
        );
      case "date":
        return (
          <Container>
            <SubmitSurveyContainer>
              <SurveyTitle>{question}</SurveyTitle>
              <DatePicker size="large" />
              <Button size="large" onClick={() => nextPage()}>
                <Icon type="check" />
                다음
              </Button>
            </SubmitSurveyContainer>
          </Container>
        );
      case "radio":
        return <RadioInput nextPage={nextPage} />;
    }
  }
}

export default SubmitSurvey;
