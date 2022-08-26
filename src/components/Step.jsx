import styled from "styled-components";
import { Tabs } from "antd";
import React from "react";
const { TabPane } = Tabs;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Tab = styled.div``;

function Step({ submitData, page, setPage }) {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Container>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        {submitData.map((item, index) => {
          return <TabPane tab={`Tab ${index + 1}`} key={index}></TabPane>;
        })}
      </Tabs>
    </Container>
  );
}

export default Step;
