import { OrFormColumn, OrForm } from "@mono-repo-demo/atomic-library";
import { TmShippingInfoProps } from "./tm-shipping-info.types";
import { TmCheckout } from "../tm-checkout";

export const TmShippingInfo = ({
  orderSummaryProps,
  copyright,
  shippingFormData,
  deliveryMethodsFormData,
}: TmShippingInfoProps) => {
  return (
    <TmCheckout copyright={copyright} orderSummaryProps={orderSummaryProps}>
      <View
        className="order-2 xl:order-1 w-full"
        data-testid="tm-shipping-info"
      >
        <View
          className={`flex flex-col gap-6 px-4 py-6 bg-surface-primary md:px-6 md:py-8 md:gap-8 border rounded-lg border-secondary`}
        >
          <OrForm
            columns={OrFormColumn.TWO}
            controls={shippingFormData.formFields.fields}
            handleSubmit={shippingFormData.onSubmitForm}
            button={shippingFormData.submitButton}
            changeControls
            manager={shippingFormData.formManager}
          />

          {deliveryMethodsFormData && (
            <OrForm
              columns={OrFormColumn.TWO}
              controls={deliveryMethodsFormData.formFields.fields}
              handleSubmit={deliveryMethodsFormData.onSubmitForm}
              button={deliveryMethodsFormData.submitButton}
              changeControls
              manager={deliveryMethodsFormData.formManager}
            />
          )}
        </View>
      </View>
    </TmCheckout>
  );
};
