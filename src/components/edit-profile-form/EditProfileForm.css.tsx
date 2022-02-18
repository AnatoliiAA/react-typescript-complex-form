import styled from "@emotion/styled";

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: calc(100% - 40px);
  margin: 20px;
  background-color: white;
  border-radius: 20px;
`;
export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const FieldsetHeader = styled.span`
  display: block;
  width: 90%;
  margin: 20px 0;
  font-size: 24px;
  font-weight: bold;
`;

export const Fieldset = styled.fieldset`
  box-sizing: border-box;
  width: 90%;
  border: 1px solid lightgray;
  padding: 15px 15px;
  border-radius: 10px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 30px 2.5%;
  color: white;
  background-color: #007aff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;
