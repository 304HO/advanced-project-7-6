import Error404 from "./pages/Error404";
import CreateSurveySelectInput from "./pages/CreateSurveySelectInput";
import CreateSurveyDefault from "./pages/CreateSurveyDefault";
import CreateSurveySelectInputText from "./pages/CreateSurveySelectInputText";
import CreateSurveySelectInputDatePicker from "./pages/CreateSurveySelectInputDatePicker";

export type RouteType = {
  name: string;
  key: string;
  route: string;
  component: React.ReactNode;
};

const routes: Array<RouteType> = [
  { name: "CreateSurveyDefault", key: "CreateSurveyDefault", route: "/CreateSurveyDefault", component: <CreateSurveyDefault /> },
  {
    name: "CreateSurveySelectInput",
    key: "CreateSurveySelectInput",
    route: "/CreateSurveySelectInput",
    component: <CreateSurveySelectInput />
  },
  {
    name: "CreateSurveySelectInputText",
    key: "CreateSurveySelectInputText",
    route: "/CreateSurveySelectInputText",
    component: <CreateSurveySelectInputText />
  },
  {
    name: "CreateSurveySelectInputDatePicker",
    key: "CreateSurveySelectInputDatePicker",
    route: "CreateSurveySelectInputDatePicker",
    component: <CreateSurveySelectInputDatePicker />
  },
  {
    name: "Error404",
    key: "Error404",
    route: "/404",
    component: <Error404 />
  }
];

export default routes;
