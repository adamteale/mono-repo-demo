import {
  OrderShippingInfoFormFields,
  MlCardBasketProps,
  OrOrderSummaryProps,
  OrderShippingInfoForm,
  TmShippingInfo,
  DeliveryMethodsForm,
} from "@components-library/ecommerce";
import {
  AtButtonProps,
  AtButtonVariants,
} from "@mono-repo-demo/atomic-library";
import { TmShippingInfoPropsWrapper } from "./tm-shipping-info-wrapper.types";
import { useBasket } from "../../../context/basket/use-basket";
import { normalizeBasketItem } from "../../../utils/normalization/basket-item";
import { useStepper } from "../../../context/stepper/use-stepper";
import {
  ShippingInfoForm,
  StepperData,
} from "../tm-stepper-wrapper/tm-stepper-wrapper.types";
import { CustomerDataDto } from "../../../types";
import { useEffect, useState } from "react";
import {
  getBillingFormFields,
  getContactFormFields,
  getShippingFormFields,
  getDeliveryMethodsFormFields,
} from "./form-data-getters";
import { ShippingMethod } from "../../../types/basket/responses/shipping-method";
import { getShippingPriceLabel } from "../../../utils/basket/get-shipping-price-label";
import { useOrForm } from "@mono-repo-demo/atomic-library/src/organisms/or-form/use-or-form";

