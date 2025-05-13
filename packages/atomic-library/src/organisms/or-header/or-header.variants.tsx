import { cva } from "class-variance-authority";

//HEADER
const brandContainerBaseClass = "flex flex-row items-center xl:hidden";
export const brandContainerClasses = cva(brandContainerBaseClass, {
  variants: {
    isMobileMenuOpen: {
      true: "gap-3 md:gap-8",
      false: "gap-8",
    },
  },
  defaultVariants: { isMobileMenuOpen: false },
});

//HEADER ITEMS
const menuItemBaseClass =
  "pb-4 pt-4 text-white hover:text-white xl:max-w-max xl:py-0 xl:text-primary xl:hover:text-primary";
export const menuItemClasses = cva(menuItemBaseClass, {
  variants: {
    isMenuOpenDesktop: {
      true: "after:block after:w-full after:-bottom-2 after:left-0 after:rounded xl:after:bg-navbar-content-primary",
      false: "",
    },
    isIndexZero: {
      true: "",
      false:
        "border-t border-secondary hover:after:bg-transparent xl:border-none xl:hover:after:bg-navbar-content-primary",
    },
  },
  defaultVariants: { isMenuOpenDesktop: false, isIndexZero: true },
});

const searchboxContainerBaseClass = `
    transition ease-out duration-500
    flex flex-col 2xl:hidden
    w-full h-full
    fixed top-0 right-0 z-50
    bg-surface-primary
    px-7 py-5
    overflow-y-scroll
`;

export const searchboxContainerClasses = cva(searchboxContainerBaseClass, {
  variants: {
    showMobileSearchbox: {
      true: "translate-x-0", // Show the search box: no translation
      false: "translate-x-[110vw]", // Hide it: off-screen
    },
  },
  defaultVariants: {
    // Add a default variant to ENSURE initial visibility.
    showMobileSearchbox: false, // Or true, depending on initial desired state
  },
});
