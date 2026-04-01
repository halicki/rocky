type ArticleSchemaProps = {
  headline: string;
  datePublished: string;
  url: string;
  authorName?: string;
  publisherName?: string;
  publisherUrl?: string;
};

export function ArticleSchema({
  headline,
  datePublished,
  url,
  authorName = "Rocky",
  publisherName = "Surfing With Rocky",
  publisherUrl = "https://surfingwithrocky.com",
}: ArticleSchemaProps) {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        datePublished,
        author: { "@type": "Person", name: authorName },
        publisher: { "@type": "Organization", name: publisherName, url: publisherUrl },
        url,
      })}
    </script>
  );
}
