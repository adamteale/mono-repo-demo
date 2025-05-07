import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MlVerticalTeam, MlVerticalTeamProps } from ".";

const mlVerticalTeamProps: MlVerticalTeamProps = {
  teamName: "Test Name",
  role: "Test Role",
  roleDescription: "Test RoleDescription",
};

describe("molecules/ml-vertical-team", () => {
  describe("when the component is mounted without image", () => {
    it("renders without crashing", () => {
      const { getByAltText, getByText } = render(
        <MlVerticalTeam
          image={{
            imageDesktop: {
              src: "/image",
              alt: "image description",
            },
          }}
          {...mlVerticalTeamProps}
        />
      );
      const image = getByAltText("image description");
      const teamName = getByText(mlVerticalTeamProps.teamName);
      const role = getByText(mlVerticalTeamProps.role);
      const roleDescription = getByText(mlVerticalTeamProps.roleDescription);

      expect(image).not.toBeUndefined();
      expect(teamName).toBeInTheDocument();
      expect(role).toBeInTheDocument();
      expect(roleDescription).toBeInTheDocument();
      expect(teamName.compareDocumentPosition(role)).toBe(4);
      expect(role.compareDocumentPosition(roleDescription)).toBe(4);
    });

    it("does not render the image", () => {
      const { queryByRole } = render(
        <MlVerticalTeam {...mlVerticalTeamProps} />
      );
      expect(queryByRole("img")).not.toBeInTheDocument();
    });
  });

  describe("when the component is mounted with image", () => {
    it("renders without crashing", () => {
      const { getByAltText, getByText } = render(
        <MlVerticalTeam
          image={{
            imageDesktop: {
              src: "/image",
              alt: "image description",
            },
          }}
          {...mlVerticalTeamProps}
        />
      );
      const image = getByAltText("image description");
      const teamName = getByText(mlVerticalTeamProps.teamName);
      const role = getByText(mlVerticalTeamProps.role);
      const roleDescription = getByText(mlVerticalTeamProps.roleDescription);

      expect(image).toBeInTheDocument();
      expect(teamName).toBeInTheDocument();
      expect(role).toBeInTheDocument();
      expect(roleDescription).toBeInTheDocument();
      expect(image?.compareDocumentPosition(teamName)).toBe(4);
      expect(teamName.compareDocumentPosition(role)).toBe(4);
      expect(role.compareDocumentPosition(roleDescription)).toBe(4);
    });
  });
});
