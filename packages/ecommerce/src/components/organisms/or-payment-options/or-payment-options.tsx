import { AtButton, AtButtonVariants } from "@mono-repo-demo/atomic-library";
import { OrPaymentOptionsProps } from "./or-payment-options.types";
import { PaymentOptionCard } from "./payment-option-card/payment-option-card";
import { buttonClasses } from "./or-payment-options.variants";

export const OrPaymentOptions = ({
  paymentOptions,
  title,
  className,
  dataTestId,
}: OrPaymentOptionsProps) => {
  return (
    <View
      className={`bg-white flex flex-col gap-6 py-6 md:py-8 px-4 md:px-6 border rounded-lg border-transparent md:border-original-300 ${className}`}
      data-testid={dataTestId}
    >
      <Text className="text-lgx md:text-xl font-bold text-primary md:mb-2">
        {title}
      </Text>
      {paymentOptions.map((paymentOption, idx) => (
        <View key={`payment-option-fragment-${idx}`}>
          <PaymentOptionCard
            radioProps={paymentOption.radioProps}
            formProps={paymentOption.formProps}
            images={paymentOption.images}
            dataTestId={`payment-option-${idx}`}
          />
          <AtButton
            {...paymentOption.buttonProps}
            buttonType="submit"
            className={`
            ${paymentOption.buttonProps.className} 
            ${buttonClasses({ checked: !!paymentOption.radioProps.checked })}
            `}
            form={paymentOption.radioProps.title}
            variant={AtButtonVariants.PRIMARY}
          />
        </View>
      ))}
    </View>
  );
};
