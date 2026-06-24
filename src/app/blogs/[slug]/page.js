// src/app/blogs/[slug]/page.js
import { Suspense } from 'react';
import BlogClientComponent from '@/app/Components/Healthguide/BlogDetail';
import axios from 'axios';

async function getBlogData(slug) {
    try {
        const apiUrl = `https://backend.dangsccg.co.in/api/get_blog/${slug}/`;
        const response = await axios.get(apiUrl, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (!response.data) {
            throw new Error('No data received from API');
        }

        return response.data;
    } catch (error) {
        console.error('Error fetching blog:', error.message);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const blog = await getBlogData(params.slug);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.drdangslab.com';

    const title = blog?.meta_title || (blog ? `${blog.blog_heading} - Dr. Dangs Lab` : 'Blog - Dr. Dangs Lab');
    const description = blog?.meta_description || 'Read detailed blog posts about health and diagnostic insights.';
    const ogTitle = blog?.og_title || blog?.meta_title || blog?.blog_heading || 'Blog - Dr. Dangs Lab';
    const ogDescription = blog?.og_description || description;
    const ogImage = blog?.og_image
        ? `https://backend.dangsccg.co.in${blog.og_image}`
        : (blog?.blog_thumbnail_image ? `https://backend.dangsccg.co.in${blog.blog_thumbnail_image}` : undefined);
    const canonicalUrl = blog?.canonical_url || `${baseUrl}/blogs/${params.slug}`;
    const keywords = blog?.meta_keywords ? blog.meta_keywords.split(',').map(k => k.trim()) : undefined;

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: blog ? {
            title: ogTitle,
            description: ogDescription,
            type: 'article',
            url: `${baseUrl}/blogs/${params.slug}`,
            publishedTime: blog.release_date,
            authors: [blog.author_name || 'Dr. Dangs Lab'],
            images: ogImage ? [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: blog.thumbnail_alt_text || blog.blog_heading,
                }
            ] : [],
            siteName: "Dr. Dangs Lab",
        } : null,
        twitter: blog ? {
            card: 'summary_large_image',
            title: ogTitle,
            description: ogDescription,
            images: ogImage ? [ogImage] : [],
        } : null,
    };
}

export default async function BlogPage({ params }) {
    const blog = await getBlogData(params.slug);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.drdangslab.com';

    if (!blog) {
        return null;
    }

    const schemaType = blog.schema_type || 'BlogPosting';
    const authorName = blog.author_name || 'Dr. Dangs Lab';
    const canonicalUrl = blog.canonical_url || `${baseUrl}/blogs/${params.slug}`;
    const ogImage = blog.og_image
        ? `https://backend.dangsccg.co.in${blog.og_image}`
        : (blog.blog_thumbnail_image ? `https://backend.dangsccg.co.in${blog.blog_thumbnail_image}` : undefined);

    return (
        <>
            {/* SEO Content */}
            <div className="sr-only" aria-hidden="true">
                <article>
                    <h1>{blog.blog_heading}</h1>
                    <time dateTime={blog.release_date}>
                        {new Date(blog.release_date).toLocaleDateString()}
                    </time>
                    <div>{blog.meta_description}</div>
                </article>
            </div>

            {/* Schema.org Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": schemaType,
                        "headline": blog.blog_heading,
                        "description": blog.meta_description || undefined,
                        "datePublished": blog.release_date,
                        "dateModified": blog.release_date,
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
                        "keywords": blog.meta_keywords || undefined
                    })
                }}
            />

            {/* Client Component */}
            <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
                <BlogClientComponent initialBlog={blog} />
            </Suspense>
        </>
    );
}
