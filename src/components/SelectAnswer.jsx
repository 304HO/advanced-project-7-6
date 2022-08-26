import { Select } from "antd";

const { Option } = Select;

function AntdSelect({ props, setSelectSurveyIdx }) {
  function handleChange(value) {
    console.log(value);
    setSelectSurveyIdx(value.value);
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
