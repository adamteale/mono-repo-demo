import { Text } from "react-native";
import { AtLink, IconPositions } from "../../atoms";
import { MlBreadcrumbProps } from "./ml-breadcrumb.types";

export const MlBreadcrumb = ({ links, className = "" }: MlBreadcrumbProps) => {
  const commonLinkClassName =
    "block text-link hover:text-link-hover hover:underline hover:decoration-2 hover:underline-offset-2 font-medium";

  return (
    <nav aria-label="Breadcrumb" className={`text-link text-base ${className}`}>
      <ol className="hidden md:flex gap-x-2">
        {links.length === 1 && (
          <li>
            <AtLink
              ariaCurrent="page"
              {...links[0]}
              className={commonLinkClassName}
              dataTestId={`desktop-breadcrumb-link-0`}
              tabIndex={0}
            />
          </li>
        )}
        {links.length > 1 &&
          links.map((linkProps, idx) => {
            const isLastElement = idx === links.length - 1;
            const key = `breadcrumb-item-${idx}`;
            return (
              <li key={key} className="flex gap-x-2">
                {idx > 0 && (
                  <Text key={key} role="presentation" className="text-primary">
                    /
                  </Text>
                )}
                {isLastElement ? (
                  <Text className="font-normal" aria-current="page">
                    {linkProps.children ?? linkProps.label}
                  </Text>
                ) : (
                  <AtLink
                    {...linkProps}
                    className={commonLinkClassName}
                    dataTestId={`desktop-breadcrumb-link-${idx}`}
                    tabIndex={0}
                  />
                )}
              </li>
            );
          })}
      </ol>
      <AtLink
        {...links[links.length > 1 ? links.length - 2 : 0]}
        iconProps={{ type: "arrow-left" }}
        iconPosition={IconPositions.LEFT}
        dataTestId="mobile-breadcrumb-link"
        className={`${commonLinkClassName} md:hidden`}
      />
    </nav>
  );
};
