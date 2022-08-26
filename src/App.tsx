import React, { useState } from "react";
import "./App.css";
import routes from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import LightTheme from "./assets/theme/light";
import DarkTheme from "./assets/theme/dark";
import storage from "./common/utils/storage";
import Header from "./components/Header";

import "antd/dist/antd.css";
import { defaultSurveyData, defaultSurveyDataTypes } from "./common/constants";
import Error404 from "./pages/Error404";

type RouteType = {
  name: string;
  key: string;
  route: string;
  component: React.ReactElement;
  useHeader: boolean;
};

function App() {
  const [theme, setTheme] = useState(storage.getTheme());
  const [surveyData, setSurveyData] = React.useState<defaultSurveyDataTypes>(defaultSurveyData);

  // React.useEffect(() => {
  //   const newSurveyData = localStorage.getItem("surveyData");
  //   if (newSurveyData !== null) setSurveyData(JSON.parse(newSurveyData));
  // }, []);

  React.useEffect(() => {
    console.log("surveyData main : ", surveyData);
  }, [surveyData]);

  const getRoutes = (allRoutes: Array<RouteType>) =>
    allRoutes.map((route: RouteType) => {
      const CloneElement = React.cloneElement(route.component, { surveyData, setSurveyData });
      if (route.useHeader === true) {
        return (
          route.route && (
            <Route
              path={route.route}
              element={
                <>
                  <Header surveyData={surveyData} setSurveyData={setSurveyData} />
                  {CloneElement}
                </>
              }
              key={route.key}
            />
          )
        );
      } else {
        return route.route && <Route path={route.route} element={CloneElement} key={route.key} />;
      }
    });

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          storage.setTheme(theme.id);
          setTheme((theme) => (theme.id === "light" ? DarkTheme : LightTheme));
        }
      }}>
      <BrowserRouter>
        <Routes>
          {getRoutes(routes)}
          {/* 
          <Route
            path="/"
            element={
              <>
                <Header surveyData={surveyData} />
                <CreateSurveyDefault surveyData={surveyData} setSurveyData={setSurveyData} />
              </>
            }
          /> */}

          {/* <Route path="*" element={<Navigate to="/404" />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="*" element={<Navigate to="/404" />} /> */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
