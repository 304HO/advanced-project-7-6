import { Card } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import ModalOption from "./Modal/ModalOption";
import InputLabelValue from "./InputLabelValue";
import { defaultLabelValueData, LabelValueDataType } from "../common/constants";
import InputValue from "./InputValue";

type ModalPropsType = {
  open: boolean;
  children?: JSX.Element;
  onClose: (type?: string) => void;
  optionsData: Array<string>;
  setOptionsData: (prev: any) => void;
};

const StyledSpan = styled.span`
  margin-left: 10px;
  height: 22px;
  display: flex;
  align-items: center;
  font-size: 1.2em;
`;
const StyledDivCenter = styled.div`
  margin-top: 10px;
  display: flex;
  align-self: center;
  align-items: center;
`;

const StyledModalSize = styled.div`
  width: 520px;
  border-radius: 8px;

  & > .ant-modal-content {
    background-color: black;
    border-radius: 8px;
    /* border: 0; */
    overflow: hidden;
  }
`;

const StyledTitle = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
`;

const RadioOptionModal = ({ optionsData, setOptionsData, open, onClose }: ModalPropsType) => {
  if (!open) return null;
  const onClickOptionAddHandler = () => {
    if (optionsData.length >= 5) return;
    setOptionsData((prev: any) => [...prev, ""]);
  };

  const onChangeInputHandler = (type: string, value: string, index: number) => {
    const newDatas = [...optionsData];
    newDatas[index] = value;
    setOptionsData(newDatas);
  };
  return ReactDom.createPortal(
    <StyledModalSize>
      <ModalOption title={""} open={open} onClose={onClose}>
        <StyledTitle>옵션을 설정해주세요.</StyledTitle>
        {optionsData.map((value, index: number) => {
          return (
            <InputValue
              key={index}
              title={`옵션 ${index + 1}`}
              index={index}
              value={value}
              onChangeHandler={onChangeInputHandler}
              type={""}></InputValue>
          );
        })}
        <StyledDivCenter>
          <PlusCircleOutlined />
          <StyledSpan onClick={onClickOptionAddHandler}>옵션 추가하기</StyledSpan>
        </StyledDivCenter>
      </ModalOption>
    </StyledModalSize>,
    document.getElementById("portal") as HTMLElement
  );
};

export default RadioOptionModal;
