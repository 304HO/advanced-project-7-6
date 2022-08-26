import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import { MinusOutlined } from "@ant-design/icons";

const MinusButton = () => (
  <Button>
    <MinusOutlined />
    질문 삭제하기
  </Button>
);

export default MinusButton;
