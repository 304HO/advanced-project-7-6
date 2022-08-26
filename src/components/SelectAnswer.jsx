import { Select } from "antd";

const { Option } = Select;

function AntdSelect({ props }) {
  console.log(props);
  function handleChange(value) {
    console.log(value);
  }
  return (
    <Select labelInValue placeholder="Select" size="large" style={{ width: 500 }} onChange={handleChange}>
      {props.map((item, idx) => {
        return (
          <Option key={idx} value={idx}>
            {item.label}
          </Option>
        );
      })}
    </Select>
  );
}

export default AntdSelect;
