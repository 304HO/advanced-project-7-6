export type LabelValueDataType = {
  label: string;
  value: string;
};

export const defaultLabelValueData: LabelValueDataType = {
  label: "",
  value: ""
};

export const defaultSurveyData = {
  title: "",
  description: "",
  formData: [
    // {
    //   question: "",
    //   isRequired: true,
    //   answer: {
    //     inputType: "select",
    //     inputOptions: [
    //       {
    //         label: "",
    //         value: ""
    //       }
    //     ]
    //   }
    // },
    // {
    //   question: "",
    //   isRequired: true,
    //   answer: {
    //     inputType: "text",
    //     inputOptions: ""
    //   }
    // },
    // {
    //   question: "",
    //   isRequired: true,
    //   answer: {
    //     inputType: "date",
    //     inputOptions: ""
    //   }
    // },
    // {
    //   question: "",
    //   isRequired: true,
    //   answer: {
    //     inputType: "radio",
    //     inputOptions: [""]
    //   }
    // }
  ],
  completionNotice: "귀한 시간을 내주셔서 감사합니다. 더 좋은 과제를 만들 수 있도록 노력하겠습니다."
};

// export const defaultSurveyData = {
//   title: "코드스테이츠x자버 팀 과제 만족도 조사",
//   description: "5분만 시간을 내서 설문에 참여해주시면 감사하겠습니다.",
//   formData: [
//     {
//       question: "당신의 이름은 무엇입니까?",
//       isRequired: true,
//       answer: {
//         inputType: "text"
//       }
//     },
//     {
//       question: "팀에 참여한 인원은 몇 명입니까?",
//       isRequired: true,
//       answer: {
//         inputType: "select",
//         inputOptions: [
//           {
//             label: "1명",
//             value: 1
//           },
//           {
//             label: "2명",
//             value: 2
//           }
//         ]
//       }
//     }
//   ],
//   completionNotice: "귀한 시간을 내주셔서 감사합니다. 더 좋은 과제를 만들 수 있도록 노력하겠습니다."
// };

export type answerTypes = {
  inputType: string;
  inputOptions?: Array<LabelValueDataType> | string | Array<string>;
};

export type formTypes = {
  question: string;
  isRequired: boolean;
  answer: answerTypes;
};

export type defaultSurveyDataTypes = {
  title: string;
  description: string;
  formData: Array<formTypes>;
  completionNotice: string;
};
