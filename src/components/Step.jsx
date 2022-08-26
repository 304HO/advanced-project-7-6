import styled from "styled-components";
import { Tabs } from "antd";
import React, { useState } from "react";
const { TabPane } = Tabs;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

function Step({ submitData, page, setPage }) {
  const onChange = (key) => {
    setPage(parseInt(key) + 1);
  };

  return (
    <Container>
      <Tabs activeKey={String(page - 1)} onChange={onChange} type="card">
        {submitData.map((item, index) => {
          return <TabPane tab={`Tab ${index + 1}`} key={index}></TabPane>;
        })}
      </Tabs>
    </Container>
  );
}

export default Step;
