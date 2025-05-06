import {
  MlVerticalTeamProps,
  OrTeamSection,
} from "@mono-repo-demo/atomic-library";
import { OrTeamSectionRendererProps } from "../renderer.types";
import { normalizeMedia } from "../../normalization/media";
import { CMSVerticalTeam } from "@mono-repo-demo/atomic-library";

export const OrTeamSectionRenderer = ({
  block,
}: OrTeamSectionRendererProps) => {
  const { title, description, teamCards } = block;

  const teamCardsProps: MlVerticalTeamProps[] = teamCards.map(
    (item: CMSVerticalTeam) => ({
      teamName: item?.teamName ?? "",
      role: item?.role ?? "",
      roleDescription: item?.roleDescription ?? "",
      image: item?.image ? normalizeMedia(item?.image) : undefined,
    })
  );

  return (
    <OrTeamSection
      title={title}
      description={description}
      teamCards={teamCardsProps}
    />
  );
};
