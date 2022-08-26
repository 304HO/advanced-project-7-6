import { Select } from "antd";

const { Option } = Select;

function AntdSelect({ props, setSurveyIdx }) {
  console.log(props);
  function handleChange(value) {
    setSurveyIdx(value.key);
  }
  return (
    <Select labelInValue placeholder="Select" size="large" style={{ width: 500 }} onChange={handleChange}>
      {props.map((item, idx) => {
        return (
          <Option key={idx} value={idx}>
            {item.title}
          </Option>
        );
      })}
    </Select>
  );
}

export default AntdSelect;
