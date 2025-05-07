import { Text } from "react-native";
import { AtRadio } from "../../atoms";
import { MlRadioCardProps } from "./ml-radio-card.types";
import { containerClasses, labelClasses } from "./ml-radio-card.variants";

export const MlRadioCard = ({ label, radioProps }: MlRadioCardProps) => {
  const { checked, disabled } = radioProps;

  const titleClass = "!font-bold";

  return (
    <label className={containerClasses({ disabled, checked })}>
      <AtRadio
        {...radioProps}
        titleClassName={titleClass}
        ariaLabelAddOn={label}
      />

      <Text className={labelClasses({ disabled })} aria-hidden>
        {label}
      </Text>
    </label>
  );
};
