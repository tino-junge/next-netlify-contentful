export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any
}

export type Query = {
  __typename?: 'Query'
  asset?: Maybe<Asset>
  assetCollection?: Maybe<AssetCollection>
  page?: Maybe<Page>
  pageCollection?: Maybe<PageCollection>
  contentType5Ffz9NtMRtcw8Dv2VkgMjv?: Maybe<ContentType5Ffz9NtMRtcw8Dv2VkgMjv>
  contentType5Ffz9NtMRtcw8Dv2VkgMjvCollection?: Maybe<ContentType5Ffz9NtMRtcw8Dv2VkgMjvCollection>
}

export type QueryAssetArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<AssetFilter>
  order?: Maybe<Array<Maybe<AssetOrder>>>
}

export type QueryPageArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<PageFilter>
  order?: Maybe<Array<Maybe<PageOrder>>>
}

export type QueryContentType5Ffz9NtMRtcw8Dv2VkgMjvArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryContentType5Ffz9NtMRtcw8Dv2VkgMjvCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<ContentType5Ffz9NtMRtcw8Dv2VkgMjvFilter>
  order?: Maybe<Array<Maybe<ContentType5Ffz9NtMRtcw8Dv2VkgMjvOrder>>>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset'
  sys: Sys
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  contentType?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Int']>
  url?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  linkedFrom?: Maybe<AssetLinkingCollections>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type Sys = {
  __typename?: 'Sys'
  id: Scalars['String']
  spaceId: Scalars['String']
  environmentId: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  firstPublishedAt?: Maybe<Scalars['DateTime']>
  publishedVersion?: Maybe<Scalars['Int']>
}

export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>
}

export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
}

export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  pageCollection?: Maybe<PageCollection>
  imagePlateCollection?: Maybe<ImagePlateCollection>
}

export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AssetLinkingCollectionsPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AssetLinkingCollectionsImagePlateCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type EntryCollection = {
  __typename?: 'EntryCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Entry>>
}

export type Entry = {
  sys: Sys
}

export type PageCollection = {
  __typename?: 'PageCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Page>>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page'
  sys: Sys
  linkedFrom?: Maybe<PageLinkingCollections>
  pageTitle?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  blocksCollection?: Maybe<PageBlocksCollection>
  socialCardTitle?: Maybe<Scalars['String']>
  socialCardDescription?: Maybe<Scalars['String']>
  socialCardImage?: Maybe<Asset>
  socialCardVideo?: Maybe<Asset>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/page) */
export type PagePageTitleArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/page) */
export type PageSlugArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/page) */
export type PageBlocksCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/page) */
export type PageSocialCardTitleArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/page) */
export type PageSocialCardDescriptionArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/page) */
export type PageSocialCardImageArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/page) */
export type PageSocialCardVideoArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type PageLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type PageBlocksCollection = {
  __typename?: 'PageBlocksCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<PageBlocksItem>>
}

export type PageBlocksItem = CopyBlock | ImagePlate

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/copyBlock) */
export type CopyBlock = Entry & {
  __typename?: 'CopyBlock'
  sys: Sys
  linkedFrom?: Maybe<CopyBlockLinkingCollections>
  title?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  ctaUrl?: Maybe<Scalars['String']>
  ctaText?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/copyBlock) */
export type CopyBlockLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/copyBlock) */
export type CopyBlockTitleArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/copyBlock) */
export type CopyBlockBodyArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/copyBlock) */
export type CopyBlockCtaUrlArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/copyBlock) */
export type CopyBlockCtaTextArgs = {
  locale?: Maybe<Scalars['String']>
}

export type CopyBlockLinkingCollections = {
  __typename?: 'CopyBlockLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  pageCollection?: Maybe<PageCollection>
}

export type CopyBlockLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type CopyBlockLinkingCollectionsPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/imagePlate) */
export type ImagePlate = Entry & {
  __typename?: 'ImagePlate'
  sys: Sys
  linkedFrom?: Maybe<ImagePlateLinkingCollections>
  title?: Maybe<Scalars['String']>
  heading?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  imageStacked?: Maybe<Asset>
  imageUnstacked?: Maybe<Asset>
  ctaUrl?: Maybe<Scalars['String']>
  ctaText?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/imagePlate) */
export type ImagePlateLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/imagePlate) */
export type ImagePlateTitleArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/imagePlate) */
export type ImagePlateHeadingArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/imagePlate) */
export type ImagePlateBodyArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/imagePlate) */
export type ImagePlateImageStackedArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/imagePlate) */
export type ImagePlateImageUnstackedArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/imagePlate) */
export type ImagePlateCtaUrlArgs = {
  locale?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/imagePlate) */
