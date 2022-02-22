import { InputType } from "../../../common-types";
import { ErrorMessage } from "@hookform/error-message";
import { CustomError } from "../CustomError";
import { InputWrapper } from "../InputWrapper";
import { InputSelect, Label } from "./Select.css";

type SelectProps = InputType & {
  options?: Array<{ label: string; value: string }>;
};

const SelectInput = ({
  id,
  name,
  labelText,
  placeholder,
  testId,
  register,
  options,
  errors,
  validation,
}: SelectProps): JSX.Element => (
  <InputWrapper>
    <Label htmlFor={id}>{labelText}</Label>
    <InputSelect
      id={id}
      name={name}
      placeholder={placeholder}
      data-testid={testId}
      {...register(name, validation)}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map(
        ({ label, value }): JSX.Element => (
          <option value={value} key={value}>
            {label}
          </option>
        )
      )}
    </InputSelect>
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <CustomError role="alert">{message}</CustomError>
      )}
    />
  </InputWrapper>
);

export default SelectInput;
