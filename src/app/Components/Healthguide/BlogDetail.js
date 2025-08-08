// src/app/Components/Healthguide/BlogDetail.js
'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import axios from 'axios';
import styles from './BlogDetail.module.css';
import Image from 'next/image';

const BlogDetail = ({ initialBlog = null }) => {
    console.log('🎨 BlogDetail: Component mounting with initialBlog:', {
        hasInitialBlog: Boolean(initialBlog),
        initialBlogData: initialBlog ? {
            heading: initialBlog.blog_heading,
            hasContent: Boolean(initialBlog.blogs_content)
        } : null
    });

    const params = useParams();
    const searchParams = useSearchParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [debugInfo, setDebugInfo] = useState({
        mountTime: new Date().toISOString(),
        renderCount: 0,
        lastUpdate: null,
        errors: []
    });

    // Initialize blog state with initialBlog if provided
    useEffect(() => {
        if (initialBlog) {
            try {
                const processedContent = processContent(initialBlog);
                setBlog({ ...initialBlog, blogs_content: processedContent });
                setIsLoading(false);
                setDebugInfo(prev => ({
                    ...prev,
                    lastUpdate: new Date().toISOString(),
                    renderCount: prev.renderCount + 1
                }));
            } catch (error) {
                console.error('❌ Error processing initial blog:', error);
                setError(error.message);
                setDebugInfo(prev => ({
                    ...prev,
                    errors: [...prev.errors, { 
                        time: new Date().toISOString(), 
                        error: error.message,
                        type: 'ProcessingError'
                    }]
                }));
            }
        }
    }, []);
    
    const getUrlName = () => {
        console.log('🔍 Getting URL name from:', { params, searchParams: searchParams.toString() });
        
        if (params?.slug) return params.slug;
        const query = searchParams.toString();
        if (!query) return null;
        return query.split('=')[1] || query;
    };

    const processContent = (blogData) => {
        console.log('🔄 Processing blog content');
        
        try {
            if (!blogData) {
                throw new Error('No blog data provided for processing');
            }

            const imageComponents = {
                Image1: blogData.blog_image1 ? 
                    `<div class="${styles.imageWrapper}">
                        <img 
                            src="https://backend.dangsccg.co.in${blogData.blog_image1}" 
                            alt="${blogData.thumbnail_alt_text || 'Blog image 1'}" 
                            class="${styles.blogDetailImage}"
                            loading="lazy"
                        />
                    </div>` : '',
                Image2: blogData.blog_image2 ? 
                    `<div class="${styles.imageWrapper}">
                        <img 
                            src="https://backend.dangsccg.co.in${blogData.blog_image2}" 
                            alt="${blogData.thumbnail_alt_text || 'Blog image 2'}" 
                            class="${styles.blogDetailImage}"
                            loading="lazy"
                        />
                    </div>` : '',
                Image3: blogData.blog_image3 ? 
                    `<div class="${styles.imageWrapper}">
                        <img 
                            src="https://backend.dangsccg.co.in${blogData.blog_image3}" 
                            alt="${blogData.thumbnail_alt_text || 'Blog image 3'}" 
                            class="${styles.blogDetailImage}"
                            loading="lazy"
                        />
                    </div>` : '',
                Image4: blogData.blog_image4 ? 
                    `<div class="${styles.imageWrapper}">
                        <img 
                            src="https://backend.dangsccg.co.in${blogData.blog_image4}" 
                            alt="${blogData.thumbnail_alt_text || 'Blog image 4'}" 
                            class="${styles.blogDetailImage}"
                            loading="lazy"
                        />
                    </div>` : '',
            };

            console.log('📸 Processing images:', {
                hasImage1: Boolean(blogData.blog_image1),
                hasImage2: Boolean(blogData.blog_image2),
                hasImage3: Boolean(blogData.blog_image3),
                hasImage4: Boolean(blogData.blog_image4)
            });

            let content = blogData.blogs_content
                .replace('{{{Image1}}}', imageComponents.Image1)
                .replace('{{{Image2}}}', imageComponents.Image2)
                .replace('{{{Image3}}}', imageComponents.Image3)
                .replace('{{{Image4}}}', imageComponents.Image4);

            content = content
                .replace(/<h4/g, `<h4 class="${styles.blogHeading4}"`)
                .replace(/<h5/g, `<h5 class="${styles.blogHeading5}"`)
                .replace(/<p/g, `<p class="${styles.blogParagraph}"`)
                .replace(/<ul/g, `<ul class="${styles.blogList}"`)
                .replace(/<li/g, `<li class="${styles.blogListItem}"`);

            console.log('✅ Content processing complete:', {
                contentLength: content.length,
                hasStyles: {
                    h4: content.includes(styles.blogHeading4),
                    h5: content.includes(styles.blogHeading5),
                    p: content.includes(styles.blogParagraph),
                    ul: content.includes(styles.blogList),
                    li: content.includes(styles.blogListItem)
                }
            });

            return content;
        } catch (error) {
            console.error('❌ Error processing content:', error);
            setDebugInfo(prev => ({
                ...prev,
                errors: [...prev.errors, { time: new Date().toISOString(), error: error.message }]
            }));
            throw error;
        }
    };

    // Fetch blog data only if initialBlog is not provided
    useEffect(() => {
        const fetchBlogDetail = async () => {
            if (!initialBlog) {
                try {
                    const url_name = getUrlName();
                    
                    if (!url_name) {
                        throw new Error('Blog URL not found');
                    }

                    console.log('📡 Fetching blog detail for:', url_name);

                    const encodedUrlName = encodeURIComponent(url_name);
                    const response = await axios.get(`https://backend.dangsccg.co.in/api/get_blog/${encodedUrlName}/`);
                    
                    if (!response.data) {
                        throw new Error('No data received from API');
                    }

                    const processedContent = processContent(response.data);
                    setBlog({ ...response.data, blogs_content: processedContent });
                    setDebugInfo(prev => ({
                        ...prev,
                        lastUpdate: new Date().toISOString(),
                        renderCount: prev.renderCount + 1
                    }));
                } catch (error) {
                    console.error('❌ Error in fetchBlogDetail:', error);
                    setError(error.message);
                    setDebugInfo(prev => ({
                        ...prev,
                        errors: [...prev.errors, { 
                            time: new Date().toISOString(), 
                            error: error.message,
                            type: 'FetchError'
                        }]
                    }));
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchBlogDetail();
    }, [params?.slug, searchParams]);

    // Development-only debug panel
    const DebugPanel = () => {
        if (process.env.NODE_ENV !== 'development') return null;

        return (
            <div style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                background: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '15px',
                borderRadius: '8px',
                maxWidth: '400px',
                maxHeight: '400px',
                overflow: 'auto',
                zIndex: 9999,
                fontSize: '12px'
            }}>
                <h3 style={{ margin: '0 0 10px', color: '#00ff00' }}>Debug Info</h3>
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                    {JSON.stringify({
                        componentState: {
                            hasBlog: Boolean(blog),
                            hasError: Boolean(error),
                            isLoading,
                            currentSlug: params?.slug,
                            searchParams: searchParams.toString()
                        },
                        blogData: blog ? {
                            heading: blog.blog_heading,
                            hasContent: Boolean(blog.blogs_content),
                            contentLength: blog.blogs_content?.length,
                            hasImages: {
                                image1: Boolean(blog.blog_image1),
                                image2: Boolean(blog.blog_image2),
                                image3: Boolean(blog.blog_image3),
                                image4: Boolean(blog.blog_image4)
                            }
                        } : null,
                        debugInfo,
                        styles: {
                            availableClasses: Object.keys(styles),
                            blogDetailContainer: Boolean(styles.blogDetailContainer),
                            blogContent: Boolean(styles.blogContent)
                        }
                    }, null, 2)}
                </pre>
            </div>
        );
    };

    if (error) {
        console.error('❌ Rendering error state:', error);
        return (
            <div className={`${styles.errorContainer} p-4 bg-red-50 rounded-lg`}>
                <div className="flex items-center justify-center flex-col">
                    <p className={`${styles.errorMessage} text-red-600 text-lg font-semibold`}>
                        Error: {error}
                    </p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                        Retry
                    </button>
                </div>
                <DebugPanel />
            </div>
        );
    }

    if (isLoading) {
        console.log('⌛ Rendering loading state');
        return (
            <div className={`${styles.loadingContainer} p-4`}>
                <div className={`${styles.loadingSpinner} w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto`}></div>
                <p className={`${styles.loadingMessage} text-center mt-4 text-gray-600`}>
                    Loading blog content...
                </p>
                <DebugPanel />
            </div>
        );
    }

    if (!blog) {
        console.warn('⚠️ Rendering empty state: No blog data available');
        return (
            <div className={`${styles.errorContainer} p-4 bg-yellow-50 rounded-lg`}>
                <p className={`${styles.errorMessage} text-yellow-800 text-center`}>
                    Blog not found
                </p>
                <DebugPanel />
            </div>
        );
    }

    console.log('✨ Rendering blog content:', {
        heading: blog.blog_heading,
        hasContent: Boolean(blog.blogs_content),
        contentLength: blog.blogs_content?.length,
        date: blog.release_date
    });

    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <article 
                className={styles.blogDetailContainer}
                itemScope
                itemType="http://schema.org/Article"
            >
                <header className="mb-8">
                    <h1 
                        className={`${styles.blogTitle} text-3xl font-bold mb-2`}
                        itemProp="headline"
                    >
                        {blog.blog_heading}
                    </h1>
                    <div className="flex items-center gap-4 text-gray-600 mb-4">
                        <time 
                            dateTime={blog.release_date} 
                            className={styles.blogDate}
                            itemProp="datePublished"
                        >
                            {new Date(blog.release_date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                        {blog.author && (
                            <span itemProp="author" itemScope itemType="http://schema.org/Person">
                                <span itemProp="name">{blog.author}</span>
                            </span>
                        )}
                    </div>
                    {blog.meta_description && (
                        <meta itemProp="description" content={blog.meta_description} />
                    )}
                    {blog.blog_thumbnail_image && (
                        <meta 
                            itemProp="image" 
                            content={`https://backend.dangsccg.co.in${blog.blog_thumbnail_image}`} 
                        />
                    )}
                    <meta itemProp="publisher" content="Dr. Dangs Lab" />
                </header>
                
                <div 
                    className={`${styles.blogContent} prose max-w-none`}
                    itemProp="articleBody"
                    dangerouslySetInnerHTML={{ __html: blog.blogs_content }}
                />
                
                {/* Development-only error boundary */}
                {process.env.NODE_ENV === 'development' && (
                    <div 
                        id="error-boundary" 
                        style={{ display: 'none' }}
                        role="alert"
                    >
                        {/* Error boundary container */}
                    </div>
                )}
            </article>
            <DebugPanel />
        </main>
    );
};

export default BlogDetail;
