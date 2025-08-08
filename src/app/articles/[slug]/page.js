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
    
    return {
        title: article ? `${article.article_heading} - Dr. Dangs Lab` : 'Article - Dr. Dangs Lab',
        description: article?.meta_description || 'Read detailed health and diagnostic articles.',
        alternates: {
            canonical: `${baseUrl}/articles/${params.slug}`,
        },
        openGraph: article ? {
            title: article.article_heading,
            description: article.meta_description || 'Read detailed articles about health and diagnostic insights.',
            type: 'article',
            publishedTime: article.release_date,
            url: `${baseUrl}/articles/${params.slug}`, // Add OpenGraph URL
            images: [
                {
                    url: `https://backend.dangsccg.co.in${article.article_thumbnail_image}`,
                    width: 800,
                    height: 600,
                    alt: article.thumbnail_alt_text,
                }
            ],
        } : null,
    };
}

export default async function ArticlePage({ params }) {
    const article = await getArticleData(params.slug);

    if (!article) {
        return null;
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.drdangslab.com';

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
                        "@type": "Article",
                        "headline": article.article_heading,
                        "datePublished": article.release_date,
                        "url": `${baseUrl}/articles/${params.slug}`, // Add URL to schema
                        "image": article.article_thumbnail_image ? 
                            `https://backend.dangsccg.co.in${article.article_thumbnail_image}` : 
                            undefined,
                        "publisher": {
                            "@type": "Organization",
                            "name": "Dr. Dangs Lab",
                            "url": baseUrl
                        }
                    })
                }}
            />

            <ArticleClientComponent initialArticle={article} />
        </>
    );
}