import { IconProps } from '../at-icon.types'

export const HeartFullIcon = ({ className, fill, size, dataTestId, ariaHidden }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`${className} ${fill}`}
      data-testid={dataTestId}
      aria-hidden={ariaHidden}
    >
      <path d="M20.1745 5.01024C19.1145 3.94744 17.7093 3.29878 16.2129 3.18141C14.7164 3.06404 13.2273 3.4857 12.0145 4.37024C10.7422 3.42387 9.15853 2.99475 7.58245 3.16927C6.00638 3.3438 4.55497 4.10901 3.5205 5.31082C2.48603 6.51263 1.94535 8.06176 2.00733 9.64625C2.06931 11.2307 2.72935 12.7329 3.85453 13.8502L10.0645 20.0702C10.5845 20.582 11.2849 20.8688 12.0145 20.8688C12.7441 20.8688 13.4445 20.582 13.9645 20.0702L20.1745 13.8502C21.3421 12.6755 21.9974 11.0865 21.9974 9.43024C21.9974 7.77396 21.3421 6.18497 20.1745 5.01024Z" />
    </svg>
  )
}
