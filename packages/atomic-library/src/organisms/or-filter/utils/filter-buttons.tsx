import { View } from "react-native";
import {
  AtButton,
  AtButtonIconPosition,
  AtButtonSize,
  AtButtonVariants,
} from "../../../atoms";

interface FilterButtonsProps {
  onClearFilters?(): void;
  clearAllFiltersLabel: string;
  handleOpenModal: (scrollToTop?: boolean) => void;
  filterModalOpenFiltersLabel?: string;
  filterButtonClassName?: string;
  deleteFiltersButtonClassName?: string;
}

export const FilterButtons = ({
  onClearFilters,
  clearAllFiltersLabel,
  handleOpenModal,
  filterModalOpenFiltersLabel,
  filterButtonClassName,
  deleteFiltersButtonClassName,
}: FilterButtonsProps) => {
  return (
    <>
      <View className={`${filterButtonClassName}`}>
        <AtButton
          variant={AtButtonVariants.SECONDARY}
          size={AtButtonSize.SMALL}
          iconType="filter"
          iconPosition={AtButtonIconPosition.LEFT}
          onClick={() => handleOpenModal(true)}
          className="bg-transparent"
          dataTestId="open-filter-button-mobile"
        >
          {filterModalOpenFiltersLabel}
        </AtButton>
      </View>

      <View className={`${deleteFiltersButtonClassName}`}>
        <AtButton
          iconType="trash"
          variant={AtButtonVariants.TERTIARY}
          size={AtButtonSize.SMALL}
          iconPosition={AtButtonIconPosition.LEFT}
          onClick={onClearFilters}
          dataTestId="clear-filter-button-mobile"
        >
          {clearAllFiltersLabel.toUpperCase()}
        </AtButton>
      </View>
    </>
  );
};
