import { SyntheticEvent } from 'react'
import { AtButton, AtButtonSize, AtButtonVariants, AtTextInput } from '../../atoms'

export interface NewsletterProps {
  title?: string
  description?: string
  inputText?: string
  buttonText?: string
  submitHandler?: (e?: SyntheticEvent) => void
}

export const Newsletter = ({
  title = 'Join our newsletter',
  description = 'Get the latest deals and more',
  inputText = 'Enter your email',
  buttonText = 'Sign Up',
  submitHandler,
}: NewsletterProps) => {
  return (
    <section className="flex flex-col text-center md:grid gap-5" data-testid="footer-newsletter">
      <div className="text-left md:col-span-1">
        {title && <h2 className="text-[1.25rem] text-secondary font-bold mb-3 ">{title}</h2>}
        {description && <p className="text-base text-neutral-300">{description}</p>}
      </div>

      {buttonText && buttonText && (
        <form className="flex flex-col items-center md:flex-row gap-5 md:col-span-2" onSubmit={submitHandler}>
          <div className="w-full md:w-96">
            <AtTextInput placeholder={inputText} />
          </div>
          <div className="w-full md:w-fit md:max-w-32 ">
            <AtButton variant={AtButtonVariants.QUARTENARY} dataTestId="newsletter-button" size={AtButtonSize.SMALL}>
              {buttonText}
            </AtButton>
          </div>
        </form>
      )}
    </section>
  )
}
