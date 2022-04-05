import { Link, routes } from '@redwoodjs/router'

import type { Post } from 'types/graphql'

const truncate = (text: string, length: number) => {
  return text.substring(0, length) + '...'
}

interface ArticleProps {
  article: Post
  summary?: boolean
}

const Article = ({ article, summary = false }: ArticleProps) => {
  return (
    <article>
      <header>
        <h2 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">
        {summary ? truncate(article.body, 100) : article.body}
      </div>
      <div className="mt-0.5 flex justify-end text-sm text-gray-600">
        Posted at: {article.createdAt}
      </div>
    </article>
  )
}

export default Article
