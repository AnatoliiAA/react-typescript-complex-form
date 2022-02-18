import styled from "@emotion/styled";

export const CheckboxWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  height: 62px;
  padding-left: 12px;
  border: 1px solid lightgray;
  border-top: none;
  border-radius: 5px;
  &:first-of-type {
    border-top: 1px solid lightgray;
  }
`;

export const TextWrapper = styled.div`
  width: 80%;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AdditionalText = styled.p`
  font-size: 12px;
`;

export const InputField = styled.input`
  position: relative;
  box-sizing: border-box;
  appearance: none;
  width: 40px;
  height: 20px;
  background-color: #5f6979;
  border-radius: 10px;
  box-shadow: 0px 4px 10px -5px #007aff;
  transition: background-color 0.3s ease-out;
  cursor: pointer;
  &::before {
    position: absolute;
    display: block;
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: white;
    top: 2px;
    left: 2px;
    transition: transform 0.2s ease-out;
  }
  &:checked {
    background-color: #007aff;
    &::before {
      transform: translateX(20px);
    }
  }
`;
