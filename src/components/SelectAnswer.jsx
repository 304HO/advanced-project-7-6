import { Select, Form } from "antd";

const { Option } = Select;

function SelectAnswer({ props, selectInputFormData, onChangeSelectHandler }) {
  function handleChange(value) {
    onChangeSelectHandler(value);
  }
  return (
    <Form>
      <Form.Item rules={[{ required: true }]}>
        <Select defaultValue={selectInputFormData} labelInValue placeholder="Select" size="large" style={{ width: 500 }} onChange={handleChange}>
          {props.map((item, idx) => {
            return (
              <Option key={idx} value={idx}>
                {item.label}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    </Form>
  );
}

export default SelectAnswer;
