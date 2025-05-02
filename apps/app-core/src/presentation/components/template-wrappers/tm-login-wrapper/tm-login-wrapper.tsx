import React from "react";
import {
  AtButtonProps,
  AtButtonVariants,
  MlFormFieldType,
  OrFormControls,
  emailValidator,
  minLenghtValidator,
} from "@mono-repo-demo/atomic-library";
import { TmLoginWrapperProps } from "./tm-login-wrapper.types";
import { OrFormState } from "@components-library/common/src/components/organisms/or-form/use-or-form";
import { TmLogin } from "@components-library/ecommerce";

export const TmLoginWrapper = ({ template }: TmLoginWrapperProps) => {
  const handleSubmit = (state: OrFormState) => {
    console.log(state);
  };

  const { form } = template;

  const formControls: OrFormControls = {
    email: {
      type: MlFormFieldType.INPUT,
      required: true,
      label: form?.emailLabel ?? "Email",
      placeholder: form?.emailPlaceholder ?? "Email",
      errorText: "Please enter a valid email",
      validator: emailValidator,
      columnClass: "col-span-2",
    },
    password: {
      type: MlFormFieldType.PASSWORD,
      required: true,
      label: form?.passwordLabel ?? "Password",
      placeholder: form?.passwordPlaceholder ?? "Password",
      validator: minLenghtValidator(10),
      errorText: "Your password must contain at least 10 characters",
      columnClass: "col-span-2",
    },
    rememberMe: {
      type: MlFormFieldType.CHECKBOX,
      required: false,
      label: form?.rememberMeLabel ?? "Remember me",
      className: "",
      checked: false,
      columnClass: "py-3",
    },
    forgotPassword: {
      type: MlFormFieldType.LINK,
      label: form?.forgotPasswordLabel ?? "Forgot Password?",
      href: form?.forgotPasswordHref ?? "#",
      columnClass: "flex items-center justify-end py-3",
    },
  };

  const formButton: AtButtonProps = {
    children: template.form?.submitButtonLabel ?? "Login",
    variant: AtButtonVariants.PRIMARY,
    className: "w-full",
  };

  const copyrigthText =
    template.copyrightText ??
    "Copyright © 2023. Apply Digital. Tech Accelerator. All rights reserved.";

  return (
    <View className="container py-8 sm:py-8 md:py-10 xl:py-12">
      <TmLogin
        showGuestSection
        handleSubmit={handleSubmit}
        formButton={formButton}
        formControls={formControls}
        labels={template.labels}
        signUp={template.signUp}
        copyright={copyrigthText}
      />
    </View>
  );
};
