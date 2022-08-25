import styled from "styled-components";
import { Menu, Dropdown, Button, Icon, message, Form, Switch } from "antd";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
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
  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" onClick={() => SelectInput()}>
        <Icon type="down-circle" />
        Select
      </Menu.Item>
      <Menu.Item key="2" onClick={() => SelectInputText()}>
        <Icon type="font-size" />
        Text
      </Menu.Item>
      <Menu.Item key="3" onClick={() => SelectInputDatePicker()}>
        <Icon type="calendar" />
        Date Picker
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="plus-circle" />
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
            Select <Icon type="down" />
          </Button>
        </Dropdown>
      </DropDownContainer>
      <ToggleContainer>
        <Text>필수 여부</Text>
        {/* <Form.Item label="Switch">{getFieldDecorator("switch", { valuePropName: "checked" })(<Switch />)}</Form.Item> */}
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
