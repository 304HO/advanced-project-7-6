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
  return (
    <Container>
      <Tabs defaultActiveKey="1" centered>
        {submitData.map((item, index) => {
          return <TabPane key={index}>{index + 1}</TabPane>;
        })}
      </Tabs>
    </Container>
  );
}

export default Step;
