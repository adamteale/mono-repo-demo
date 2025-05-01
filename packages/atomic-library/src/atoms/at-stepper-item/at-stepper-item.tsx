import { AtStepperItemProps } from './at-stepper-item.types'
import { ringClasses, dividerClasses, labelTextClasses, stepTextClasses } from './at-stepper.variants'

export const AtStepperItem = ({ label, step, isActive = true }: AtStepperItemProps) => {
  return (
    <div className="flex items-center flex-col gap-y-4" role="stepper" aria-current={isActive ? 'step' : 'false'}>
      <div className="flex flex-col items-center gap-y-2">
        <div className={ringClasses({ isActive })}>
          <p className={stepTextClasses({ isActive })}>{step}</p>
        </div>
        <p className={labelTextClasses({ isActive })}>{label}</p>
      </div>
      <hr className={dividerClasses({ isActive })} role="divider" />
    </div>
  )
}
