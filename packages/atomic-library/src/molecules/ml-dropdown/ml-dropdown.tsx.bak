import { useRef, useState, SyntheticEvent, useEffect } from "react";
import { AtDivider, AtIcon } from "../../atoms";
import {
  MlDropdownDividerPosition,
  MlDropdownProps,
} from "./ml-dropdown.types";
import { useClickOutside } from "../../utils";
import {
  dropdownContainerClass,
  dropdownContentClasses,
  summaryClasses,
} from "./ml-dropdown.variants";

export const MlDropdown = ({
  children,
  title,
  initiallyOpen = false,
  dividerClassName,
  summaryTextClassName = "",
  containerClassName = "",
  childrenContainerClassName = "",
  divider = true,
  hasBackground = true,
  closeOnClickOutside = false,
  closeOnActionTaken = false,
  dataTestId = "ml-dropdown",
  dividerPosition = MlDropdownDividerPosition.TOP,
  isOpen: controlledIsOpen,
  onToggle: controlledOnToggle,
  iconClassName,
  sortByDesktopFilter,
}: MlDropdownProps) => {
  const isControlled = controlledIsOpen !== undefined;

  const [internalIsOpen, setInternalIsOpen] = useState(initiallyOpen);
  const details = useRef<HTMLDetailsElement>(null);

  const [definitiveIsOpen, setDefinitiveIsOpen] = useState(
    isControlled ? controlledIsOpen : internalIsOpen
  );

  useEffect(() => {
    setDefinitiveIsOpen(isControlled ? controlledIsOpen : internalIsOpen);
  }, [controlledIsOpen, isControlled, internalIsOpen]);

  useClickOutside(details, () => {
    if (closeOnClickOutside) {
      setInternalIsOpen(false);
    }
  });

  const handleClick = () => {
    if (isControlled) {
      controlledOnToggle?.();
    }
  };

  const handleToggle = (event: SyntheticEvent<HTMLDetailsElement, Event>) => {
    if (!isControlled) {
      setInternalIsOpen(event.currentTarget.open);
    }
  };

  return (
    <View
      data-testid={dataTestId}
      className={`${containerClassName} ${dropdownContainerClass({
        background: !!hasBackground,
      })}`}
    >
      {divider && dividerPosition === MlDropdownDividerPosition.TOP && (
        <AtDivider className={dividerClassName} />
      )}
      <details
        ref={details}
        open={definitiveIsOpen}
        onClick={() => handleClick()}
        onToggle={(event) => handleToggle(event)}
        data-testid="ml-dropdown-details"
        role="group"
      >
        <summary
          className={`${summaryClasses({
            openDefinitive: definitiveIsOpen,
            desktopFilter: sortByDesktopFilter,
          })} ${summaryTextClassName} [&::-webkit-details-marker]:hidden`}
          id="ml-dropdown-summary"
          data-testid="ml-dropdown-summary"
          aria-expanded={definitiveIsOpen}
          aria-controls="ml-dropdown-content"
        >
          {title}
          <AtIcon
            className={`transition-transform h-6 w-6 p-[2px] ${iconClassName}`}
            type={definitiveIsOpen ? "angle-up" : "angle-down"}
            color={definitiveIsOpen ? "active" : "primary"}
            aria-hidden="true"
          />
        </summary>
        <View
          id="ml-dropdown-content"
          data-testid="ml-dropdown-content"
          aria-labelledby="ml-dropdown-summary"
          className={`${dropdownContentClasses({
            openDefinitive: definitiveIsOpen,
            desktopFilter: sortByDesktopFilter,
          })} ${childrenContainerClassName}`}
          onClick={(e) => {
            e.stopPropagation();

            if (!closeOnActionTaken) return;

            if (e.target instanceof HTMLButtonElement) {
              setInternalIsOpen(false);
            }
          }}
        >
          {children}
        </View>
      </details>
      {divider && dividerPosition === MlDropdownDividerPosition.BOTTOM && (
        <AtDivider className={dividerClassName} />
      )}
    </View>
  );
};
