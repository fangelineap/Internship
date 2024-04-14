'use client'

import { useVotes } from "@/hooks/useVotes"
import { ArrowUp } from "./icons/up"
import { useArticles } from "@/hooks/useArticles"

export type Article = {
    id: number,
    created_at?: string,
    title: string,
    votes?: any[],
}

const ArticleItem = ({ article: { title, id, votes } } : { article: Article }) => {
  
  const { newVote } = useArticles();

  return (
    <div className="border flex px-4 py-3 items-center justify-between cursor-pointer hover:bg-gray-900">
        <h2>{title}</h2>
        <div className="grid items-center text-center">
            <span onClick={() => newVote(id)}><ArrowUp /></span>
            <span>{votes?.length} votes</span>
            <span onClick={() => newVote(id, true)} className="rotate-180"><ArrowUp /></span>
        </div>
    </div>
  )
}

export default ArticleItem