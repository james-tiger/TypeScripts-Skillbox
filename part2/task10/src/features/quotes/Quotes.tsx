import { useGetQuotesQuery } from './quotesAPI'

export function Quotes() {
  const { data: quotes, isLoading, error } = useGetQuotesQuery()

  if (isLoading) {
    return <div>Loading quotes...</div>
  }

  if (error) {
    return <div>Error loading quotes</div>
  }

  return (
    <div>
      <h2>Inspirational Quotes</h2>
      <div>
        {quotes?.map((quote) => (
          <div key={quote.id} style={{ margin: '1rem 0', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <p style={{ fontStyle: 'italic' }}>"{quote.quote}"</p>
            <p style={{ textAlign: 'right', fontWeight: 'bold' }}>- {quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 