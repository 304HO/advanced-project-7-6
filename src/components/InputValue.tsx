import { Input } from "antd";
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 5px;
`;

type InputValuePropsType = {
  title: string;
  type: string;
  index: number;
  value: string;
  onChangeHandler: (type: string, value: string, index: number) => void;
};
function InputValue({ title, type, value, index, onChangeHandler }: InputValuePropsType) {
  return (
    <StyledDiv>
      <div>{title}</div>
      <Input value={value} onChange={(e) => onChangeHandler(type, e.target.value, index)}></Input>
    </StyledDiv>
  );
}
export default InputValue;
