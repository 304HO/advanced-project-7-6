import React from "react";

const mockData1 = {
  title: "테스트 설문 타이틀 2",
  description: "5분만 시간을 내서 설문에 참여해주시면 감사하겠습니다.",
  formData: [
    {
      question: "당신의 이름은 무엇입니까?",
      isRequired: true,
      answer: {
        inputType: "text"
      }
    },
    {
      question: "팀에 참여한 인원은 몇 명입니까?",
      isRequired: true,
      answer: {
        inputType: "select",
        inputOptions: [
          {
            label: "1명",
            value: 1
          },
          {
            label: "2명",
            value: 2
          }
        ]
      }
    }
  ],
  completionNotice: "귀한 시간을 내주셔서 감사합니다. 더 좋은 과제를 만들 수 있도록 노력하겠습니다."
};
const mockData2 = {
  title: "코드스테이츠x자버 팀 과제 만족도 조사",
  description: "5분만 시간을 내서 설문에 참여해주시면 감사하겠습니다.",
  formData: [
    {
      question: "당신의 이름은 무엇입니까?",
      isRequired: true,
      answer: {
        inputType: "radio"
      }
    },
    {
      question: "팀에 참여한 인원은 몇 명입니까?",
      isRequired: true,
      answer: {
        inputType: "select",
        inputOptions: [
          {
            label: "1명",
            value: 1
          },
          {
            label: "2명",
            value: 2
          }
        ]
      }
    }
  ],
  completionNotice: "귀한 시간을 내주셔서 감사합니다. 더 좋은 과제를 만들 수 있도록 노력하겠습니다."
};

const objString1 = JSON.stringify(mockData1);
const objString2 = JSON.stringify(mockData2);

function TestGetData() {
  return (
    <div>
      <button onClick={() => window.localStorage.setItem("survey1", objString1)}>getItem</button>
      <button onClick={() => window.localStorage.setItem("survey2", objString2)}>getItem</button>
    </div>
  );
}

export default TestGetData;
