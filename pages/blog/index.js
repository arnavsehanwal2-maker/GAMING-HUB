import Link from 'next/link'

const articles = [
  {
    title: "Best Free Browser Games to Play in 2026",
    slug: "best-free-browser-games-2026",
  },
  {
    title: "Top Racing Games You Can Play Online",
    slug: "top-racing-games-online",
  },
]

export default function Blog() {
  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: 'auto' }}>
      <h1>Gaming Blog</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.slug} style={{ margin: '10px 0' }}>
            <Link href={`/blog/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
