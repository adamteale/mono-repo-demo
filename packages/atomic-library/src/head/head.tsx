import { HeadProps } from './head.types'

export const HeadComponent = ({
  metaTitle,
  metaDescription,
  socialShareImageSrc,
  wrapper: Wrapper = 'head',
  canonicalUrl,
  noIndex,
  metaKeywords,
  slug,
  baseUrl,
  noFollow,
  faviconUrl,
}: HeadProps) => {
  const robots: string[] = []
  if (noIndex) robots.push('noindex')
  if (noFollow) robots.push('nofollow')

  const url = baseUrl && slug && `${baseUrl}${slug === '/' ? '' : slug}`

  const canonical = canonicalUrl ?? url

  return (
    <Wrapper>
      <meta charSet="utf-8" />
      <title>{metaTitle}</title>
      <meta property="og:title" content={metaTitle} key="title" />
      <meta name="description" content={metaDescription} />
      <meta name="og:description" content={metaDescription} />
      {socialShareImageSrc && <meta property="og:image" content={socialShareImageSrc} />}
      {robots.length && <meta name="robots" content={robots.join(',')} />}
      {metaKeywords && metaKeywords.length > 0 && <meta property="keywords" content={metaKeywords.join(',')} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {faviconUrl && (
        <>
          <link rel="shortcut icon" href={faviconUrl} type="image/svg+xml" />
          <link rel="icon" href={faviconUrl} type="image/svg+xml" />
        </>
      )}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={canonical} />}
    </Wrapper>
  )
}