export const TmShippingInfoWrapper = ({
  template,
}: TmShippingInfoPropsWrapper) => {
  const { formLabels, copyrightText } = template;
  const {
    state: basketState,
    deleteItemFromBasket,
    updateBasket,
    updateBasketCustomerData,
    getBasketShippingMethods,
    setBasketShippingMethod,
  } = useBasket();
  const { basket, isPending } = basketState;
  const [showBillingForm, setShowBillingForm] = useState(true);
  const [isBasketReady, setIsBasketReady] = useState(false);
  const {
    goToNextStep,
    setStep,
    state: checkoutState,
  } = useStepper<StepperData>();

  const billingAddress = basket?.billingAddress;
  const shippingAddress = basket?.shipments?.[0].shippingAddress;
  const shippingSameAsBilling =
    shippingAddress && billingAddress
      ? JSON.stringify(shippingAddress) === JSON.stringify(billingAddress)
      : false;

  const contactFormFields = getContactFormFields(
    formLabels,
    basket?.customer?.email
  );
  const shippingFormFields = getShippingFormFields(
    setShowBillingForm,
    formLabels,
    shippingAddress,
    shippingSameAsBilling
  );
  const billingFormFields = getBillingFormFields(formLabels, billingAddress);
  const deliveryMethodSkeletons = getDeliveryMethodsFormFields({
    loading: true,
  });

  const [availableDeliveryMethods, setAvailableDeliveryMethods] =
    useState<ShippingMethod[]>();
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] =
    useState<ShippingMethod>();
  const [deliveryMethodIsLoading, setDeliveryMethodIsLoading] = useState(false);

  const [orderShippingInfoFormFields, setOrderShippingInfoFormFields] =
    useState<OrderShippingInfoForm>({
      fields: {
        ...contactFormFields,
        ...shippingFormFields,
        ...billingFormFields,
      },
    });

  const [deliveryMethodsFormFields, setDeliveryMethodsFormFields] =
    useState<DeliveryMethodsForm>({
      fields: deliveryMethodSkeletons,
    });

  const addressFormManager = useOrForm({});
  const deliveryMethodsFormManager = useOrForm({});

  useEffect(() => {
    if (!basket || isBasketReady) return;

    const newFields = {
      fields: {
        ...contactFormFields,
        ...shippingFormFields,
        ...billingFormFields,
      },
    };
    addressFormManager.resetForm();
    setOrderShippingInfoFormFields(newFields);
    setShowBillingForm(!shippingSameAsBilling);
    setIsBasketReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basket]);

  const formHasShippingAddress = (
    checkoutState.steps[checkoutState.currentStep].data as ShippingInfoForm
  ).shippingAddress;

  useEffect(() => {
    if (selectedDeliveryMethod) {
      setDeliveryMethodsFormFields({
        fields: getDeliveryMethodsFormFields({
          loading: true,
          skeletonCardCount: availableDeliveryMethods?.length,
        }),
      });
      setDeliveryMethodIsLoading(true);

      const setDeliveryMethod = async () => {
        await setBasketShippingMethod({
          shippingMethodId: selectedDeliveryMethod?.id ?? "",
          shipmentId: selectedDeliveryMethod?.shipmentId ?? "",
        });

        const updatedFields = { ...deliveryMethodsFormFields.fields };
        Object.keys(updatedFields).forEach((key) => {
          updatedFields[key].value =
            updatedFields[key].id === selectedDeliveryMethod.id;
        });
        setDeliveryMethodIsLoading(false);
        setDeliveryMethodsFormFields({ fields: updatedFields });
        deliveryMethodsFormManager.changeFields(updatedFields);
      };

      setDeliveryMethod();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDeliveryMethod]);

  useEffect(() => {
    if (!addressFormManager.state.isValid) {
      setDeliveryMethodsFormFields({
        fields: deliveryMethodSkeletons,
      });
    }

    if (
      // get delivery methods available again, if form was changed
      availableDeliveryMethods &&
      formHasShippingAddress &&
      addressFormManager.state.isValid
    ) {
      handleShippingInfoSubmit(addressFormManager.state as any);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressFormManager.state, addressFormManager.state.isValid]);

  useEffect(() => {
    const newFields = {
      fields: {
        ...contactFormFields,
        ...shippingFormFields,
      },
    };

    if (showBillingForm) {
      newFields.fields = {
        ...contactFormFields,
        ...shippingFormFields,
        ...billingFormFields,
      };
    }

    setOrderShippingInfoFormFields(newFields);
    addressFormManager.changeFields(newFields.fields);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showBillingForm]);

  const basketItems: MlCardBasketProps[] = [];

  const orderSummaryProps: OrOrderSummaryProps = {
    orderLabelArray: [
      {
        label: template.orderSummaryInfo?.subtotalLabel ?? "Subtotal",
        value: basket?.totalPrice?.formatted ?? "$0.00",
        tooltipContent: template.orderSummaryInfo?.subtotalTooltipContent,
      },
      {
        label: template.orderSummaryInfo?.discountsLabel ?? "Discounts",
        value:
          "$" +
          (
            basket?.items?.reduce((acc, item) => {
              if (item.totalOriginalPrice) {
                acc += item.totalOriginalPrice.amount - item.totalPrice.amount;
              }
              return acc;
            }, 0) ?? 0
          ).toFixed(2),
        tooltipContent: template.orderSummaryInfo?.discountsTooltipContent,
        valueIndicatorColor: "positive",
      },
      {
        label: template.orderSummaryInfo?.taxesLabel ?? "Taxes",
        value: "$0.00",
        tooltipContent:
          template.orderSummaryInfo?.taxesTooltipContent ??
          "Taxes Tooltip Content",
      },
      {
        label: template.orderSummaryInfo?.shippingLabel ?? "Shipping",
        value: getShippingPriceLabel(basketState, template),
        tooltipContent: template.orderSummaryInfo?.shippingTooltipContent,
      },
    ],
    withCart: true,
    items: basketItems,
    totalPrice: basket?.totalPrice?.formatted || "0.00",
    totalItems: basket?.totalItems,
    ...template.orderSummaryLabels,
    title: template?.orderSummaryLabels?.title || undefined,
    totalPriceLabel: template?.orderSummaryLabels?.totalPriceLabel || undefined,
    buttonProps: {
      label: template?.orderSummaryLabels?.buttonLabel || undefined,
    },
  };

  const copyrigthText =
    copyrightText ??
    "Copyright © 2024. Apply Digital. Tech Accelerator. All rights reserved.";

  async function handleShippingInfoSubmit(formData: {
    values: OrderShippingInfoFormFields;
  }) {
    const {
      email,
      shippingFirstName,
      shippingAdditionalInfo,
      shippingCity,
      shippingCountry,
      shippingLastName,
      shippingPhoneNumber,
      shippingAddress,
      shippingStreetNumber,
      shippingState,
      shippingZipCode,
      useAsBilling,
      billingFirstName,
      billingLastName,
      billingCity,
      billingPhoneNumber,
      billingCountry,
      billingAddress,
      billingStreetNumber,
      billingAdditionalInfo,
      billingState,
      billingZipCode,
    } = formData.values;

    let customerData: CustomerDataDto = {
      email: email?.value as string,
      shippingAddress: {
        firstName: shippingFirstName?.value as string,
        lastName: shippingLastName?.value as string,
        additionalInfo: shippingAdditionalInfo?.value as string,
        city: shippingCity?.value as string,
        postalCode: shippingZipCode?.value as string,
        countryCode: shippingCountry?.value as string,
        phone: (shippingPhoneNumber?.value as string).replace(/[()]/g, ""),
        streetName: shippingAddress?.value as string,
        streetNumber: shippingStreetNumber?.value as string,
        stateCode: shippingState?.value as string,
      },
      billingSameAsShipping: Boolean(useAsBilling?.value),
    };

    if (!useAsBilling.value) {
      customerData.billingAddress = {
        firstName: billingFirstName?.value as string,
        lastName: billingLastName?.value as string,
        additionalInfo: billingAdditionalInfo?.value as string,
        city: billingCity?.value as string,
        postalCode: billingZipCode?.value as string,
        countryCode: billingCountry?.value as string,
        phone: (billingPhoneNumber?.value as string).replace(/[()]/g, ""),
        streetName: billingAddress?.value as string,
        streetNumber: billingStreetNumber?.value as string,
        stateCode: billingState?.value as string,
      };
    }
    setDeliveryMethodsFormFields({
      fields: { ...getDeliveryMethodsFormFields({ loading: true }) },
    });
    const { basket, errors } = await updateBasketCustomerData(customerData);

    if (basket && !errors) {
      setStep(0, customerData);

      const response = await getBasketShippingMethods();
      if (response.basket) {
        setAvailableDeliveryMethods(response.basket);
        const deliveryMethodFormFields = getDeliveryMethodsFormFields({
          loading: false,
          shippingMethods: response.basket,
          handleMethodSelection: (key) => {
            setSelectedDeliveryMethod(response.basket[key]);
          },
        });
        setDeliveryMethodsFormFields({
          fields: {
            ...deliveryMethodFormFields,
          },
        });
        const selectedDeliveryMethod = response.basket.findIndex(
          (method) =>
            method.id === basketState.basket?.shipments?.[0].shippingMethod?.id
        );
        if (selectedDeliveryMethod !== -1)
          setSelectedDeliveryMethod(response.basket[selectedDeliveryMethod]);
      }
    }
  }

  const handleDeliveryMethodsSubmit = async () => {
    if (selectedDeliveryMethod && !deliveryMethodIsLoading)
      goToNextStep({
        ...checkoutState.steps[0].data,
        deliveryMethod: {
          deliveryType: selectedDeliveryMethod.name,
          shippingPrice: selectedDeliveryMethod.price.formatted,
        },
      });
  };

  const shippingInfoSubmitButton: AtButtonProps = {
    variant: AtButtonVariants.PRIMARY,
    children: orderSummaryProps.buttonProps?.label || "Choose delivery method",
    className: "px-32 py-2 mt-2 md:mt-3",
    disabled:
      Number(basket?.totalItems) >= 0 && addressFormManager.state.isValid
        ? false
        : true,
  };

  const deliveryMethodsSubmitButton: AtButtonProps = {
    variant: AtButtonVariants.PRIMARY,
    children: "Continue to payment",
    className: "px-32 py-2 mt-2 md:mt-3",
    disabled: !addressFormManager.state.isValid || deliveryMethodIsLoading,
  };

  return (
    <TmShippingInfo
      copyright={copyrigthText}
      shippingFormData={{
        formFields: orderShippingInfoFormFields,
        formManager: addressFormManager,
        onSubmitForm: handleShippingInfoSubmit,
        submitButton: !formHasShippingAddress
          ? shippingInfoSubmitButton
          : undefined,
      }}
      deliveryMethodsFormData={
        formHasShippingAddress
          ? {
              formFields: deliveryMethodsFormFields,
              formManager: deliveryMethodsFormManager,
              onSubmitForm: handleDeliveryMethodsSubmit,
              submitButton: deliveryMethodsSubmitButton,
            }
          : undefined
      }
      orderSummaryProps={orderSummaryProps}
    />
  );
};
