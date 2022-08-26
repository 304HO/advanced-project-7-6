import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import { defaultLabelValueData, defaultSurveyDataTypes, formTypes, LabelValueDataType } from "../common/constants";
import SelectOptionModal from "../components/SelectOptionModal";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ContentBackground from "../components/ContentBackground";

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
    console.log(labelValueDatas);
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
              <InputBox onChange={(e) => setQuestion(e.target.value)} value={question} type="text" placeholder="  1.Select input 설문조사 질문" />
              <Dropdown overlay={menu}>
                <Button>
                  {labelValueDatas[selectedIndex]?.label} <DownOutlined />
                </Button>
              </Dropdown>
              <AddOptionButton onClick={onClickHandler}>옵션 추가하기</AddOptionButton>
            </LeftItemContainer>
            <button onClick={onClickAddForm}>+ 질문 추가하기</button>
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
  outline: none;
  background-color: transparent;
  border: none;
  width: 92px;
  height: 24px;
  font-size: 14px;
  text-decoration: underline;
`;

const InputBox = styled.input`
  display: block;
  width: 50vw;
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
  width: 20vw;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const LeftContainer = styled.div`
  /* border: 3px solid green; */
  /* width: 80vw; */
  /* display: flex; */
  /* justify-content: center; */
  align-items: center;
  /* flex-direction: column; */
  gap: 5vw;
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
