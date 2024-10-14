interface IProps {
  title: string;
  description: string;
  locale?: string;
  canonical: string;
  noIndex?: boolean;
  ogImage?: string;
  keywords: string;
  author?: string;
}

const createMetadata = (props: IProps) => {
  const {
    title,
    description,
    locale = 'en',
    ogImage,
    keywords,
    canonical,
    noIndex = false,
  } = props;

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? ''),
    title,
    keywords,
    description,
    openGraph: {
      title,
      description,
      url: new URL(process.env.NEXT_PUBLIC_URL ?? ''),
      siteName: 'Portfolio Avsievich',
      type: 'website',
      locale,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          type: `image/png`,
          alt: title,
        },
      ],
    },
    alternates: {
      canonical,
      types: {
        'application/rdf+xml': 'https://ogp.me/ns/ogp.me.rdf',
        'text/turtle': 'https://ogp.me/ns/ogp.me.ttl',
      },
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: noIndex,
    },
  };
};

export default createMetadata;
