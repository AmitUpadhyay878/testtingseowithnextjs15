import { Geist, Geist_Mono, Public_Sans } from "next/font/google";
import '../assets/scss/globals.scss'

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const publicSans = Public_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-publicSans'
})

export async function generateMetadata() {
 
  // const Organization = {
  //   "@context": "https://schema.org",
  //   "@type": "Organization",
  //   name: "MultiQoS",
  //   url: "https://www.multiqos.com",
  //   logo: "/favicon.ico",
  //   founder: [
  //     {
  //       "@type": "Person",
  //       name: "Prashant Pujara",
  //     },
  //   ],
  //   contactPoint: [
  //     {
  //       "@type": "ContactPoint",
  //       telephone: "+1-800-555-1234",
  //       contactType: "customer service",
  //       areaServed: "US",
  //       availableLanguage: "English",
  //     },
  //   ],
  //   sameAs: [
  //     "https://www.facebook.com/MultiQoS",
  //     "https://twitter.com/MultiQoS",
  //     "https://www.linkedin.com/company/multiqos",
  //     "https://www.instagram.com/MultiQoS",
  //   ],
  // };
  // const localBusinessData = {
  //   "@context": "https://schema.org",
  //   "@type": "LocalBusiness",
  //   name: "MultiQoS",
  //   image: "https://d19cx7uv5wsln6.cloudfront.net/assets/images/logo.svg",
  //   "@id": "MultiQoS",
  //   url: "https://multiqos.com/",
  //   telephone: "+1 309-247-5073",
  //   priceRange: "$",
  //   address: [
  //     {
  //       "@type": "PostalAddress",
  //       streetAddress: "150 E Beech Drive",
  //       addressLocality: "Schaumburg",
  //       addressRegion: "IL",
  //       postalCode: "60193",
  //       addressCountry: "US",
  //     },
  //     {
  //       "@type": "PostalAddress",
  //       streetAddress: "701, Gala Empire, Drive-in-road",
  //       addressLocality: "Ahmedabad",
  //       postalCode: "380052",
  //       addressCountry: "India",
  //     },
  //     {
  //       "@type": "PostalAddress",
  //       streetAddress: "Thomas Jefferson Street 41",
  //       addressLocality: "Mannheim",
  //       postalCode: "68309",
  //       addressCountry: "Germany",
  //     },
  //   ],
  //   openingHoursSpecification: {
  //     "@type": "OpeningHoursSpecification",
  //     dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  //     opens: "10:00",
  //     closes: "19:30",
  //   },
  //   sameAs: [
  //     "https://www.facebook.com/Multiqos",
  //     "https://twitter.com/multiqos",
  //     "https://www.instagram.com/multiqos",
  //     "https://www.youtube.com/channel/UCPhykv2fhGq9Dn6r2g7ELrw",
  //     "https://www.linkedin.com/company/multiqos",
  //     "https://www.pinterest.com/multiqos_technologies/",
  //     "https://github.com/MultiQoSTechnologies/",
  //     "https://multiqos.com/",
  //   ],
  //   contactPoint: {
  //     "@type": "ContactPoint",
  //     telephone: "+1-309-247-5073",
  //     contactType: "Customer Service",
  //     email: "biz@multiqos.com",
  //     areaServed: ["US", "CA", "UK"],
  //   },
  // };
  // const websiteData = {
  //   "@context": "https://schema.org",
  //   "@type": "WebSite",
  //   "@id": "https://multiqos.com/#website",
  //   url: "https://multiqos.com/",
  //   name: "MultiQoS",
  //   potentialAction: {
  //     "@type": "SearchAction",
  //     target: "https://multiqos.com/?s={search_term_string}",
  //     "query-input": "required name=search_term_string",
  //   },
  // };
  // const webpageData = {
  //   "@context": "https://schema.org",
  //   "@type": "WebPage",
  //   "@id": "https://multiqos.com/#webpage",
  //   url: "https://multiqos.com/",
  //   inLanguage: "en-US",
  //   name: "Home",
  //   isPartOf: {
  //     "@id": "https://multiqos.com/#website",
  //   },
  //   description:
  //     "As a prominent software development company, MultiQoS provides customized software solutions that help businesses worldwide transform operations and drive growth.",
  // };
 
  return {
    title: "Software Development Company in USA and India - MultiQoS",
    description: "As a prominent software development company, MultiQoS provides customized software solutions that help businesses worldwide transform operations and drive growth.",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    themeColor: "#ffffff",
    icons: [
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon.svg" },
      // { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    ],
    openGraph: {
      type: "website",
      url: "https://multiqos.com",
      title: "Software Development Company in USA and India - MultiQoS",
      description: "As a prominent software development company, MultiQoS provides customized software solutions that help businesses worldwide transform operations and drive growth.",
      images: [
        {
          url: "https://d19cx7uv5wsln6.cloudfront.net/assets/images/ogimages/home.jpg",
          width: 1200,
          height: 630,
          alt: "MultiQoS Technology",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Software Development Company in USA and India - MultiQoS",
      description: "As a prominent software development company, MultiQoS provides customized software solutions that help businesses worldwide transform operations and drive growth.",
      images: ["https://d19cx7uv5wsln6.cloudfront.net/assets/images/ogimages/home.jpg"],
    },
    alternates: {
      canonical: `https://multiqos.com/`,
      languages: {
        en: "https://multiqos.com/en",
      },
      // media: {
      //   "only screen and (max-width: 600px)": "https://multiqos.com/mobile", // Alternate URL for specific media conditions
      // },
      // types: {
      //   application: "https://multiqos.com/amp", // Alternate URL for AMP or other content types
      // },
    },
    robots: {
      index:process.env.INDEX_FOLLOW=="true" ? true:false, // Whether the page should be indexed
        follow:process.env.INDEX_FOLLOW=="true" ? true:false, // Whether links on the page should be followed
      nocache: true, // Prevent the page from being cached
      noarchive: false, // Allow/disallow showing cached versions of the page
      noimageindex: false, // Allow/disallow indexing of images on the page
      notranslate: true, // Prevent Google from offering translation
      "max-snippet": -1, // Maximum characters for a text snippet (-1 means no limit)
      "max-image-preview": "large", // Allow "none", "standard", or "large" image previews
      "max-video-preview": -1, // Maximum seconds for a video snippet (-1 means no limit)
    },
    googlebot: {
      index: false, // Whether Google should index the page
      follow: false, // Whether Google should follow links
      nocache: true, // Prevent Google from caching the page
      noarchive: true, // Prevent showing cached versions in Google results
      noimageindex: false, // Allow/disallow indexing images on the page by Google
      notranslate: true, // Prevent Google from offering translation for the page
      "max-snippet": 150, // Maximum snippet length in characters for Google
      "max-image-preview": "standard", // Image preview size for Google
      "max-video-preview": 30, // Maximum video snippet duration in seconds for Google
    },
    // scripts: [
    //   {
    //     type: "application/ld+json",
    //     innerHTML: JSON.stringify(Organization),
    //   },
    //   {
    //     type: "application/ld+json",
    //     innerHTML: JSON.stringify(localBusinessData),
    //   },
    //   {
    //     type: "application/ld+json",
    //     innerHTML: JSON.stringify(websiteData),
    //   },
    //   {
    //     type: "application/ld+json",
    //     innerHTML: JSON.stringify(webpageData),
    //   },
    // ],
    // jsonLd: {
    //   '@context': 'https://schema.org',
    //   '@type': 'ImageObject',
    //   '@id': `https://multiqos.com#primaryimage`,
    //   inLanguage: 'en-US',
    //   url: `https://d19cx7uv5wsln6.cloudfront.net/assets/images/ogimages/home.jpg`,
    //   contentUrl: `https://d19cx7uv5wsln6.cloudfront.net/assets/images/ogimages/home.jpg`,
    //   width: 1200,
    //   height: 630,
    //   caption: "Software Development Company in USA and India - MultiQoS",
    // },
  };
}

export default function RootLayout({ children }) {

  return (
    <>
      <html lang="en" className="no-js" suppressHydrationWarning  >
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="revisit-after" content="7 days" />
          <meta name="language" content="english" />
          <meta name="content-language" content="en-us" />
          <meta name="rating" content="general" />
          <meta name="distribution" content="global" />
          <meta name="expires" content="30" />
          <meta itemProp="name" content="MultiQoS" />
          <meta itemProp="description" content='As a prominent software development company, MultiQoS provides customized software solutions that help businesses worldwide transform operations and drive growth.' />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'http://schema.org',
                '@type': 'Organization',
                name: 'MultiQoS',
                logo: 'https://blog.multiqos.com/multiqos/wp-content/uploads/2021/01https://media.multiqos.com/wp-content/uploads/2021/11/15162709/site-preview-1.jpg',
                url: 'https://multiqos.com',
                description:
                  'MultiQoS is a leading digital transformation company, specializing in mobile app development, web and blockchain development services catering to startups, medium-sized, and large enterprises.',
                founder: [
                  {
                    '@type': 'Person',

                    name: 'Prashant Pujara'
                  }
                ],
                address: {
                  '@type': 'PostalAddress',
                  streetAddress:
                    '150 E Beech Drive',
                  addressLocality: 'Schaumburg',
                  addressRegion: 'IL',
                  postalCode: '60193',
                  addressCountry: 'USA'
                },

                sameAs: [
                  'https://www.facebook.com/Multiqos/',
                  'https://www.twitter.com/multiqos/',
                  'https://www.instagram.com/multiqos/',
                  'https://www.linkedin.com/company/multiqos/',
                  'https://multiqos.com/contact-us/'
                ],

                contactPoint: [
                  {
                    '@type': 'ContactPoint',
                    telephone:
                      '+1 309-247-5073',
                    contactType:
                      'Customer Service',
                    email: 'biz@multiqos.com',
                    areaServed: ['US', 'CA']
                  },
                  {
                    '@type': 'ContactPoint',
                    email: 'biz@multiqos.com',
                    telephone:
                      '+49-151-660-29809',
                    contactType:
                      'customer service',
                    areaServed: 'DE'
                  },
                  {
                    '@type': 'ContactPoint',
                    email: 'biz@multiqos.com',
                    telephone:
                      '+91-886-668-7330',
                    contactType:
                      'customer service',
                    areaServed: 'IND'
                  }
                ]
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                priceRange: '$25-$49',
                image: 'https://blog.multiqos.com/multiqos/wp-content/uploads/2021/01/site-preview.jpg',
                '@id': 'https://multiqos.com',
                name: 'MultiQoS - Top Software Development Company',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress:
                    '701, Gala Empire, Drive-In-Rd, Memnagar,',
                  addressLocality: 'Ahmedabad',
                  addressRegion: 'IN',
                  postalCode: '380052',
                  addressCountry: 'IN'
                },
                review: {
                  '@type': 'Review',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '4.9',
                    bestRating: '5'
                  },
                  author: {
                    '@type': 'Person',
                    name: 'MultiQoS'
                  }
                },
                url: 'https://multiqos.com',
                telephone: '+91-886-668-7330'
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'http://schema.org',
                '@type': 'WebSite',
                '@id': 'https://multiqos.com/#website',
                url: `https://multiqos.com/`,
                name: 'MultiQoS',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: 'https://multiqos.com/?s={search_term_string}',
                  'query-input':
                    'required name=search_term_string'
                }
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'ImageObject',
                '@id': `https://multiqos.com#primaryimage`,
                inLanguage: 'en-US',
                url: `https://d19cx7uv5wsln6.cloudfront.net/assets/images/ogimages/home.jpg`,
                contentUrl: `https://d19cx7uv5wsln6.cloudfront.net/assets/images/ogimages/home.jpg`,
                width: 1200,
                height: 630,
                caption: "Software Development Company in USA and India - MultiQoS"
              })
            }}
          />
        </head>
        <body
            // ${geistSans.variable} ${geistMono.variable}
          className={`${publicSans.variable}
            antialiased`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
