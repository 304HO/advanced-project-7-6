import styled from "styled-components";
import SurveyTitle from "./SurveyTitle";
import { Button, Form, Input } from "antd";
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

function InputSurvey({ props, setSurveyIdx, nextPage }) {
  console.log(props);

  function handleChange(value) {
    setSurveyIdx(value.key);
  }

  return (
    <Container>
      <SubmitSurveyContainer>
        <SurveyTitle></SurveyTitle>
        <Form>
          <Form.Item>
            <Input size="large" style={{ width: 500 }}></Input>
          </Form.Item>
          <Form.Item>
            <Button size="large" onClick={() => nextPage()}>
              <CheckOutlined />
              다음
            </Button>
          </Form.Item>
        </Form>
      </SubmitSurveyContainer>
    </Container>
  );
}

export default InputSurvey;
