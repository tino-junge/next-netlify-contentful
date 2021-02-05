import { GraphQLClient, gql } from 'graphql-request'
import type { Page, Query } from '../generated/graphql'

const isError = (error: unknown): error is Error =>
  typeof error === 'object' && error instanceof Error

const filterMaybe = <T>(value?: T | null | undefined): value is T =>
  value !== null && value !== undefined

const AllPagesQuery = gql`
  query AllPages($preview: Boolean) {
    pageCollection(preview: $preview) {
      items {
        sys {
          id
        }
      }
    }
  }
`

const PageQuery = gql`
  query Page($pageId: String!, $preview: Boolean, $locale: String) {
    page(id: $pageId, preview: $preview, locale: $locale) {
      pageTitle
    }
  }
`

const getToken = (preview = false): string =>
  `Bearer ${
    preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
  }`

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`
const graphQlClient = new GraphQLClient(endpoint)

type QueryVariablesWithPreview = { preview: boolean; [key: string]: unknown }

async function fetchGraphQL<
  T,
  Variables extends QueryVariablesWithPreview = QueryVariablesWithPreview
>(query: string, variables: Variables): Promise<T> {
  try {
    graphQlClient.setHeader('Authorization', getToken(variables.preview))

    return graphQlClient.request<T>(query, variables)
  } catch (error) {
    if (isError(error)) {
      console.error(`${error.name} ${error.message}`, error)
    } else {
      console.error(error)
    }
    throw new Error('Failed to fetch contentful data')
  }
}

export async function getAllPages(preview = false): Promise<Page[]> {
  const data = await fetchGraphQL<Pick<Query, 'pageCollection'>>(AllPagesQuery, {
    preview,
  })

  return (data.pageCollection?.items.filter((item) => filterMaybe(item)) as Page[]) ?? []
}

export async function getPage(
  pageId: string,
  preview = false,
  locale = 'en-US',
): Promise<Page | null> {
  const data = await fetchGraphQL<Pick<Query, 'page'>>(PageQuery, {
    preview,
    pageId,
    locale,
  })

  return data.page ?? null
}
