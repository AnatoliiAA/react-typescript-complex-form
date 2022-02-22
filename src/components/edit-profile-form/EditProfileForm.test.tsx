import {
  render,
  fireEvent,
  getByTestId,
  findByText,
  findAllByText,
  waitFor,
  queryAllByRole,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EditProfileForm from "./EditProfileForm";

const testIds = {
  editProfileForm: "edit-profile-form",
  userName: "user-name",
  storeName: "store-name",
  location: "location",
  currency: "currency",
  email: "email",
  phone: "phone",
  address: "address",
  currentPassword: "current-password",
  newPassword: "new-password",
  confirmPassword: "confirm-password",
  orderConfirmation: "order-confirmation",
  orderStatus: "order-status-changed",
  orderDelivered: "order-delivered",
  emailNotification: "email-notification",
  submit: "submit-button",
};

const errorMessages = {
  required: "This field is required",
  minLength2: "The length should be 2 characters or more",
  maxLength20: "The allowed length is no more than 20 characters",
  passwordsMatch: "The passwords should match",
  invalidEmail: "You should provide an valid email",
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
  })
) as jest.Mock;

describe("Edit profile form tests", () => {
  const {
    editProfileForm,
    userName,
    storeName,
    location,
    currency,
    email,
    phone,
    address,
    currentPassword,
    newPassword,
    confirmPassword,
    submit,
  } = testIds;

  describe("Render test", () => {
    it("should render form", async () => {
      const { container } = render(<EditProfileForm />);
      const form = getByTestId(container, editProfileForm);
      expect(form).toBeInTheDocument();
    });
  });

  describe("Edit profile fieldset tests", () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it("should show errors near required fields on submit if at least 1 field was touched", async () => {
      const { container } = render(<EditProfileForm />);
      const nameInput = getByTestId(container, userName);
      const submitButton = getByTestId(container, submit);

      fireEvent.input(nameInput, {
        target: {
          value: "123",
        },
      });
      fireEvent.submit(submitButton);
      expect(
        await findAllByText(container, errorMessages.required)
      ).toHaveLength(5);
    });

    it("should validate user name field", async () => {
      const { container } = render(<EditProfileForm />);
      const nameInput = getByTestId(container, userName);

      fireEvent.input(nameInput, {
        target: {
          value: "1",
        },
      });
      expect(
        await findByText(container, errorMessages.minLength2)
      ).toBeInTheDocument();

      fireEvent.input(nameInput, {
        target: {
          value: "123456789012345678901",
        },
      });
      expect(
        await findByText(container, errorMessages.maxLength20)
      ).toBeInTheDocument();

      fireEvent.input(nameInput, {
        target: {
          value: "",
        },
      });
      expect(
        await findByText(container, errorMessages.required)
      ).toBeInTheDocument();
    });

    it("should validate store name field", async () => {
      const { container } = render(<EditProfileForm />);
      const storeInput = getByTestId(container, storeName);

      fireEvent.input(storeInput, {
        target: {
          value: "1",
        },
      });
      expect(
        await findByText(container, errorMessages.minLength2)
      ).toBeInTheDocument();

      fireEvent.input(storeInput, {
        target: {
          value: "123456789012345678901",
        },
      });
      expect(
        await findByText(container, errorMessages.maxLength20)
      ).toBeInTheDocument();
    });

    it("should validate email field", async () => {
      const { container } = render(<EditProfileForm />);
      const emailInput = getByTestId(container, email);

      fireEvent.input(emailInput, {
        target: {
          value: "invalid@email,com",
        },
      });
      expect(
        await findByText(container, errorMessages.invalidEmail)
      ).toBeInTheDocument();

      fireEvent.input(emailInput, {
        target: {
          value: "",
        },
      });
      expect(
        await findByText(container, errorMessages.required)
      ).toBeInTheDocument();
    });

    it("should validate phone field", async () => {
      const { container } = render(<EditProfileForm />);
      const phoneInput = getByTestId(container, phone);

      fireEvent.input(phoneInput, {
        target: {
          value: "1",
        },
      });
      expect(
        await findByText(container, errorMessages.minLength2)
      ).toBeInTheDocument();

      fireEvent.input(phoneInput, {
        target: {
          value: "123456789012345678901",
        },
      });
      expect(
        await findByText(container, errorMessages.maxLength20)
      ).toBeInTheDocument();

      fireEvent.input(phoneInput, {
        target: {
          value: "",
        },
      });
      expect(
        await findByText(container, errorMessages.required)
      ).toBeInTheDocument();
    });

    it("should validate address field", async () => {
      const { container } = render(<EditProfileForm />);
      const addressInput = getByTestId(container, address);

      fireEvent.input(addressInput, {
        target: {
          value: "1",
        },
      });
      expect(
        await findByText(container, errorMessages.minLength2)
      ).toBeInTheDocument();

      fireEvent.input(addressInput, {
        target: {
          value: "",
        },
      });
      expect(
        await findByText(container, errorMessages.required)
      ).toBeInTheDocument();
    });

    it("should not show errors on submit if every field is filled correctly", async () => {
      const { container } = render(<EditProfileForm />);
      const nameInput = getByTestId(container, userName);
      const storeInput = getByTestId(container, storeName);
      const locationInput = getByTestId(container, location);
      const currencyInput = getByTestId(container, currency);
      const emailInput = getByTestId(container, email);
      const phoneInput = getByTestId(container, phone);
      const addressInput = getByTestId(container, address);
      const submitButton = getByTestId(container, submit);

      await waitFor(() => {
        fireEvent.input(nameInput, {
          target: {
            value: "Name",
          },
        });
        fireEvent.input(storeInput, {
          target: {
            value: "Store",
          },
        });
        fireEvent.change(locationInput, {
          target: {
            value: "ukraine",
          },
        });
        fireEvent.change(currencyInput, {
          target: {
            value: "ukr-hryvnia",
          },
        });
        fireEvent.input(currencyInput, {
          target: {
            value: "ukr-hryvnia",
          },
        });
        fireEvent.input(emailInput, {
          target: {
            value: "email@email.com",
          },
        });
        fireEvent.input(phoneInput, {
          target: {
            value: "0950000000",
          },
        });
        fireEvent.input(addressInput, {
          target: {
            value: "Some address",
          },
        });
        fireEvent.submit(submitButton);
      });

      const errors = queryAllByRole(container, "alert");

      expect(errors).toHaveLength(0);
      expect(global.fetch).toBeCalled();
    });
  });

  describe("Edit password fieldset tests", () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it("should show errors near required fields on submit if at least 1 field was touched", async () => {
      const { container } = render(<EditProfileForm />);
      const newPasswordInput = getByTestId(container, newPassword);
      const submitButton = getByTestId(container, submit);

      await waitFor(() => {
        fireEvent.input(newPasswordInput, {
          target: {
            value: "12",
          },
        });
        fireEvent.submit(submitButton);
      });

      expect(
        await findAllByText(container, errorMessages.required)
      ).toHaveLength(2);
    });

    it("should validate current password field", async () => {
      const { container } = render(<EditProfileForm />);
      const currentPasswordInput = getByTestId(container, currentPassword);

      fireEvent.input(currentPasswordInput, {
        target: {
          value: "1",
        },
      });
      expect(
        await findByText(container, errorMessages.minLength2)
      ).toBeInTheDocument();

      fireEvent.input(currentPasswordInput, {
        target: {
          value: "123456789012345678901",
        },
      });
      expect(
        await findByText(container, errorMessages.maxLength20)
      ).toBeInTheDocument();

      fireEvent.input(currentPasswordInput, {
        target: {
          value: "",
        },
      });
      expect(
        await findByText(container, errorMessages.required)
      ).toBeInTheDocument();
    });

    it("should validate new password field", async () => {
      const { container } = render(<EditProfileForm />);
      const newPasswordInput = getByTestId(container, newPassword);

      fireEvent.input(newPasswordInput, {
        target: {
          value: "1",
        },
      });
      expect(
        await findByText(container, errorMessages.minLength2)
      ).toBeInTheDocument();

      fireEvent.input(newPasswordInput, {
        target: {
          value: "123456789012345678901",
        },
      });
      expect(
        await findByText(container, errorMessages.maxLength20)
      ).toBeInTheDocument();

      fireEvent.input(newPasswordInput, {
        target: {
          value: "",
        },
      });
      expect(
        await findByText(container, errorMessages.required)
      ).toBeInTheDocument();
    });

    it("should validate confirm password field", async () => {
      const { container } = render(<EditProfileForm />);
      const newPasswordInput = getByTestId(container, newPassword);
      const confirmPasswordInput = getByTestId(container, confirmPassword);

      fireEvent.input(newPasswordInput, {
        target: {
          value: "123",
        },
      });
      fireEvent.input(confirmPasswordInput, {
        target: {
          value: "12345",
        },
      });
      expect(
        await findByText(container, errorMessages.passwordsMatch)
      ).toBeInTheDocument();

      fireEvent.input(confirmPasswordInput, {
        target: {
          value: "123",
        },
      });
      expect(
        await findByText(container, errorMessages.passwordsMatch)
      ).not.toBeInTheDocument();

      fireEvent.input(confirmPasswordInput, {
        target: {
          value: "",
        },
      });
      expect(
        await findByText(container, errorMessages.required)
      ).toBeInTheDocument();
    });

    it("should not show errors on submit if every field is filled correctly", async () => {
      const { container } = render(<EditProfileForm />);
      const currentPasswordInput = getByTestId(container, currentPassword);
      const newPasswordInput = getByTestId(container, newPassword);
      const confirmPasswordInput = getByTestId(container, confirmPassword);
      const submitButton = getByTestId(container, submit);

      await waitFor(() => {
        fireEvent.input(currentPasswordInput, {
          target: {
            value: "123",
          },
        });
        fireEvent.input(newPasswordInput, {
          target: {
            value: "qwerty",
          },
        });
        fireEvent.input(confirmPasswordInput, {
          target: {
            value: "qwerty",
          },
        });
        fireEvent.submit(submitButton);
      });

      const errors = queryAllByRole(container, "alert");

      expect(errors).toHaveLength(0);
      expect(global.fetch).toBeCalled();
    });
  });
});
