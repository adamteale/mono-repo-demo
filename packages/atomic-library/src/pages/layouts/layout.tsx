import { OrHeader, OrFooter } from '../../organisms'
import { LayoutProps } from './layout.types'

export const Layout = ({ header, footer, children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <OrHeader {...header} />
      <main className="w-full flex-1">{children}</main>
      <OrFooter {...footer} />
    </div>
  )
}
