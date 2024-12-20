
import React from 'react'
import {aboutusPageContent} from '@/locale/aboutusPageContent'


export async function generateMetadata() {

    const ImageObject= {
            '@context': 'https://schema.org',
            '@type': 'ImageObject',
            '@id': `https://multiqos.com${aboutusPageContent?.seoTags?.url}#primaryimage`,
            inLanguage: 'en-US',
            url: `${aboutusPageContent?.seoTags?.image}`,
            contentUrl: `${aboutusPageContent?.seoTags?.image}`,
            width: 1200,
            height: 630,
            caption: `${aboutusPageContent?.seoTags?.title}`
    }

    return {
      title:`${aboutusPageContent?.seoTags?.title}`,
      description:`${aboutusPageContent?.seoTags?.description}`,
      url:`https://multiqos.com${aboutusPageContent?.seoTags?.url}`,
      
      openGraph: {
        type: "website",
        url: `https://multiqos.com${aboutusPageContent?.seoTags?.url}`,
        title:`${aboutusPageContent?.seoTags?.title}`,
        description:`${aboutusPageContent?.seoTags?.description}`,
        images: [
          {
            url: `${aboutusPageContent?.seoTags?.image}`,
            width: 1200,
            height: 630,
            alt: "MultiQoS Technology",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
         title:`${aboutusPageContent?.seoTags?.title}`,
         description:`${aboutusPageContent?.seoTags?.description}`,
         images: [`${aboutusPageContent?.seoTags?.image}`],
      },
      alternates: {
        canonical: `https://multiqos.com${aboutusPageContent?.seoTags?.url}`,
        languages: {
          en: "https://multiqos.com/en",
        },
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
      scripts:[
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify(ImageObject),
        },
      ]
    }
}
const Aboutus = async () => {


  return (
    <>
      <h4>About us Page</h4>
    </>
  )
}

export default Aboutus