export type ImagePlateCtaTextArgs = {
  locale?: Maybe<Scalars['String']>
}

export type ImagePlateLinkingCollections = {
  __typename?: 'ImagePlateLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  pageCollection?: Maybe<PageCollection>
}

export type ImagePlateLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ImagePlateLinkingCollectionsPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ImagePlateCollection = {
  __typename?: 'ImagePlateCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<ImagePlate>>
}

export type AssetFilter = {
  sys?: Maybe<SysFilter>
  title_exists?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  description_exists?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  description_not?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_contains?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  url_exists?: Maybe<Scalars['Boolean']>
  url?: Maybe<Scalars['String']>
  url_not?: Maybe<Scalars['String']>
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  url_contains?: Maybe<Scalars['String']>
  url_not_contains?: Maybe<Scalars['String']>
  size_exists?: Maybe<Scalars['Boolean']>
  size?: Maybe<Scalars['Int']>
  size_not?: Maybe<Scalars['Int']>
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  size_gt?: Maybe<Scalars['Int']>
  size_gte?: Maybe<Scalars['Int']>
  size_lt?: Maybe<Scalars['Int']>
  size_lte?: Maybe<Scalars['Int']>
  contentType_exists?: Maybe<Scalars['Boolean']>
  contentType?: Maybe<Scalars['String']>
  contentType_not?: Maybe<Scalars['String']>
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  contentType_contains?: Maybe<Scalars['String']>
  contentType_not_contains?: Maybe<Scalars['String']>
  fileName_exists?: Maybe<Scalars['Boolean']>
  fileName?: Maybe<Scalars['String']>
  fileName_not?: Maybe<Scalars['String']>
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  fileName_contains?: Maybe<Scalars['String']>
  fileName_not_contains?: Maybe<Scalars['String']>
  width_exists?: Maybe<Scalars['Boolean']>
  width?: Maybe<Scalars['Int']>
  width_not?: Maybe<Scalars['Int']>
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  width_gt?: Maybe<Scalars['Int']>
  width_gte?: Maybe<Scalars['Int']>
  width_lt?: Maybe<Scalars['Int']>
  width_lte?: Maybe<Scalars['Int']>
  height_exists?: Maybe<Scalars['Boolean']>
  height?: Maybe<Scalars['Int']>
  height_not?: Maybe<Scalars['Int']>
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  height_gt?: Maybe<Scalars['Int']>
  height_gte?: Maybe<Scalars['Int']>
  height_lt?: Maybe<Scalars['Int']>
  height_lte?: Maybe<Scalars['Int']>
  OR?: Maybe<Array<Maybe<AssetFilter>>>
  AND?: Maybe<Array<Maybe<AssetFilter>>>
}

export type SysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['String']>
  id_not?: Maybe<Scalars['String']>
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  id_contains?: Maybe<Scalars['String']>
  id_not_contains?: Maybe<Scalars['String']>
  publishedAt_exists?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['String']>
  publishedAt_not?: Maybe<Scalars['String']>
  publishedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  publishedAt_contains?: Maybe<Scalars['String']>
  publishedAt_not_contains?: Maybe<Scalars['String']>
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>
  firstPublishedAt?: Maybe<Scalars['String']>
  firstPublishedAt_not?: Maybe<Scalars['String']>
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  firstPublishedAt_contains?: Maybe<Scalars['String']>
  firstPublishedAt_not_contains?: Maybe<Scalars['String']>
  publishedVersion_exists?: Maybe<Scalars['Boolean']>
  publishedVersion?: Maybe<Scalars['String']>
  publishedVersion_not?: Maybe<Scalars['String']>
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['String']>>>
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  publishedVersion_contains?: Maybe<Scalars['String']>
  publishedVersion_not_contains?: Maybe<Scalars['String']>
}

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type AssetCollection = {
  __typename?: 'AssetCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Asset>>
}

