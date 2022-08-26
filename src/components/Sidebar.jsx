import styled from "styled-components";
import { Menu, Dropdown, Button, message, Form, Switch } from "antd";
import { DownCircleOutlined, FontSizeOutlined, CalendarOutlined, PlusCircleOutlined, DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";

function Sidebar({ checked, requiredCheckHandler }) {
  const navigator = useNavigate();

  const SelectInput = () => {
    navigator("/CreateSurveySelectInput");
  };
  const SelectInputDatePicker = () => {
    navigator("/CreateSurveySelectInputDatePicker");
  };
  const SelectInputText = () => {
    navigator("/CreateSurveySelectInputText");
  };
  const SelectInputRadio = () => {
    navigator("/CreateSurveySelectInputRadio");
  };

  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" onClick={() => SelectInput()}>
        <DownCircleOutlined />
        Select
      </Menu.Item>
      <Menu.Item key="2" onClick={() => SelectInputText()}>
        <FontSizeOutlined />
        Text
      </Menu.Item>
      <Menu.Item key="3" onClick={() => SelectInputDatePicker()}>
        <CalendarOutlined />
        Date Picker
      </Menu.Item>
      <Menu.Item key="4" onClick={() => SelectInputRadio()}>
        <PlusCircleOutlined />
        Radio
      </Menu.Item>
    </Menu>
  );

  return (
    <SideBarContainer>
      <DropDownContainer>
        <Text>답변 형식</Text>
        <Dropdown overlay={menu}>
          <Button>
            Select <DownOutlined />
          </Button>
        </Dropdown>
      </DropDownContainer>
      <ToggleContainer>
        <Text>필수 여부</Text>
        <Form.Item valuePropName="checked">
          <Switch checked={checked} onChange={requiredCheckHandler} />
        </Form.Item>
      </ToggleContainer>
    </SideBarContainer>
  );
}
export default Sidebar;

const Text = styled.div`
  font-size: 1.3em;
`;

const ToggleContainer = styled.div`
  /* border: 3px solid gold; */
  display: flex;
  justify-content: space-between;
`;

const DropDownContainer = styled.div`
  /* border: 3px solid black; */
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SideBarContainer = styled.div`
  /* border: 3px solid red; */
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
