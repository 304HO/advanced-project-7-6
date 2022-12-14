import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import { defaultLabelValueData, defaultSurveyDataTypes, formTypes, LabelValueDataType } from "../common/constants";
import SelectOptionModal from "../components/SelectOptionModal";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ContentBackground from "../components/ContentBackground";
import PlusButton from "../components/PlusButton";
import MinusButton from "../components/MinusButton";

type CreateSurveySelectInputProps = {
  surveyData: any;
  setSurveyData?: React.Dispatch<React.SetStateAction<defaultSurveyDataTypes>>;
  // setSurveyData: any;
};

function CreateSurveySelectInput({ surveyData, setSurveyData }: CreateSurveySelectInputProps) {
  const [labelValueDatas, setLabelValueDatas] = React.useState<Array<LabelValueDataType>>([{ label: "", value: "" }]);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const [isRequired, setIsRequired] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>("");

  const requiredCheckHandler = (isRequired: boolean) => {
    setIsRequired((prev) => !prev);
  };

  const onClose = (type?: string) => {
    setOpen(false);
  };
  const onClickHandler = () => {
    setOpen(true);
  };

  const onClickSelectDropdownHandler = (index: number) => {
    setSelectedIndex(index);
  };

  const onClickAddForm = () => {
    setSurveyData &&
      setSurveyData((prev) => {
        const newPrev = { ...prev };
        newPrev.formData.push({
          question,
          isRequired,
          answer: {
            inputType: "select",
            inputOptions: labelValueDatas
          }
        });
        return newPrev;
      });
  };

  const onClickMinusForm = () => {
    setSurveyData &&
      setSurveyData((prev) => {
        if (prev.formData.length === 0) return prev;
        const newPrev = { ...prev };
        const newPrevformData = [...newPrev.formData];
        newPrevformData.splice(newPrevformData.length - 1, 1);
        newPrev.formData = newPrevformData;
        return newPrev;
      });
  };

  const menu = (
    <Menu>
      {labelValueDatas.map((v, idx) => {
        return (
          <Menu.Item key={idx} onClick={() => onClickSelectDropdownHandler(idx)}>
            {v.label} {v.value}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <>
      <RootContainer>
        <ContentBackground>
          <LeftContainer>
            <LeftItemContainer>
              <InputBox onChange={(e) => setQuestion(e.target.value)} value={question} type="text" placeholder="  1.Select input ???????????? ??????" />
              <Dropdown overlay={menu}>
                <Button>
                  {labelValueDatas[selectedIndex]?.label} <DownOutlined />
                </Button>
              </Dropdown>
              <AddOptionButton onClick={onClickHandler}>?????? ????????????</AddOptionButton>
            </LeftItemContainer>
            <ButtonContainer>
              <Button onClick={onClickMinusForm}>
                <MinusOutlined />
                ?????? ????????????
              </Button>
              <Button onClick={onClickAddForm}>
                <PlusOutlined />
                ?????? ????????????
              </Button>
            </ButtonContainer>
          </LeftContainer>
          <RightContainer>
            <RightItemContainer>
              <Sidebar checked={isRequired} requiredCheckHandler={requiredCheckHandler} />
            </RightItemContainer>
          </RightContainer>
        </ContentBackground>
      </RootContainer>
      <SelectOptionModal open={open} onClose={onClose} labelValueDatas={labelValueDatas} setLabelValueDatas={setLabelValueDatas}></SelectOptionModal>
    </>
  );
}

export default CreateSurveySelectInput;

const LeftItemContainer = styled.div`
  /* border: 3px solid black; */
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const RightItemContainer = styled.div`
  padding: 119px 24px;
  background-color: white;
  height: 100%;
`;

const AddOptionButton = styled.button`
  text-align: start;
  outline: none;
  background-color: transparent;
  border: none;
  width: 150px;
  height: 24px;
  font-size: 14px;
  text-decoration: underline;
`;

const InputBox = styled.input`
  display: block;
  width: 720px;
  font-family: inherit;
  padding: 0 0 8px;
  font-size: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: rgb(145 213 255 / 30%) 0px 1px;
  -webkit-text-fill-color: rgba(145, 213, 255, 1);
`;

const RightContainer = styled.div`
  /* border: 3px solid gold; */
  width: 288px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const LeftContainer = styled.div`
  /* border: 3px solid green; */
  align-items: center;
  gap: 72px;
  background: linear-gradient(180deg, #69c0ff 0%, #6993ff 100%);
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
`;

const RootContainer = styled.div`
  /* border: 3px solid red; */
  display: flex;
  width: 100%;
  height: 100vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 50px;
`;
