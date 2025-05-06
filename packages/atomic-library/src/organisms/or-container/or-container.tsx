import { View } from "react-native";
import { OrContainerProps } from "./or-container.types";
import {
  childrenContainerClasses,
  dividerClasses,
  sectionClasses,
  titleClasses,
} from "./or-container.variants";

export const OrContainer = ({
  title,
  titleAlign,
  subHeading,
  supportingText,
  hasParagraphs,
  paragraphLayout,
  columns,
  columnsTablet,
  columnsMobile,
  columnsSmallMobile,
  background,
  children,
}: OrContainerProps) => {
  return (
    <View className={sectionClasses({ backgroundColor: background })}>
      <View
        className={dividerClasses({
          hasTitle: !!title,
          titleAlignment: titleAlign,
        })}
      >
        <View className="flex flex-col">
          {subHeading && (
            <Text
              className="text-lg font-bold text-neutral-500 tracking-0.1 mb-3 md:text-lgx"
              data-testid="or-container-header"
            >
              {subHeading}
            </Text>
          )}
          {title && (
            <Text
              className={titleClasses({ titleAlignment: titleAlign })}
              data-testid="or-container-header"
            >
              {title}
            </Text>
          )}
          {supportingText && (
            <Text
              className="text-lg text-neutral-500 leading-8 tracking-0.1 md:text-lgx md:leading-[2.375rem] xl:leading-10"
              data-testid="or-container-header"
            >
              {supportingText}
            </Text>
          )}
        </View>

        <View
          className={childrenContainerClasses({
            hasParagraphs,
            paragraphLayout,
            titleAlignment: titleAlign,
            columnsMobile,
            columnsSmallMobile,
            columnsTablet,
            columnsDesktop: columns,
          })}
          data-testid="or-container-div"
        >
          {children}
        </View>
      </View>
    </View>
  );
};
