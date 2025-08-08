// src/app/blogs/[slug]/page.js
import BlogClientComponent from '@/app/Components/Healthguide/BlogDetail';
import axios from 'axios';

async function getBlogData(slug) {
    console.log('🔍 Attempting to fetch blog data for slug:', slug);
    
    try {
        const apiUrl = `https://backend.dangsccg.co.in/api/get_blog/${slug}/`;
        console.log('📡 Making API request to:', apiUrl);
        
        const response = await axios.get(apiUrl, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        
        console.log('✅ API Response Status:', response.status);
        console.log('📦 API Response Headers:', response.headers);
        
        if (!response.data) {
            throw new Error('No data received from API');
        }
        
        console.log('📝 Blog data structure:', {
            hasHeading: Boolean(response.data.blog_heading),
            hasContent: Boolean(response.data.blogs_content),
            hasImages: {
                image1: Boolean(response.data.blog_image1),
                image2: Boolean(response.data.blog_image2),
                image3: Boolean(response.data.blog_image3),
                image4: Boolean(response.data.blog_image4)
            }
        });
        
        return response.data;
    } catch (error) {
        console.error('❌ Error fetching blog:', {
            message: error.message,
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data,
            config: {
                url: error.config?.url,
                method: error.config?.method,
                headers: error.config?.headers
            }
        });
        return null;
    }
}

export async function generateMetadata({ params }) {
    console.log('🎯 Generating metadata for slug:', params.slug);
    
    const blog = await getBlogData(params.slug);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.drdangslab.com';
    
    console.log('🏷️ Generated metadata:', {
        hasTitle: Boolean(blog?.blog_heading),
        hasDescription: Boolean(blog?.meta_description),
        hasImage: Boolean(blog?.blog_thumbnail_image)
    });
    
    return {
        title: blog ? `${blog.blog_heading} - Dr. Dangs Lab` : 'Blog - Dr. Dangs Lab',
        description: blog?.meta_description || 'Read detailed blog posts about health and diagnostic insights.',
        alternates: {
            canonical: `${baseUrl}/blogs/${params.slug}`,
        },
        openGraph: blog ? {
            title: blog.blog_heading,
            description: blog.meta_description || 'Read detailed blog posts about health and diagnostic insights.',
            type: 'article',
            url: `${baseUrl}/blogs/${params.slug}`,
            publishedTime: blog.release_date,
            images: [
                {
                    url: `https://backend.dangsccg.co.in${blog.blog_thumbnail_image}`,
                    width: 800,
                    height: 600,
                    alt: blog.thumbnail_alt_text,
                }
            ],
            siteName: "Dr. Dangs Lab",
        } : null,
        twitter: blog ? {
            card: 'summary_large_image',
            title: blog.blog_heading,
            description: blog.meta_description,
            images: [`https://backend.dangsccg.co.in${blog.blog_thumbnail_image}`],
        } : null,
    };
}

export default async function BlogPage({ params }) {
    console.log('🚀 BlogPage: Starting render with params:', params);
    
    const blog = await getBlogData(params.slug);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.drdangslab.com';

    if (!blog) {
        console.log('⚠️ BlogPage: No blog data returned, rendering null');
        return null;
    }

    console.log('✨ BlogPage: Rendering with blog data:', {
        heading: blog.blog_heading,
        hasContent: Boolean(blog.blogs_content),
        contentLength: blog.blogs_content?.length,
        hasImages: {
            thumbnail: Boolean(blog.blog_thumbnail_image),
            image1: Boolean(blog.blog_image1),
            image2: Boolean(blog.blog_image2),
            image3: Boolean(blog.blog_image3),
            image4: Boolean(blog.blog_image4)
        }
    });

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
                        "@type": "BlogPosting",
                        "headline": blog.blog_heading,
                        "datePublished": blog.release_date,
                        "dateModified": blog.release_date,
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `${baseUrl}/blogs/${params.slug}`
                        },
                        "url": `${baseUrl}/blogs/${params.slug}`,
                        "image": {
                            "@type": "ImageObject",
                            "url": blog.blog_thumbnail_image ? 
                                `https://backend.dangsccg.co.in${blog.blog_thumbnail_image}` : 
                                undefined,
                            "width": 800,
                            "height": 600
                        },
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
                            "@type": "Organization",
                            "name": "Dr. Dangs Lab"
                        },
                        "description": blog.meta_description
                    })
                }}
            />

            {/* Client Component */}
            <BlogClientComponent initialBlog={blog} />
        </>
    );
}