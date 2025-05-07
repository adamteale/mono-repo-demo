import { MlMediaProps } from "../ml-media";

export interface MlVerticalTeamProps {
  /** An optional CSS class to apply custom styling to the component. */
  className?: string;

  /** An optional object containing image properties for displaying the team member's photo. */
  image?: MlMediaProps;

  /** The role or position of the team member within the team. */
  role: string;

  /** A brief description of the team member's role and responsibilities. */
  roleDescription: string;

  /** The name of the team member. */
  teamName: string;
}
