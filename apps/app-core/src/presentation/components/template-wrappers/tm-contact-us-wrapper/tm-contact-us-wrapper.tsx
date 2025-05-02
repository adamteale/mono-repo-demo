import {
  AtButtonVariants,
  OrFormColumn,
  MlFormFieldType,
  TmContactUs,
  TmContactUsProps,
} from "@mono-repo-demo/atomic-library";
import { TmContactUsPropsWrapper } from "./tm-contact-us-wrapper.types";
import { OrRichTextRenderer } from "../../component-renderers/renderers/or-rich-text.renderer";

export const TmContactUsWrapper = ({ template }: TmContactUsPropsWrapper) => {
  const content = template.content;
  const iconLinks = template.iconLinks;
  const formFields = template.formFields;
  const emailValidator = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );

  const tmContactUsProps: TmContactUsProps = {
    orContentProps: {
      iconLinks: iconLinks ? <OrRichTextRenderer block={iconLinks} /> : "",
      title: content?.title ?? "Contact Us",
      children: content ? <OrRichTextRenderer block={content} /> : "",
    },
    orFormProps: {
      columns: OrFormColumn.TWO,
      controls: {
        firstName: {
          type: MlFormFieldType.INPUT,
          placeholder: formFields?.namePlaceholder ?? "Eg. Jhon",
          label: formFields?.nameLabel ?? "First Name",
          errorText: formFields?.nameError,
          required: true,
          columnClass: "col-span-2 md:col-span-1",
        },
        lastName: {
          type: MlFormFieldType.INPUT,
          placeholder: formFields?.lastNamePlaceholder ?? "Eg. Smith",
          label: formFields?.lastNameLabel ?? "Last Name",
          errorText: formFields?.lastNameError,
          required: true,
          columnClass: "col-span-2 md:col-span-1",
        },
        email: {
          type: MlFormFieldType.INPUT,
          placeholder:
            formFields?.emailPlaceholder ?? "Eg. jhonsmith@email.com",
          label: formFields?.emailLabel ?? "Email",
          errorText: formFields?.emailError,
          required: true,
          validator: emailValidator,
          columnClass: "col-span-2",
        },
        message: {
          type: MlFormFieldType.TEXT_AREA,
          placeholder: formFields?.messagePlaceholder ?? "Text",
          label: formFields?.messageLabel ?? "Message",
          errorText: formFields?.messageError,
          required: true,
          columnClass: "col-span-2",
        },
      },
      button: {
        variant: AtButtonVariants.PRIMARY,
        children: "Submit",
        className: "mt-3",
      },
      noValidate: false,
      handleSubmit: () => {}, // TODO: Implements submit function
    },
  };

  return <TmContactUs {...tmContactUsProps} />;
};
