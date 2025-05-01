import { CMSStep } from '../semantics'

export interface CMSStepper {
  steps?: CMSStep[]
  contentTypeId?: string
}
