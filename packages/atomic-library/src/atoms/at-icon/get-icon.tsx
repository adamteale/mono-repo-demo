import { IconType } from './at-icon.types'
import { AlertIcon } from './icons/alert'
import { AngleIcon } from './icons/angle'
import { ApproveIcon } from './icons/approve'
import { ArrowIcon } from './icons/arrow'
import { BarsIcon } from './icons/bars'
import { BookmarkIcon } from './icons/bookmark'
import { BookmarkFullIcon } from './icons/bookmark-full'
import { CancelIcon } from './icons/cancel'
import { CancelCircleIcon } from './icons/cancel-circle'
import { CheckIcon } from './icons/check'
import { ClockIcon } from './icons/clock'
import { CopyrightIcon } from './icons/copyright'
import { CvvIcon } from './icons/cvv'
import { EnvelopeIcon } from './icons/envelope'
import { FilterIcon } from './icons/filter'
import { GitHubIcon } from './icons/github'
import { GlobalFavIcon } from './icons/global-favicon'
import { GoogleIcon } from './icons/google'
import { HeartIcon } from './icons/heart'
import { HeartBigIcon } from './icons/heart-big'
import { HeartFullIcon } from './icons/heart-full'
import { InfoIcon } from './icons/info'
import { InstagramIcon } from './icons/instagram'
import { LessIcon } from './icons/less'
import { LinkedInIcon } from './icons/linkedin'
import { LocationIcon } from './icons/location'
import { LogoFavIcon } from './icons/logo-favicon'
import { MessageIcon } from './icons/message'
import { NotifyIcon } from './icons/notify'
import { NotifySmallIcon } from './icons/notify-small'
import { PauseIcon } from './icons/pause'
import { PhoneIcon } from './icons/phone'
import { PlaneIcon } from './icons/plane'
import { PlayIcon } from './icons/play'
import { PlayPauseIcon } from './icons/play-pause'
import { PlusIcon } from './icons/plus'
import { QuestionMarkIcon } from './icons/question-mark'
import { RatingIcon } from './icons/rating'
import { RatingFullIcon } from './icons/rating-full'
import { ReloadIcon } from './icons/reload'
import { SearchIcon } from './icons/search'
import { ShippingTruckIcon } from './icons/shipping-truck'
import { ShopFavIcon } from './icons/shop-favicon'
import { ShoppingCartIcon } from './icons/shopping-cart'
import { SizeIcon } from './icons/size'
import { SmallCvvIcon } from './icons/small-cvv'
import { SpinnerIcon } from './icons/spinner'
import { SquareIcon } from './icons/square'
import { SquareCheckedIcon } from './icons/square-checked'
import { TrashIcon } from './icons/trash'
import { TwitterIcon } from './icons/twitter'
import { UserIcon } from './icons/user'
import { VisibilityIcon } from './icons/visibility'
import { VisibilityOffIcon } from './icons/visibility-off'
import { CheckCircleIcon } from './icons/check-circle'
import { FacebookIcon } from './icons/facebook'
import { InstagramFullIcon } from './icons/instagram-full'
import { BadgeIcon } from './icons/badge'
import { ShoppingBagIcon } from './icons/shopping-bag'

