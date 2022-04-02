import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Article from 'src/components/Article/Article'
import { FindArticleQuery } from 'types/graphql'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ article }: CellSuccessProps<FindArticleQuery>) => {
  return <Article article={article} />
}
