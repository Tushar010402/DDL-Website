// app/healthguide/page.js
import Healthguide from '@/app/Components/Healthguide/Healthguide';
import axios from 'axios';
import Head from 'next/head';

async function getInitialData() {
    try {
        const [blogsResponse, articlesResponse] = await Promise.all([
            axios.get('https://backend.dangsccg.co.in/api/get_blogs/'),
            axios.get('https://backend.dangsccg.co.in/api/get_articles/')
        ]);

        return {
            blogs: blogsResponse.data.sort((a, b) => a.sequence - b.sequence),
            articles: articlesResponse.data.sort((a, b) => a.sequence - b.sequence)
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { blogs: [], articles: [] };
    }
}

export default async function HealthguidePage() {
    const { blogs, articles } = await getInitialData();

    return (
        <>
            <Head>
                <title>Health Guide - Read Latest Health Blogs/ Articles</title>
                <meta name="description" content="Discover the latest health blogs and articles on Dr. Dangs Lab Health Guide. Stay informed on health trends, tips, and insights." />
            </Head>

            {/* SEO Content */}
            <div className="seo-content">
                <h1>Health Guide - Dr. Dangs Lab</h1>
                <section>
                    <h2>Latest Blogs</h2>
                    {blogs.map(blog => (
                        <article key={blog.id}>
                            <h3>{blog.blog_heading}</h3>
                            <p>{blog.meta_description}</p>
                            <time dateTime={blog.release_date}>
                                {new Date(blog.release_date).toLocaleDateString()}
                            </time>
                        </article>
                    ))}
                </section>
                <section>
                    <h2>Latest Articles</h2>
                    {articles.map(article => (
                        <article key={article.id}>
                            <h3>{article.article_heading}</h3>
                            <p>{article.meta_description}</p>
                            <time dateTime={article.release_date}>
                                {new Date(article.release_date).toLocaleDateString()}
                            </time>
                        </article>
                    ))}
                </section>

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "itemListElement": [
                                ...blogs.map((blog, index) => ({
                                    "@type": "ListItem",
                                    "position": index + 1,
                                    "item": {
                                        "@type": "BlogPosting",
                                        "headline": blog.blog_heading,
                                        "datePublished": blog.release_date,
                                        "image": `https://backend.dangsccg.co.in${blog.blog_thumbnail_image}`
                                    }
                                })),
                                ...articles.map((article, index) => ({
                                    "@type": "ListItem",
                                    "position": blogs.length + index + 1,
                                    "item": {
                                        "@type": "Article",
                                        "headline": article.article_heading,
                                        "datePublished": article.release_date,
                                        "image": `https://backend.dangsccg.co.in${article.article_thumbnail_image}`
                                    }
                                }))
                            ]
                        })
                    }}
                />
            </div>

            {/* Client Component */}
            <Healthguide initialBlogs={blogs} initialArticles={articles} />
        </>
    );
}
