import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

type BackgroundPropsType = {
  children?: JSX.Element | Array<JSX.Element>;
};

const StyledBackground = styled.div`
  /* border: 3px solid gold; */
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;
  padding: 170px 200px;
`;
const StyledContent = styled.div`
  /* border: 3px solid green; */
  min-width: 1040px;
  min-height: 500px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(180deg, #69c0ff 0%, #6993ff 100%); ;
`;

export default function ContentBackground({ children }: BackgroundPropsType) {
  return (
    <StyledBackground>
      <StyledContent>{children}</StyledContent>
    </StyledBackground>
  );
}
