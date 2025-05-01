import { AtLink, AtDivider } from '../../atoms'
import { MlMedia, MlMediaFit } from '../../molecules'
import { Newsletter } from './newsletter'
import { OrFooterProps } from './or-footer.types'
import { menuItemsClasses } from './or-footer.variants'

export const OrFooter = ({ copyright, description, menuItems, newsLetter, brand }: OrFooterProps) => {
  return (
    <footer className="bg-footer-fill-primary py-16" data-testid="footer">
      <div className="flex flex-col text-footer-primary container">
        {newsLetter && (
          <div>
            <Newsletter {...newsLetter} />
            <AtDivider className="!border-secondary absolute inset-x-0 mt-16 border-t-[0.03125rem]" />
          </div>
        )}

        {/* menu items */}
        <div className={menuItemsClasses({ hasNewsLetter: !!newsLetter })}>
          {menuItems && (
            <section className="flex flex-col md:flex-wrap md:flex-row gap-12 md:gap-16">
              {menuItems?.map((menuItem, index) => {
                return (
                  <div key={index} data-testid={'menu-item'}>
                    <h2 className="mb-6 text-base font-bold text-secondary">{menuItem.label}</h2>

                    {menuItem.items.length > 0 && (
                      <ul>
                        {menuItem.items?.map((child, index) => (
                          <li key={index} className="mb-5">
                            <AtLink
                              label={child.label}
                              {...child.linkProps}
                              className="text-secondary text-sm hover:underline hover:text-secondary"
                            />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              })}
            </section>
          )}

          {/* brand */}
          {(brand || description) && (
            <div className="order-last lg:order-first max-w-[12rem]">
              {brand && (
                <AtLink {...brand.link} className="w-fit mb-6 h-5">
                  {brand.image && <MlMedia {...brand.image} fit={MlMediaFit.COVER} />}
                </AtLink>
              )}

              {description && (
                <p className="text-xs mb-4 text-tertiary">
                  {description} <span>{copyright}</span>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
