import { AtDivider } from "@mono-repo-demo/atomic-library";
import { MlCardCheckout } from "../../molecules";
import { TmCheckoutCompletedProps } from "./tm-checkout-completed.types";

export const TmCheckoutCompleted = ({
  successfullOrderTitle,
  subtitle,
  body,
  button,
  bottomText,
  copyright,
}: TmCheckoutCompletedProps) => {
  return (
    <View className="container min-h-full flex flex-col justify-between h-[calc(100vh-7rem)] pb-12">
      <View className="container flex flex-col items-center min-h-full justify-center">
        <View
          className="sm:w-[38.5rem] w-[20.4375rem]"
          data-testid="ml-card-checkout"
        >
          <MlCardCheckout
            title={successfullOrderTitle}
            subtitle={subtitle}
            button={button}
            body={body}
            bottomText={bottomText}
            icon="check-circle"
          />
        </View>
      </View>

      {copyright && (
        <View className="justify-end text-center">
          <AtDivider className="mb-1" />
          <Text data-testid={"copyright"} className="text-xxs text-tertiary">
            {copyright}
          </Text>
        </View>
      )}
    </View>
  );
};
