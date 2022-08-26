import InputValue from "./InputValue";
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

type InputLabelValuePropsType = {
  data: {
    label: string;
    value: string;
  };
  index: number;
  onChangeHandler: (type: string, value: string, index: number) => void;
};

function InputLabelValue({ data, index, onChangeHandler }: InputLabelValuePropsType) {
  return (
    <StyledDiv>
      <InputValue title={"라벨"} type={"label"} value={data.label} index={index} onChangeHandler={onChangeHandler}></InputValue>
      <InputValue title={"값"} type={"value"} value={data.value} index={index} onChangeHandler={onChangeHandler}></InputValue>
    </StyledDiv>
  );
}
export default InputLabelValue;
