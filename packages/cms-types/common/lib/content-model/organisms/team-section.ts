import { CMSVerticalTeam } from '../molecules'

export interface CMSTeamSection {
  title: string
  description: string
  teamCards: CMSVerticalTeam[]
  contentTypeId?: string
}
