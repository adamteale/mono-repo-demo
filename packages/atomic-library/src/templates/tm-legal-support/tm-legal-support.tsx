import { AtDivider } from '../../atoms'
import { OrSidebarMenu } from '../../organisms'
import { TmLegalSupportProps } from './tm-legal-support.types'

export const TmLegalSupport = ({ title, menuProps, children }: TmLegalSupportProps) => {
  return (
    <div>
      <section className="py-8 md:py-10 xl:py-20 container">
        <h2 className="text-xl xl:text-2xl font-medium leading-7 xl:leading-10">{title}</h2>
      </section>
      <AtDivider />
      <section className="flex flex-col xl:flex-row py-10 xl:py-16 2xl:py-20 gap-12 md:gap-16 xl:gap-12 container">
        <OrSidebarMenu className="max-xl:!max-w-none md:w-79 lg:w-112 xl:h-fit xl:sticky xl:top-6" {...menuProps} />
        <div className="w-full xl:min-w-[47.25rem]">{children}</div>
      </section>
    </div>
  )
}
