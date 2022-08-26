import React, { Children } from "react";
import styled from "styled-components";

const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.25rem;
  color: #e6f7ff;
`;

function SurveyTitle({ children }) {
  return (
    <div>
      <Title>{children}</Title>
    </div>
  );
}

export default SurveyTitle;
