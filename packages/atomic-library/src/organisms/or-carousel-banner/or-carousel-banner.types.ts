import { OrHeroBannerProps } from "../or-hero-banner";

export interface OrCarouselBannerProps {
  dataTestId?: string;
  slides?: OrHeroBannerProps[];
  interval?: number;
  hideIndicators?: boolean;
  enableAutoplay?: boolean;
  disableAutoplayOnInteraction?: boolean;
  pauseAutoplayOnHover?: boolean;
  className?: string;
}

export enum LayoutType {
  CONTAINER = "container",
  CONTAINER_FLUID = "container-fluid",
}
