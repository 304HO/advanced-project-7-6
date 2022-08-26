import Error404 from "./pages/Error404";
import Main from "./pages/Main";
import CreateSurvey from "./pages/CreateSurvey";
import SubmitSurvey from "./pages/SubmitSurvey";
import TestGetData from "./pages/TestGetData";

const routes = [
  {
    name: "Main",
    key: "Main",
    route: "/",
    component: <Main />
  },
  {
    name: "CreateSurvey",
    key: "CreateSurvey",
    route: "/createsurvey",
    component: <CreateSurvey />
  },
  {
    name: "SubmitSurvey",
    key: "SubmitSurvey",
    route: "/submitsurvey",
    component: <SubmitSurvey />
  },
  {
    name: "TestGetData",
    key: "TestGetData",
    route: "/testgetdata",
    component: <TestGetData />
  },
  {
    name: "Error404",
    key: "Error404",
    route: "/404",
    component: <Error404 />
  }
];

export default routes;
