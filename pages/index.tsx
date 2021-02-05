import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import PreviewBanner from '../components/PreviewBanner'
import Link from 'next/link'

type Props = any

export default function Home(props: Props): JSX.Element {
  const { locale, locales, asPath } = useRouter()
  const title = props.page?.pageTitle

  return (
    <div className="container">
      <Head>
        <title id="home-title">{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>hi</p>
        {props.preview && <PreviewBanner />}
        <Header title={title} />
        <span role="img" aria-label="globe emoji for language selection">
          🌐
        </span>
        {locales?.map((l) => (
          <Link href={asPath} locale={l} key={l}>
            <span
            // style={{
            //   font-weight: `${locale === l ? 'bold' : 'normal'}`,
            //   text-decoration: `${locale === l ? 'underline' : 'none'}`,
            //   text-transform: 'uppercase',
            // }}>
            >
              {l.split('-')[0]}
            </span>
          </Link>
        ))}
      </main>

      <Footer />
    </div>
  )
}
