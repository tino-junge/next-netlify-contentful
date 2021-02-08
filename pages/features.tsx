import { getAllPages, getPage } from '../lib/contentful'

import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'
import type { Page } from '../generated/graphql'
import PreviewBanner from '../components/PreviewBanner'
import { useRouter } from 'next/router'

type Props = {
  page: Page | null
  pages: Page[]
  preview: boolean
}

const pageId = process.env.CONTENTFUL_PAGE_ID || ''

export const getStaticProps: GetStaticProps<Props> = async ({ preview, locale }) => {
  const page = await getPage(pageId, preview, locale)
  const pages = await getAllPages(preview)
  return { props: { page, pages, preview: preview ?? false } }
}

export default function Home(props: Props): JSX.Element {
  const { locale, locales, asPath } = useRouter()
  const title = props.page?.pageTitle

  return (
    <div className="container">
      <Head>
        <title id="home-title">Features</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {props.preview && <PreviewBanner />}
        <p>
          <Link href={'/'}>
            <a>{'< Back'}</a>
          </Link>
        </p>
        <p>Features</p>
        <Header title={title || ''} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '200px',
          }}>
          <span role="img" aria-label="globe emoji for language selection">
            🌐
          </span>
          {locales?.map((l) => (
            <Link href={asPath} locale={l} key={l}>
              <a
                style={{
                  textDecoration: `${locale === l ? 'underline' : 'none'}`,
                  textTransform: 'uppercase',
                }}>
                {l.split('-')[0]}
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
