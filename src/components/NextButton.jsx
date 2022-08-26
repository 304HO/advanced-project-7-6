import { Button, message } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function NextButton({ page, nextPage, completionNotice, submitData, setPage, inputFormData }) {
  const navigate = useNavigate();
  const checkFunction = () => {
    if (inputFormData.length === 0) {
      return [true, null];
    }
    for (let i = 0; i < submitData.length; i++) {
      if (submitData[i].isRequired === true) {
        if (inputFormData[i] === null || inputFormData[i].length === 0) {
          return [false, i];
        }
      }
    }
    return [true, null];
  };

  const valdiation = () => {
    console.log("valdiation", submitData, inputFormData);
    if (page !== submitData.length) {
      nextPage();
    } else {
      const [resultBoolean, index] = checkFunction();
      if (resultBoolean === true) {
        console.log(completionNotice);
        message.info("설문을 제출했습니다. 감사합니다.");
        message.info(completionNotice);
        navigate("/");
      } else {
        console.log(index);
        message.info(`${index + 1}번째 페이지에 값을 입력해주세요.`);
        setPage(index + 1);
      }
    }
  };

  return (
    <Button size="large" onClick={() => valdiation()}>
      <CheckOutlined />
      {submitData.length === page ? "제출하기" : "다음"}
    </Button>
  );
}

export default NextButton;
