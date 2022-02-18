import _ from "lodash";
import { useForm } from "react-hook-form";
import Input from "../form-inputs/Input/Input";
import SelectInput from "../form-inputs/Select/Select";
import Checkbox from "../form-inputs/Checkbox/Checkbox";
import {
  ButtonsWrapper,
  Fieldset,
  FieldsetHeader,
  Form,
  FormColumn,
  SubmitButton,
} from "./EditProfileForm.css";
import inputData from "./data.json";
import { FormEventHandler, useEffect } from "react";
import { InputType } from "../../common-types";

interface EditProfileInputs {
  userName: string;
  storeName: string;
  location: string;
  currency: string;
  email: string;
  phone: string;
  address: string;
}

interface ChangePasswordInputs {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface EditNotificationsInputs {
  orderConfirmation: boolean;
  orderStatusChanged: boolean;
  orderDelivered: boolean;
  emailNotification: boolean;
}

type CreateInputAttrs = Omit<InputType, "type" | "name">;

const createInput = (
  type: string,
  name: string,
  attrs: CreateInputAttrs
): JSX.Element =>
  type === "text" ||
  type === "tel" ||
  type === "email" ||
  type === "password" ? (
    <Input type={type} name={name} {...attrs} key={attrs.id} />
  ) : type === "select" ? (
    <SelectInput name={name} {...attrs} key={attrs.id} />
  ) : type === "checkbox" ? (
    <Checkbox name={name} {...attrs} key={attrs.id} />
  ) : (
    <p>Invalid type definition</p>
  );

export const EditProfileForm = (): JSX.Element => {
  const {
    defaultProfileValues,
    defaultPasswordValues,
    defaultNotificationValues,
  }: {
    defaultProfileValues: EditProfileInputs;
    defaultPasswordValues: ChangePasswordInputs;
    defaultNotificationValues: EditNotificationsInputs;
  } = inputData.defaultFormValues;

  const {
    register,
    formState: { errors, isDirty: isProfileDirty },
    getValues: getProfileValues,
    reset: resetProfileValues,
    trigger: triggerProfileValidation,
    watch: watchProfile,
  } = useForm<EditProfileInputs>({
    mode: "onChange",
    defaultValues: defaultProfileValues,
  });

  const {
    register: registerPassword,
    formState: { errors: errorsPassword, isDirty: isPasswordDirty },
    getValues: getPasswordValues,
    reset: resetPasswordValues,
    trigger: triggerPasswordValidation,
    watch: watchPassword,
  } = useForm<ChangePasswordInputs>({
    mode: "onChange",
    defaultValues: defaultPasswordValues,
  });

  const {
    register: registerNotification,
    formState: { isDirty: isNotificationDirty },
    getValues: getNotificationValues,
    reset: resetNotificationValues,
    watch: watchNotifications,
  } = useForm<EditNotificationsInputs>({
    mode: "onChange",
    defaultValues: defaultNotificationValues,
  });

  useEffect(() => {
    const profileValue = watchProfile();
    const passwordValue = watchPassword();
    const notificationValue = watchNotifications();

    isProfileDirty &&
      localStorage.setItem("profileValues", JSON.stringify(profileValue));
    isPasswordDirty &&
      localStorage.setItem("passwordValues", JSON.stringify(passwordValue));
    isNotificationDirty &&
      localStorage.setItem(
        "notificationValues",
        JSON.stringify(notificationValue)
      );
  }, [watchProfile(), watchPassword(), watchNotifications()]);

  useEffect(() => {
    if (localStorage.hasOwnProperty("profileValues")) {
      const storageData = JSON.parse(localStorage.getItem("profileValues"));
      resetProfileValues(storageData);
    }
    if (localStorage.hasOwnProperty("passwordValues")) {
      const storageData = JSON.parse(localStorage.getItem("passwordValues"));
      resetPasswordValues(storageData);
    }
    if (localStorage.hasOwnProperty("notificationValues")) {
      const storageData = JSON.parse(
        localStorage.getItem("notificationValues")
      );
      resetNotificationValues(storageData);
    }
  }, []);

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    let isProfileValid: boolean = false;
    let isPasswordValid: boolean = false;
    const profileValues = getProfileValues();
    const passwordValues = getPasswordValues();
    const notificationValues = getNotificationValues();
    const submitData = {
      profileData: {},
      passwordData: {},
      notificationData: {},
    };
    const shouldProfileBeValidated = !_.isEqual(
      defaultProfileValues,
      profileValues
    );
    const shouldPasswordBeValidated = !_.isEqual(
      defaultPasswordValues,
      passwordValues
    );
    const shouldNotificationsSubmited = !_.isEqual(
      defaultNotificationValues,
      notificationValues
    );

    if (shouldProfileBeValidated) {
      isProfileValid = await triggerProfileValidation();
    }
    if (shouldPasswordBeValidated) {
      isPasswordValid = await triggerPasswordValidation();
    }

    submitData.profileData = isProfileValid ? profileValues : {};
    submitData.passwordData = isPasswordValid ? passwordValues : {};
    submitData.notificationData = shouldNotificationsSubmited
      ? notificationValues
      : {};

    if (isProfileValid || isPasswordValid || shouldNotificationsSubmited) {
      fetch("https://www.google.com", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });
    }
  };

  return (
    <Form onSubmit={onSubmit} data-testid="edit-profile-form">
      <FormColumn>
        <FieldsetHeader>Edit Profile</FieldsetHeader>
        <Fieldset>
          {inputData.editProfileInputs.map((inputData) =>
            createInput(inputData.type, inputData.name, {
              ...inputData,
              register,
              errors,
            })
          )}
        </Fieldset>
      </FormColumn>
      <FormColumn>
        <FieldsetHeader>Change Password</FieldsetHeader>
        <Fieldset>
          {inputData.changePasswordInputs.map((inputData) =>
            createInput(inputData.type, inputData.name, {
              ...inputData,
              register: registerPassword,
              errors: errorsPassword,
              watch: watchPassword,
            })
          )}
        </Fieldset>
        <FieldsetHeader>Notifications</FieldsetHeader>
        <Fieldset>
          {inputData.editNotificationsInputs.map((inputData) =>
            createInput(inputData.type, inputData.name, {
              ...inputData,
              register: registerNotification,
            })
          )}
        </Fieldset>
      </FormColumn>
      <ButtonsWrapper>
        <SubmitButton type="submit" data-testid="submit-button">
          Save
        </SubmitButton>
      </ButtonsWrapper>
    </Form>
  );
};
