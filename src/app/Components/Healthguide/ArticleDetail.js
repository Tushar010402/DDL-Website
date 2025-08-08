// src/app/Components/Healthguide/ArticleDetail.js
'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import axios from 'axios';
import styles from './ArticleDetail.module.css';

const ArticleDetail = ({ initialArticle = null }) => {
    const params = useParams();
    const searchParams = useSearchParams();
    const [article, setArticle] = useState(initialArticle);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(!initialArticle);

    const getUrlName = () => {
        if (params?.slug) return params.slug;
        const query = searchParams.toString();
        if (!query) return null;
        return query.split('=')[1] || query;
    };

    const processContent = (articleData) => {
        const imageComponents = {
            Image1: articleData.article_image1 ? 
                `<div class="${styles.imageWrapper}">
                    <img 
                        src="https://backend.dangsccg.co.in${articleData.article_image1}" 
                        alt="${articleData.thumbnail_alt_text || 'Article image 1'}" 
                        class="${styles.articleDetailImage}"
                        loading="lazy"
                    />
                </div>` : '',
            Image2: articleData.article_image2 ? 
                `<div class="${styles.imageWrapper}">
                    <img 
                        src="https://backend.dangsccg.co.in${articleData.article_image2}" 
                        alt="${articleData.thumbnail_alt_text || 'Article image 2'}" 
                        class="${styles.articleDetailImage}"
                        loading="lazy"
                    />
                </div>` : '',
            Image3: articleData.article_image3 ? 
                `<div class="${styles.imageWrapper}">
                    <img 
                        src="https://backend.dangsccg.co.in${articleData.article_image3}" 
                        alt="${articleData.thumbnail_alt_text || 'Article image 3'}" 
                        class="${styles.articleDetailImage}"
                        loading="lazy"
                    />
                </div>` : '',
            Image4: articleData.article_image4 ? 
                `<div class="${styles.imageWrapper}">
                    <img 
                        src="https://backend.dangsccg.co.in${articleData.article_image4}" 
                        alt="${articleData.thumbnail_alt_text || 'Article image 4'}" 
                        class="${styles.articleDetailImage}"
                        loading="lazy"
                    />
                </div>` : '',
        };

        let content = articleData.articles_content
            .replace('{{{Image1}}}', imageComponents.Image1)
            .replace('{{{Image2}}}', imageComponents.Image2)
            .replace('{{{Image3}}}', imageComponents.Image3)
            .replace('{{{Image4}}}', imageComponents.Image4);

        content = content
            .replace(/<h4/g, `<h4 class="${styles.articleHeading4}"`)
            .replace(/<h5/g, `<h5 class="${styles.articleHeading5}"`)
            .replace(/<p/g, `<p class="${styles.articleParagraph}"`)
            .replace(/<ul/g, `<ul class="${styles.articleList}"`)
            .replace(/<li/g, `<li class="${styles.articleListItem}"`);

        return content;
    };

    useEffect(() => {
        const fetchArticleDetail = async () => {
            try {
                setIsLoading(true);
                const url_name = getUrlName();
                if (!url_name) {
                    setError('Article URL not found');
                    return;
                }

                const encodedUrlName = encodeURIComponent(url_name);
                const response = await axios.get(`https://backend.dangsccg.co.in/api/get_article/${encodedUrlName}/`);

                if (response.status === 200) {
                    const articleData = response.data;
                    const processedContent = processContent(articleData);
                    setArticle({ ...articleData, articles_content: processedContent });
                } else {
                    setError('Failed to fetch article detail.');
                }
            } catch (error) {
                setError('Error fetching article detail.');
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (!initialArticle) {
            fetchArticleDetail();
        } else {
            const processedContent = processContent(initialArticle);
            setArticle({ ...initialArticle, articles_content: processedContent });
        }
    }, [params?.slug, searchParams, initialArticle]);

    if (error) {
        return (
            <div className={styles.errorContainer}>
                <p className={styles.errorMessage}>Error: {error}</p>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loadingSpinner}></div>
                <p className={styles.loadingMessage}>Loading...</p>
            </div>
        );
    }

    if (!article) {
        return (
            <div className={styles.errorContainer}>
                <p className={styles.errorMessage}>Article not found</p>
            </div>
        );
    }

    return (
        <main>
            <article className={styles.articleDetailContainer}>
                <header>
                    <h1 className={styles.articleTitle}>{article.article_heading}</h1>
                    <time dateTime={article.release_date} className={styles.articleDate}>
                        {new Date(article.release_date).toLocaleDateString()}
                    </time>
                </header>
                <div 
                    className={styles.articleContent}
                    dangerouslySetInnerHTML={{ __html: article.articles_content }}
                />
            </article>
        </main>
    );
};

export default ArticleDetail;