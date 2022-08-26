import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function NextButton({ page, nextPage, submitData, setPage, inputFormData }) {
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
        navigate("/");
      } else {
        console.log(index);
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
