import { Select, Form } from "antd";

const { Option } = Select;

function SelectSurvey({ props, setSurveyIdx, nextPage }) {
  console.log("SelectSurvey", props);
  function handleChange(value) {
    setSurveyIdx(value.key);
  }

  return (
    <Form>
      <Form.Item rules={[{ required: true }]}>
        <Select labelInValue placeholder="Select" size="large" style={{ width: 500 }} onChange={handleChange}>
          {props.map((item, idx) => {
            console.log("item", item);
            return (
              <Option key={idx} value={idx}>
                {item.title}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    </Form>
  );
}

export default SelectSurvey;
