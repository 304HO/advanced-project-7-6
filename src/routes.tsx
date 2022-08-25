import CreateSurvey from "./pages/CreateSurvey";
import Error404 from "./pages/Error404";
import Main from "./pages/Main";
import SubmitSurvey from "./pages/SubmitSurvey";
import Test from "./pages/Test";
export type RouteType = {
  name: string;
  key: string;
  route: string;
  component: React.ReactElement;
  useHeader: boolean;
};

const routes: Array<RouteType> = [
  {
    name: "Main",
    key: "Main",
    route: "/",
    component: <Main />,
    useHeader: false
  },
  {
    name: "CreateSurvey",
    key: "CreateSurvey",
    route: "/CreateSurvey",
    component: <CreateSurvey />,
    useHeader: true
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
