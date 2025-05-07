import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { TmLogin } from "./tm-login";
import { OrFormControls } from "@mono-repo-demo/atomic-library/src/components/organisms";
import {
  AtButtonProps,
  AtButtonVariants,
} from "@mono-repo-demo/atomic-library/src/components/atoms";

const formControls: OrFormControls = {
  email: {
    type: "input",
    required: true,
    label: "Email",
    placeholder: "example@email.com",
    errorText: "Please enter a valid email",
    columnClass: "col-span-2",
  },
  password: {
    type: "password",
    required: true,
    label: "Password",
    placeholder: "123456789",
    errorText: "Your password must contain at least 10 characters",
    columnClass: "col-span-2",
  },
};

const formButton: AtButtonProps = {
  variant: AtButtonVariants.PRIMARY,
  children: "Login",
  className: "w-full",
};

describe("templates/tm-login", () => {
  it("should render the component", () => {
    const { getByText } = render(
      <TmLogin
        showGuestSection
        formControls={formControls}
        formButton={formButton}
        handleSubmit={(state) => console.log(state)}
      />
    );

    expect(getByText("New Customers")).toBeInTheDocument();
    expect(getByText("Sign in for faster checkout.")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("Password")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();
    expect(getByText("Not registered yet?")).toBeInTheDocument();
  });

  it("should not render the continue as guest section", () => {
    const { queryByText, getByText } = render(
      <TmLogin
        formControls={formControls}
        formButton={formButton}
        handleSubmit={(state) => console.log(state)}
      />
    );

    expect(queryByText("New Customers")).toBeNull();

    expect(getByText("Sign in for faster checkout.")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("Password")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();
    expect(getByText("Not registered yet?")).toBeInTheDocument();
  });
});
