import Error404 from "./pages/Error404";
import Main from "./pages/Main";
import SubmitSurvey from "./pages/SubmitSurvey";
import Test from "./pages/Test";
import CreateSurveySelectInput from "./pages/CreateSurveySelectInput";
import CreateSurveyDefault from "./pages/CreateSurveyDefault";
import CreateSurveySelectInputText from "./pages/CreateSurveySelectInputText";
import CreateSurveySelectInputDatePicker from "./pages/CreateSurveySelectInputDatePicker";
import CreateSurveySelectInputRadio from "./pages/CreateSurveySelectInputRadio";

export type RouteType = {
  name: string;
  key: string;
  route: string;
  component: React.ReactElement;
  useHeader: boolean;
};

const routes: Array<RouteType> = [
  {
    name: "CreateSurveyDefault",
    key: "CreateSurveyDefault",
    route: "/CreateSurveyDefault",
    component: <CreateSurveyDefault surveyData={undefined} setSurveyData={undefined} />,
    useHeader: true
  },
  {
    name: "CreateSurveySelectInput",
    key: "CreateSurveySelectInput",
    route: "/CreateSurveySelectInput",
    component: <CreateSurveySelectInput surveyData={undefined} setSurveyData={undefined} />,
    useHeader: true
  },
  {
    name: "CreateSurveySelectInputText",
    key: "CreateSurveySelectInputText",
    route: "/CreateSurveySelectInputText",
    component: <CreateSurveySelectInputText />,
    useHeader: true
  },
  {
    name: "CreateSurveySelectInputDatePicker",
    key: "CreateSurveySelectInputDatePicker",
    route: "CreateSurveySelectInputDatePicker",
    component: <CreateSurveySelectInputDatePicker />,
    useHeader: true
  },
  {
    name: "CreateSurveySelectInputRadio",
    key: "CreateSurveySelectInputRadio",
    route: "CreateSurveySelectInputRadio",
    component: <CreateSurveySelectInputRadio />,
    useHeader: true
  },
  {
    name: "Main",
    key: "Main",
    route: "/",
    component: <Main />,
    useHeader: false
  },
  {
    name: "SubmitSurvey",
    key: "SubmitSurvey",
    route: "/SubmitSurvey",
    component: <SubmitSurvey />,
    useHeader: true
  },
  {
    name: "Error404",
    key: "Error404",
    route: "/404",
    component: <Error404 />,
    useHeader: true
  },
  {
    name: "Test",
    key: "Test",
    route: "/Test",
    component: <Test />,
    useHeader: true
  }
];

export default routes;
