import { Select, Form } from "antd";

const { Option } = Select;

function AntdSelect({ props, onChangeSelectHandler }) {
  function handleChange(value) {
    console.log(value);
    onChangeSelectHandler(value);
  }
  return (
    <Form>
      <Form.Item rules={[{ required: true }]}>
        <Select labelInValue placeholder="Select" size="large" style={{ width: 500 }} onChange={handleChange}>
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

export default AntdSelect;
