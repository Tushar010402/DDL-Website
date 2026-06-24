import { Suspense } from 'react';
import ArticleClientComponent from '@/app/Components/Healthguide/ArticleDetail';
import axios from 'axios';

async function getArticleData(slug) {
    try {
        const response = await axios.get(`https://backend.dangsccg.co.in/api/get_article/${slug}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching article:', error);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const article = await getArticleData(params.slug);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.drdangslab.com';

    const title = article?.meta_title || (article ? `${article.article_heading} - Dr. Dangs Lab` : 'Article - Dr. Dangs Lab');
    const description = article?.meta_description || 'Read detailed health and diagnostic articles.';
    const ogTitle = article?.og_title || article?.meta_title || article?.article_heading || 'Article - Dr. Dangs Lab';
    const ogDescription = article?.og_description || description;
    const ogImage = article?.og_image
        ? `https://backend.dangsccg.co.in${article.og_image}`
        : (article?.article_thumbnail_image ? `https://backend.dangsccg.co.in${article.article_thumbnail_image}` : undefined);
    const canonicalUrl = article?.canonical_url || `${baseUrl}/articles/${params.slug}`;
    const keywords = article?.meta_keywords ? article.meta_keywords.split(',').map(k => k.trim()) : undefined;

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: article ? {
            title: ogTitle,
            description: ogDescription,
            type: 'article',
            publishedTime: article.release_date,
            authors: [article.author_name || 'Dr. Dangs Lab'],
            url: `${baseUrl}/articles/${params.slug}`,
            images: ogImage ? [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: article.thumbnail_alt_text || article.article_heading,
                }
            ] : [],
            siteName: "Dr. Dangs Lab",
        } : null,
        twitter: article ? {
            card: 'summary_large_image',
            title: ogTitle,
            description: ogDescription,
            images: ogImage ? [ogImage] : [],
        } : null,
    };
}

export default async function ArticlePage({ params }) {
    const article = await getArticleData(params.slug);

    if (!article) {
        return null;
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.drdangslab.com';
    const schemaType = article.schema_type || 'Article';
    const authorName = article.author_name || 'Dr. Dangs Lab';
    const canonicalUrl = article.canonical_url || `${baseUrl}/articles/${params.slug}`;
    const ogImage = article.og_image
        ? `https://backend.dangsccg.co.in${article.og_image}`
        : (article.article_thumbnail_image ? `https://backend.dangsccg.co.in${article.article_thumbnail_image}` : undefined);

    return (
        <>
            {/* This hidden div is for SEO only */}
            <div className="sr-only" aria-hidden="true">
                <article>
                    <h1>{article.article_heading}</h1>
                    <time dateTime={article.release_date}>
                        {new Date(article.release_date).toLocaleDateString()}
                    </time>
                    <div>{article.meta_description}</div>
                </article>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": schemaType,
                        "headline": article.article_heading,
                        "description": article.meta_description || undefined,
                        "datePublished": article.release_date,
                        "dateModified": article.release_date,
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": canonicalUrl
                        },
                        "url": canonicalUrl,
                        "image": ogImage ? {
                            "@type": "ImageObject",
                            "url": ogImage,
                            "width": 1200,
                            "height": 630
                        } : undefined,
                        "publisher": {
                            "@type": "Organization",
                            "name": "Dr. Dangs Lab",
                            "url": baseUrl,
                            "logo": {
                                "@type": "ImageObject",
                                "url": `${baseUrl}/DrdangsRedIcon.png`,
                                "width": 112,
                                "height": 112
                            }
                        },
                        "author": {
                            "@type": authorName === 'Dr. Dangs Lab' ? "Organization" : "Person",
                            "name": authorName
                        },
                        "keywords": article.meta_keywords || undefined
                    })
                }}
            />

            <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
                <ArticleClientComponent initialArticle={article} />
            </Suspense>
        </>
    );
}
