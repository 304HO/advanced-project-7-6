import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Tab = styled.div``;

function Step({ submitData, page, setPage }) {
  return (
    <Container>
      {submitData.map((item, index) => {
        return <Tab key={index}>{index + 1}</Tab>;
      })}
    </Container>
  );
}

export default Step;
