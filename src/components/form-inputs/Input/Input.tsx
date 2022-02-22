import { InputType } from "../../../common-types";
import { ErrorMessage } from "@hookform/error-message";
import { CustomError } from "../CustomError";
import { InputWrapper } from "../InputWrapper";
import { InputField, Label } from "./Input.css";

const Input = ({
  id,
  name,
  type,
  labelText,
  placeholder,
  testId,
  register,
  width,
  validation,
  errors,
  watch,
}: InputType): JSX.Element => {
  const checkIfMatch = (value: string): boolean | string => {
    if (watch(validation.shouldMatch.value) === value) {
      return true;
    }
    return validation.shouldMatch.message;
  };
  return (
    <InputWrapper width={width}>
      <Label htmlFor={id}>{labelText}</Label>
      <InputField
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        data-testid={testId}
        {...register(name, {
          ...validation,
          pattern: validation.pattern
            ? {
                value: new RegExp(validation.pattern.value),
                message: validation.pattern.message,
              }
            : {},
          validate: validation.shouldMatch
            ? (value: string) => checkIfMatch(value)
            : {},
        })}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <CustomError role="alert">{message}</CustomError>
        )}
      />
    </InputWrapper>
  );
};

export default Input;
