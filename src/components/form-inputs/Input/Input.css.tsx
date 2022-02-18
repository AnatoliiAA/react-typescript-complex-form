import styled from "@emotion/styled";

export const InputField = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  margin: 0 0 15px 0;
  padding: 0 5px;
  border: none;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  &:focus {
    box-shadow: 0px 6px 10px -5px #007aff;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;
