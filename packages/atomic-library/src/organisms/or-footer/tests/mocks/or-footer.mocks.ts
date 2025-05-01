import { OrFooterProps } from '../../or-footer.types'

export const footerBaseMock: OrFooterProps = {
  brand: {
    image: {
      imageDesktop: {
        src: 'https://picsum.photos/124/64',
        alt: 'footer-brand',
      },
    },
    link: {
      href: '#',
    },
  },
  description: 'BeeShop and Bee are trademarks and/or registered trademarks of Reign.',
  copyright: '© 2024 BeeShop',
}

export const footerMockWithNewsletterProps: OrFooterProps = {
  ...footerBaseMock,
  newsLetter: {
    buttonText: 'Button',
    description: 'Newsletter description',
    title: 'Newsletter',
    inputText: 'send e-mail',
  },
}

export const footerMockWithMenuItemsProps: OrFooterProps = {
  ...footerBaseMock,
  menuItems: [
    {
      label: 'About',
      isLowerCase: true,
      items: [
        {
          label: 'About us',
          linkProps: {
            href: '#',
          },
          isOpen: false,
        },
        {
          label: 'Our stores',
          linkProps: {
            href: '#',
          },
          isOpen: false,
        },
        {
          label: 'Newsletter',
          linkProps: {
            href: '#',
          },
          isOpen: false,
        },
      ],
    },
    {
      label: 'Help & Support',
      items: [
        {
          label: 'Contact US',
          linkProps: {
            href: '#',
          },
          isOpen: false,
        },
        {
          label: 'Shipping Info',
          linkProps: {
            href: '#',
          },
          isOpen: false,
        },
        {
          label: 'Returns',
          linkProps: {
            href: '#',
          },
          isOpen: false,
        },
      ],
    },
    {
      label: 'Policy',
      items: [
        {
          label: 'Terms & Conditions',
          linkProps: {
            href: '#',
          },
          isOpen: false,
        },
        {
          label: 'Privacy & Cookie Policy',
          linkProps: {
            href: '#',
          },
          isOpen: false,
        },
      ],
    },
  ],
}

export const mockWithAllProps: OrFooterProps = {
  ...footerMockWithMenuItemsProps,
  ...footerMockWithNewsletterProps,
}
