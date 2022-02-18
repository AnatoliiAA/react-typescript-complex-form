import { InputType } from "../../../common-types";
import { ErrorMessage } from "@hookform/error-message";
import { CustomError } from "../CustomError";
import {
  AdditionalText,
  CheckboxWrapper,
  InputField,
  Label,
  TextWrapper,
} from "./Checkbox.css";

type Checkbox = InputType;

export const Checkbox = ({
  id,
  name,
  labelText,
  additionalText,
  testId,
  register,
  errors,
}: Checkbox): JSX.Element => (
  <CheckboxWrapper>
    <TextWrapper>
      <Label htmlFor={id}>{labelText}</Label>
      <AdditionalText>{additionalText}</AdditionalText>
    </TextWrapper>
    <InputField
      id={id}
      type="checkbox"
      name={name}
      data-testid={testId}
      {...register(name)}
    />
  </CheckboxWrapper>
);
