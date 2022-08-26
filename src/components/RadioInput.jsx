import React, { useState, useRef } from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Button, Radio } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubmitSurveyContainer = styled.div`
  width: 72%;
  height: 72%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 120px 100px;
  gap: 60px;
  background: linear-gradient(180deg, #69c0ff 0%, #6993ff 100%);
  border-radius: 8px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const IdxContainer = styled.div`
  display: flex;
  border: solid 2px;
  border-radius: 20%;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div``;

const Ttile = styled.div`
  font-size: 50px;
`;

const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8"];

function RadioInput({ nextPage }) {
  const buttonRef = useRef(null);

  function onChange(e) {
    buttonRef.current.focus();
  }

  function onKeyPress(e) {
    if (e.key == "Enter") {
      onClick();
    }
  }

  function onClick() {
    /* localStorage.setItem('json', checked) */
  }

  return (
    <Container>
      <SubmitSurveyContainer>
        <Ttile>{123}</Ttile>
        <Radio.Group size="large" name="radiogroup" defaultValue={1} buttonStyle="solid">
          {options.map((item, idx) => {
            return (
              <Radio.Button style={{ width: "40%", margin: 2 }} key={idx} value={idx}>
                <ButtonWrap>
                  <IdxContainer>{idx + 1}</IdxContainer>
                  {item}
                  <IconContainer>
                    <CheckOutlined />
                  </IconContainer>
                </ButtonWrap>
              </Radio.Button>
            );
          })}
        </Radio.Group>
        <div>
          <Button size="large" onClick={() => nextPage()}>
            <CheckOutlined />
            다음
          </Button>
          {/* <Button ref={buttonRef} onClick={onClick} onKeyPress={onKeyPress} type="primary">
            제출하기
          </Button> */}
          {/* <button ref={buttonRef} onClick={onClick} onKeyPress={onKeyPress}>제출하기</button> */}
          <span>Enter키를 눌러주세요.</span>
        </div>
      </SubmitSurveyContainer>
    </Container>
  );
}

export default RadioInput;
