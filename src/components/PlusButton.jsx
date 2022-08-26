import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const PlusButton = ({ onClickAddForm }) => {
  return (
    <Button onClick={onClickAddForm}>
      <PlusOutlined />
      질문 추가하기
    </Button>
  );
};

export default PlusButton;
