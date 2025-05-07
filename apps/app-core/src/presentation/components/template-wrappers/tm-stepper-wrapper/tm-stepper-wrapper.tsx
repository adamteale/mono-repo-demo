// import { TmStepper } from '@components-library/ecommerce'
import {
  // StepperData,
  // StepperTemplatesId,
  // TemplateRendererProps,
  // TmStepState,
  TmStepperWrapperProps,
} from "./tm-stepper-wrapper.types";
// import { StepperProvider } from '../../../context/stepper'
// import { useStepper } from "../../../context/stepper/use-stepper";
// import { TmOrderDetailWrapper } from '../tm-order-detail-wrapper/tm-order-detail-wrapper'
// import { TmPaymentOptionsWrapper } from '../tm-payment-options-wrapper/tm-payment-options-wrapper'
// import { TmShippingInfoWrapper } from '../tm-shipping-info-wrapper/tm-shipping-info-wrapper'
// import {
//   // CMSOrderDetails, CMSPaymentOptions, CMSShippingInfo,
//   CMSStepper,
// } from "@cms-types/common";

export const TmStepperWrapper = ({ template }: TmStepperWrapperProps) => {
  return null;
  // const stepperStateSteps: TmStepState[] =
  //   template.steps?.map((step) => ({
  //     label: step?.label ?? '',
  //     data: {}, // Here adds template default form data if needed
  //   })) || []

  // return (
  //   <StepperProvider<StepperData> steps={stepperStateSteps}>
  //     <TmStepperBase template={template} />
  //   </StepperProvider>
  // )
};

// const TmStepperBase = ({ template }: TmStepperWrapperProps) => {
//   const { state } = useStepper()

//   const stepperSteps =
//     template.steps?.map((step, idx) => ({
//       isActive: state.currentStep === idx,
//       label: step?.label ?? '',
//       step: String(idx + 1),
//     })) || []

//   return (
//     <TmStepper steps={stepperSteps}>
//       <TmStepperTemplateRenderer template={template} />
//     </TmStepper>
//   )
// }

// const TmStepperTemplateRenderer = ({ template }: { template: CMSStepper }) => {
//   const { state } = useStepper();
//   const { currentStep } = state;

//   let templateId = undefined;
//   let contentTemplate = undefined;

//   if (template.steps) {
//     templateId = template.steps[currentStep]?.template
//       ?.contentTypeId as StepperTemplatesId;
//     contentTemplate = template.steps[currentStep]?.template;
//   }

//   return (
//     <>
//       <TemplateRenderer id={templateId} template={contentTemplate} />
//     </>
//   );
// };

// function TemplateRenderer({ id, template }: TemplateRendererProps) {
//   return null;
//   // const componentsMap = {
//   //   // Replace with the necessary components
//   //   tmShippingInfo: <TmShippingInfoWrapper template={template as CMSShippingInfo} />,
//   //   tmOrderDetail: <TmOrderDetailWrapper template={template as CMSOrderDetails} />,
//   //   tmPaymentOptions: <TmPaymentOptionsWrapper template={template as CMSPaymentOptions} />,
//   // }
//   // if (typeof id !== 'string' || !template) {
//   //   return null
//   // }
//   // return componentsMap[id] ?? null
// }
