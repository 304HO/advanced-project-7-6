import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const PlusButton = () => (
  <Button>
    <PlusOutlined />
    질문 추가하기
  </Button>
);

export default PlusButton;
