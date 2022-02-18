import { InputType } from "../../../common-types";
import {
  AdditionalText,
  CheckboxWrapper,
  InputField,
  Label,
  TextWrapper,
} from "./Checkbox.css";

type CheckboxProps = InputType;

const Checkbox = ({
  id,
  name,
  labelText,
  additionalText,
  testId,
  register,
}: CheckboxProps): JSX.Element => (
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

export default Checkbox;
