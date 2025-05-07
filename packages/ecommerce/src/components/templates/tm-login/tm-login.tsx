import React from "react";
import { View, Text } from "react-native";

import {
  AtButton,
  AtButtonIconPosition,
  AtButtonVariants,
  AtDivider,
  AtLink,
} from "@mono-repo-demo/atomic-library";
import { OrFormColumn, OrForm } from "@mono-repo-demo/atomic-library";
import { useOrForm } from "@mono-repo-demo/atomic-library";
import { TmLoginProps } from "./tm-login.types";

const titleClasses = "text-xl font-bold mb-2 xl:mb-3 text-center text-primary";
const subtitleClasses = "text-original-400 text-center";

export const TmLogin = ({
  showGuestSection = false,
  showLoginSection = true,
  labels: {
    newCustomersTitle = "New Customers",
    newCustomersSubtitle = `Don't have an account? No problem, you can continue as a guest and create your account after completing your
    purchase.`,
    guestButtonLabel = "Continue as Guest",
    returningCustomerSubtitle = "Sign in for faster checkout.",
    returningCustomerTitle = "Returning Customers",
    googleButtonLabel = "Login with Google",
  } = {},
  signUp: {
    text = "Not registered yet?",
    signUpHref = "#",
    linkLabel = "Create an account",
  } = {},
  handleSubmit,
  formControls,
  formButton,
  copyright,
}: TmLoginProps) => {
  const manager = useOrForm(formControls);
  const dividerClasses = `border-t-[1px] xl:border-t-0 xl:border-l-[1px] h-full w-full xl:w-[1px] xl:h-[357px]`;
  const desktopBorderClasses = `xl:border xl:border-secondary xl:px-6 xl:py-8 xl:rounded-lg`;

  return (
    <View className="w-full flex flex-col gap-8 md:gap-10 xl:gap-12 items-center">
      <View className="mx-auto w-full max-w-[1440px] rounded-lg border border-secondary flex flex-col xl:border-none xl:flex-row gap-6 xl:gap-[6px] bg-white xl:bg-transparent">
        {showGuestSection && (
          <View
            className={`w-full px-6 pt-8 xl:order-last xl:self-start xl:bg-white ${desktopBorderClasses}`}
          >
            <Text className={`${titleClasses}`}>{newCustomersTitle}</Text>
            <Text className={`${subtitleClasses}`}>{newCustomersSubtitle}</Text>
            <AtButton className="mt-6 xl:mt-8">{guestButtonLabel}</AtButton>
          </View>
        )}

        {showGuestSection && showLoginSection && (
          <View className="flex px-6 xl:px-1 gap-6 items-center justify-center xl:flex-col">
            <AtDivider className={`${dividerClasses}`} />
            <Text className="text-lg text-tertiary xl:text-primary leading-6">
              OR
            </Text>
            <AtDivider className={`${dividerClasses}`} />
          </View>
        )}

        {showLoginSection && (
          <View
            className={`w-full px-6 pb-8 xl:h-fit xl:order-first xl:bg-white ${desktopBorderClasses}`}
          >
            <Text className={`${titleClasses}`}>{returningCustomerTitle}</Text>
            <Text className={`${subtitleClasses}`}>
              {returningCustomerSubtitle}
            </Text>
            <OrForm
              className="my-6 xl:mt-8 xl:mb-6"
              controls={formControls}
              columns={OrFormColumn.TWO}
              handleSubmit={handleSubmit}
              button={formButton}
              manager={manager}
            />
            <AtButton
              variant={AtButtonVariants.SECONDARY}
              iconType="google"
              iconPosition={AtButtonIconPosition.LEFT}
            >
              {googleButtonLabel}
            </AtButton>
            <View className="mt-8 flex gap-1 justify-center">
              <Text className="text-primary">{text}</Text>
              <AtLink label={linkLabel} href={signUpHref} />
            </View>
          </View>
        )}
      </View>

      <View className="flex flex-col w-full max-w-[1440px] text-center">
        <AtDivider className="mb-1" />
        <Text
          data-testid={"copyright"}
          className="text-xxs text-tertiary leading-4"
        >
          {copyright}
        </Text>
      </View>
    </View>
  );
};
