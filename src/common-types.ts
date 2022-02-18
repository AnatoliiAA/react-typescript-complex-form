type ValidationField<T> = {
  value: T;
  message: string;
};

export type InputType = {
  id?: string;
  name?: string;
  type?: string;
  labelText?: string;
  additionalText?: string;
  placeholder?: string;
  testId?: string;
  control?: any;
  rules?: object;
  errors?: object;
  width?: string;
  register: Function;
  watch?: Function;
  validation?: {
    required?: ValidationField<boolean>;
    maxLength?: ValidationField<number>;
    minLength?: ValidationField<number>;
    pattern?: ValidationField<string>;
    shouldMatch?: ValidationField<string>;
  };
};
