import { MlVerticalTeam } from "@mono-repo-demo/atomic-library";
import { MlVerticalTeamRendererProps } from "../renderer.types";
import { normalizeMedia } from "../../normalization/media";

export const MlVerticalTeamRenderer = ({
  block,
  className,
}: MlVerticalTeamRendererProps) => {
  const { image, teamName, role, roleDescription } = block;

  return (
    <MlVerticalTeam
      image={image ? normalizeMedia(image) : undefined}
      teamName={teamName}
      role={role}
      roleDescription={roleDescription}
      className={className}
    />
  );
};