export type PageFilter = {
  sys?: Maybe<SysFilter>
  pageTitle_exists?: Maybe<Scalars['Boolean']>
  pageTitle?: Maybe<Scalars['String']>
  pageTitle_not?: Maybe<Scalars['String']>
  pageTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>
  pageTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  pageTitle_contains?: Maybe<Scalars['String']>
  pageTitle_not_contains?: Maybe<Scalars['String']>
  slug_exists?: Maybe<Scalars['Boolean']>
  slug?: Maybe<Scalars['String']>
  slug_not?: Maybe<Scalars['String']>
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  slug_contains?: Maybe<Scalars['String']>
  slug_not_contains?: Maybe<Scalars['String']>
  blocksCollection_exists?: Maybe<Scalars['Boolean']>
  socialCardTitle_exists?: Maybe<Scalars['Boolean']>
  socialCardTitle?: Maybe<Scalars['String']>
  socialCardTitle_not?: Maybe<Scalars['String']>
  socialCardTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>
  socialCardTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  socialCardTitle_contains?: Maybe<Scalars['String']>
  socialCardTitle_not_contains?: Maybe<Scalars['String']>
  socialCardDescription_exists?: Maybe<Scalars['Boolean']>
  socialCardDescription?: Maybe<Scalars['String']>
  socialCardDescription_not?: Maybe<Scalars['String']>
  socialCardDescription_in?: Maybe<Array<Maybe<Scalars['String']>>>
  socialCardDescription_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  socialCardDescription_contains?: Maybe<Scalars['String']>
  socialCardDescription_not_contains?: Maybe<Scalars['String']>
  socialCardImage_exists?: Maybe<Scalars['Boolean']>
  socialCardVideo_exists?: Maybe<Scalars['Boolean']>
  OR?: Maybe<Array<Maybe<PageFilter>>>
  AND?: Maybe<Array<Maybe<PageFilter>>>
}

export enum PageOrder {
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SocialCardTitleAsc = 'socialCardTitle_ASC',
  SocialCardTitleDesc = 'socialCardTitle_DESC',
  SocialCardDescriptionAsc = 'socialCardDescription_ASC',
  SocialCardDescriptionDesc = 'socialCardDescription_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ImagePlateFilter = {
  sys?: Maybe<SysFilter>
  title_exists?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  heading_exists?: Maybe<Scalars['Boolean']>
  heading?: Maybe<Scalars['String']>
  heading_not?: Maybe<Scalars['String']>
  heading_in?: Maybe<Array<Maybe<Scalars['String']>>>
  heading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  heading_contains?: Maybe<Scalars['String']>
  heading_not_contains?: Maybe<Scalars['String']>
  body_exists?: Maybe<Scalars['Boolean']>
  body?: Maybe<Scalars['String']>
  body_not?: Maybe<Scalars['String']>
  body_in?: Maybe<Array<Maybe<Scalars['String']>>>
  body_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  body_contains?: Maybe<Scalars['String']>
  body_not_contains?: Maybe<Scalars['String']>
  imageStacked_exists?: Maybe<Scalars['Boolean']>
  imageUnstacked_exists?: Maybe<Scalars['Boolean']>
  ctaUrl_exists?: Maybe<Scalars['Boolean']>
  ctaUrl?: Maybe<Scalars['String']>
  ctaUrl_not?: Maybe<Scalars['String']>
  ctaUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>
  ctaUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  ctaUrl_contains?: Maybe<Scalars['String']>
  ctaUrl_not_contains?: Maybe<Scalars['String']>
  ctaText_exists?: Maybe<Scalars['Boolean']>
  ctaText?: Maybe<Scalars['String']>
  ctaText_not?: Maybe<Scalars['String']>
  ctaText_in?: Maybe<Array<Maybe<Scalars['String']>>>
  ctaText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  ctaText_contains?: Maybe<Scalars['String']>
  ctaText_not_contains?: Maybe<Scalars['String']>
  OR?: Maybe<Array<Maybe<ImagePlateFilter>>>
  AND?: Maybe<Array<Maybe<ImagePlateFilter>>>
}

export enum ImagePlateOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  CtaUrlAsc = 'ctaUrl_ASC',
  CtaUrlDesc = 'ctaUrl_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type CopyBlockFilter = {
  sys?: Maybe<SysFilter>
  title_exists?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  body_exists?: Maybe<Scalars['Boolean']>
  body?: Maybe<Scalars['String']>
  body_not?: Maybe<Scalars['String']>
  body_in?: Maybe<Array<Maybe<Scalars['String']>>>
  body_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  body_contains?: Maybe<Scalars['String']>
  body_not_contains?: Maybe<Scalars['String']>
  ctaUrl_exists?: Maybe<Scalars['Boolean']>
  ctaUrl?: Maybe<Scalars['String']>
  ctaUrl_not?: Maybe<Scalars['String']>
  ctaUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>
  ctaUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  ctaUrl_contains?: Maybe<Scalars['String']>
  ctaUrl_not_contains?: Maybe<Scalars['String']>
  ctaText_exists?: Maybe<Scalars['Boolean']>
  ctaText?: Maybe<Scalars['String']>
  ctaText_not?: Maybe<Scalars['String']>
  ctaText_in?: Maybe<Array<Maybe<Scalars['String']>>>
  ctaText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  ctaText_contains?: Maybe<Scalars['String']>
  ctaText_not_contains?: Maybe<Scalars['String']>
  OR?: Maybe<Array<Maybe<CopyBlockFilter>>>
  AND?: Maybe<Array<Maybe<CopyBlockFilter>>>
}

