import { Card } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import ModalOption from "./Modal/ModalOption";
import InputLabelValue from "./InputLabelValue";
import { defaultLabelValueData, LabelValueDataType } from "../common/constants";

type ModalPropsType = {
  open: boolean;
  children?: JSX.Element;
  onClose: (type?: string) => void;
  labelValueDatas: Array<LabelValueDataType>;
  setLabelValueDatas: (prev: any) => void;
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

const SelectOptionModal = ({ labelValueDatas, setLabelValueDatas, open, onClose }: ModalPropsType) => {
  // const [labelValueDatas, setLabelValueDatas] = React.useState<Array<LabelValueDataType>>(
  //   new Array(3).fill(null).map((_) => ({ ...defaultLabelValueData }))
  // );
  if (!open) return null;
  const onClickOptionAddHandler = () => {
    if (labelValueDatas.length >= 5) return;
    setLabelValueDatas((prev: any) => [...prev, { ...defaultLabelValueData }]);
  };

  const onChangeInputHandler = (type: string, value: string, index: number) => {
    const newDatas = [...labelValueDatas];
    if (type === "label") {
      newDatas[index].label = value;
    }
    if (type === "value") {
      newDatas[index].value = value;
    }
    setLabelValueDatas(newDatas);
  };
  return ReactDom.createPortal(
    <StyledModalSize>
      <ModalOption title={""} open={open} onClose={onClose}>
        <StyledTitle>옵션을 설정해주세요.</StyledTitle>
        <Card style={{ backgroundColor: "#fafafa", border: 0 }}>
          <div>라벨: 실제로 설문조사 답변에 나타나는 label</div>
          <div>값: JSON 데이터에 입력되는 value</div>
        </Card>
        {labelValueDatas.map((value, index: number) => {
          return <InputLabelValue key={index} index={index} data={value} onChangeHandler={onChangeInputHandler}></InputLabelValue>;
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

export default SelectOptionModal;
