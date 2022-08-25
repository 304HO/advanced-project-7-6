import Error404 from "./pages/Error404";
export type RouteType = {
  name: string;
  key: string;
  route: string;
  component: React.ReactNode;
};

const routes: Array<RouteType> = [
  {
    name: "Error404",
    key: "Error404",
    route: "/404",
    component: <Error404 />
  }
];

export default routes;