export enum CopyBlockOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  CtaUrlAsc = 'ctaUrl_ASC',
  CtaUrlDesc = 'ctaUrl_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type CopyBlockCollection = {
  __typename?: 'CopyBlockCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<CopyBlock>>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/5Ffz9ntMRtcw8DV2VkgMjv) */
export type ContentType5Ffz9NtMRtcw8Dv2VkgMjv = Entry & {
  __typename?: 'ContentType5Ffz9NtMRtcw8Dv2VkgMjv'
  sys: Sys
  linkedFrom?: Maybe<ContentType5Ffz9NtMRtcw8Dv2VkgMjvLinkingCollections>
  migrationVersion?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/5Ffz9ntMRtcw8DV2VkgMjv) */
export type ContentType5Ffz9NtMRtcw8Dv2VkgMjvLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/c6ev9qrqxi81/content_types/5Ffz9ntMRtcw8DV2VkgMjv) */
export type ContentType5Ffz9NtMRtcw8Dv2VkgMjvMigrationVersionArgs = {
  locale?: Maybe<Scalars['String']>
}

export type ContentType5Ffz9NtMRtcw8Dv2VkgMjvLinkingCollections = {
  __typename?: 'ContentType5Ffz9NtMRtcw8Dv2VkgMjvLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type ContentType5Ffz9NtMRtcw8Dv2VkgMjvLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ContentType5Ffz9NtMRtcw8Dv2VkgMjvFilter = {
  sys?: Maybe<SysFilter>
  migrationVersion_exists?: Maybe<Scalars['Boolean']>
  migrationVersion?: Maybe<Scalars['String']>
  migrationVersion_not?: Maybe<Scalars['String']>
  migrationVersion_in?: Maybe<Array<Maybe<Scalars['String']>>>
  migrationVersion_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  migrationVersion_contains?: Maybe<Scalars['String']>
  migrationVersion_not_contains?: Maybe<Scalars['String']>
  OR?: Maybe<Array<Maybe<ContentType5Ffz9NtMRtcw8Dv2VkgMjvFilter>>>
  AND?: Maybe<Array<Maybe<ContentType5Ffz9NtMRtcw8Dv2VkgMjvFilter>>>
}

export enum ContentType5Ffz9NtMRtcw8Dv2VkgMjvOrder {
  MigrationVersionAsc = 'migrationVersion_ASC',
  MigrationVersionDesc = 'migrationVersion_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ContentType5Ffz9NtMRtcw8Dv2VkgMjvCollection = {
  __typename?: 'ContentType5Ffz9NtMRtcw8Dv2VkgMjvCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<ContentType5Ffz9NtMRtcw8Dv2VkgMjv>>
}

export type AllPagesQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>
}>

export type AllPagesQuery = { __typename?: 'Query' } & {
  pageCollection?: Maybe<
    { __typename?: 'PageCollection' } & {
      items: Array<
        Maybe<{ __typename?: 'Page' } & { sys: { __typename?: 'Sys' } & Pick<Sys, 'id'> }>
      >
    }
  >
}

export type PageQueryVariables = Exact<{
  pageId: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
}>

export type PageQuery = { __typename?: 'Query' } & {
  page?: Maybe<
    { __typename?: 'Page' } & Pick<Page, 'pageTitle' | 'slug'> & {
        blocksCollection?: Maybe<
          { __typename?: 'PageBlocksCollection' } & {
            items: Array<
              Maybe<
                | ({ __typename: 'CopyBlock' } & Pick<
                    CopyBlock,
                    'title' | 'body' | 'ctaUrl' | 'ctaText'
                  > & { sys: { __typename?: 'Sys' } & Pick<Sys, 'id'> })
                | ({ __typename: 'ImagePlate' } & Pick<
                    ImagePlate,
                    'title' | 'heading' | 'body' | 'ctaUrl' | 'ctaText'
                  > & {
                      sys: { __typename?: 'Sys' } & Pick<Sys, 'id'>
                      imageStacked?: Maybe<{ __typename?: 'Asset' } & Pick<Asset, 'title' | 'url'>>
                      imageUnstacked?: Maybe<
                        { __typename?: 'Asset' } & Pick<Asset, 'title' | 'url'>
                      >
                    })
              >
            >
          }
        >
      }
  >
}
