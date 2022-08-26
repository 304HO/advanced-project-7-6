import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";

function NextButton({ page, nextPage, submitData }) {
  return (
    <Button size="large" onClick={() => nextPage()}>
      <CheckOutlined />
      {submitData.length - 1 === page ? "제출하기" : "다음"}
    </Button>
  );
}

export default NextButton;
