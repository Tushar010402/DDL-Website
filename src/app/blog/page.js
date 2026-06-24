import Healthguide from '@/app/Components/Healthguide/Healthguide';
import axios from 'axios';

async function getInitialData() {
    try {
        const [blogsResponse, articlesResponse] = await Promise.all([
            axios.get('https://backend.dangsccg.co.in/api/get_blogs/'),
            axios.get('https://backend.dangsccg.co.in/api/get_articles/'),
        ]);
        return {
            blogs: blogsResponse.data.sort((a, b) => a.sequence - b.sequence),
            articles: articlesResponse.data.sort((a, b) => a.sequence - b.sequence),
        };
    } catch {
        return { blogs: [], articles: [] };
    }
}

export const metadata = {
    title: 'Blog | Dr. Dangs Lab',
    description: 'Expert health insights, diagnostic guides and wellness tips from Dr. Dangs Lab specialists.',
};

export default async function BlogPage() {
    const { blogs, articles } = await getInitialData();

    return (
        <>
            <div className="sr-only">
                <h1>Blog — Dr. Dangs Lab</h1>
                {blogs.map(blog => (
                    <article key={blog.id}>
                        <h2>{blog.blog_heading}</h2>
                        <p>{blog.meta_description}</p>
                    </article>
                ))}
                {articles.map(article => (
                    <article key={article.id}>
                        <h2>{article.article_heading}</h2>
                        <p>{article.meta_description}</p>
                    </article>
                ))}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'ItemList',
                            itemListElement: [
                                ...blogs.map((blog, i) => ({
                                    '@type': 'ListItem',
                                    position: i + 1,
                                    item: {
                                        '@type': 'BlogPosting',
                                        headline: blog.blog_heading,
                                        datePublished: blog.release_date,
                                        image: `https://backend.dangsccg.co.in${blog.blog_thumbnail_image}`,
                                    },
                                })),
                                ...articles.map((article, i) => ({
                                    '@type': 'ListItem',
                                    position: blogs.length + i + 1,
                                    item: {
                                        '@type': 'Article',
                                        headline: article.article_heading,
                                        datePublished: article.release_date,
                                        image: `https://backend.dangsccg.co.in${article.article_thumbnail_image}`,
                                    },
                                })),
                            ],
                        }),
                    }}
                />
            </div>
            <Healthguide initialBlogs={blogs} initialArticles={articles} />
        </>
    );
}