export const getIcon = (
  type: IconType,
  color: string,
  size?: number,
  className?: string,
  dataTestId?: string,
  ariaHidden?: 'true' | 'false',
) => {
  switch (type) {
    case 'alert':
      return (
        <AlertIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'angle-down':
      return (
        <AngleIcon
          fill={color}
          size={size}
          direction="down"
          className={className}
          dataTestId={dataTestId}
          ariaHidden={ariaHidden}
        />
      )
    case 'angle-left':
      return (
        <AngleIcon
          fill={color}
          size={size}
          direction="left"
          className={className}
          dataTestId={dataTestId}
          ariaHidden={ariaHidden}
        />
      )
    case 'angle-right':
      return (
        <AngleIcon
          fill={color}
          size={size}
          direction="right"
          className={className}
          dataTestId={dataTestId}
          ariaHidden={ariaHidden}
        />
      )
    case 'angle-up':
      return (
        <AngleIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'approve':
      return (
        <ApproveIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'arrow-right':
      return (
        <ArrowIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'arrow-left':
      return (
        <ArrowIcon
          fill={color}
          size={size}
          direction="left"
          className={className}
          dataTestId={dataTestId}
          ariaHidden={ariaHidden}
        />
      )
    case 'badge':
      return (
        <BadgeIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'bars':
      return <BarsIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
    case 'bookmark':
      return (
        <BookmarkIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'bookmark-full':
      return (
        <BookmarkFullIcon
          fill={color}
          size={size}
          className={className}
          dataTestId={dataTestId}
          ariaHidden={ariaHidden}
        />
      )
    case 'cancel':
      return (
        <CancelIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'cancel-circle':
      return (
        <CancelCircleIcon
          fill={color}
          size={size}
          className={className}
          dataTestId={dataTestId}
          ariaHidden={ariaHidden}
        />
      )
    case 'check':
      return (
        <CheckIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'clock':
      return (
        <ClockIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'copyright':
      return (
        <CopyrightIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'cvv':
      return <CvvIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
    case 'envelope':
      return (
        <EnvelopeIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'check-circle':
      return (
        <CheckCircleIcon
          fill={color}
          size={size}
          className={className}
          dataTestId={dataTestId}
          ariaHidden={ariaHidden}
        />
      )
    case 'facebook':
      return (
        <FacebookIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'filter':
      return (
        <FilterIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'github':
      return (
        <GitHubIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'global-favicon':
      return <GlobalFavIcon size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
    case 'google':
      return (
        <GoogleIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'heart-big':
      return (
        <HeartBigIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'heart-full':
      return (
        <HeartFullIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'heart':
      return (
        <HeartIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'info':
      return <InfoIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
    case 'instagram':
      return (
        <InstagramIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'instagram-full':
      return (
        <InstagramFullIcon
          fill={color}
          size={size}
          className={className}
          dataTestId={dataTestId}
          ariaHidden={ariaHidden}
        />
      )
    case 'linkedin':
      return (
        <LinkedInIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'less':
      return <LessIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
    case 'location':
      return (
        <LocationIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'logo-favicon':
      return <LogoFavIcon size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
    case 'message':
      return (
        <MessageIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'notify':
      return (
        <NotifyIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'notify-small':
      return (
        <NotifySmallIcon
          fill={color}
          size={size}
          className={className}
          dataTestId={dataTestId}
          ariaHidden={ariaHidden}
        />
      )
    case 'pause':
      return (
        <PauseIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'phone':
      return (
        <PhoneIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'plane':
      return (
        <PlaneIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'play':
      return <PlayIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
    case 'play-pause':
      return (
        <PlayPauseIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'plus':
      return <PlusIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
    case 'question-mark':
      return (
        <QuestionMarkIcon
          fill={color}
          size={size}
          className={className}
          dataTestId={dataTestId}
          ariaHidden={ariaHidden}
        />
      )
    case 'rating':
      return (
        <RatingIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'rating-full':
      return (
        <RatingFullIcon
          fill={color}
          size={size}
          className={className}
          dataTestId={dataTestId}
          ariaHidden={ariaHidden}
        />
      )
    case 'reload':
      return (
        <ReloadIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'search':
      return (
        <SearchIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'shipping-truck':
      return (
        <ShippingTruckIcon
          fill={color}
          size={size}
          className={className}
          dataTestId={dataTestId}
          ariaHidden={ariaHidden}
        />
      )
    case 'shopping-bag':
      return (
        <ShoppingBagIcon
          fill={color}
          size={size}
          className={className}
          dataTestId={dataTestId}
          ariaHidden={ariaHidden}
        />
      )
    case 'shopping-cart':
      return (
        <ShoppingCartIcon
          fill={color}
          size={size}
          className={className}
          dataTestId={dataTestId}
          ariaHidden={ariaHidden}
        />
      )
    case 'shop-favicon':
      return <ShopFavIcon size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
    case 'size':
      return <SizeIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
    case 'spinner':
      return (
        <SpinnerIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'small-cvv':
      return (
        <SmallCvvIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'square-checked':
      return (
        <SquareCheckedIcon
          fill={color}
          size={size}
          className={className}
          dataTestId={dataTestId}
          ariaHidden={ariaHidden}
        />
      )
    case 'square':
      return (
        <SquareIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'trash':
      return (
        <TrashIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'twitter':
      return (
        <TwitterIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
      )
    case 'user':
      return <UserIcon fill={color} size={size} className={className} dataTestId={dataTestId} ariaHidden={ariaHidden} />
    case 'visibility':
      return (
        <VisibilityIcon
          fill={color}
          size={size}
          className={className}
          dataTestId={dataTestId}
          ariaHidden={ariaHidden}
        />
      )
    case 'visibility-off':
      return (
        <VisibilityOffIcon
          fill={color}
          size={size}
          className={className}
          dataTestId={dataTestId}
          ariaHidden={ariaHidden}
        />
      )
    default:
      return null
  }
}
