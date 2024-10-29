import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './ArticleDetail.css';

const ArticleDetail = () => {
    const { url_name } = useParams();
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticleDetail = async () => {
            try {
                // Encode the URL name
                const encodedUrlName = encodeURIComponent(url_name);
                const response = await axios.get(`https://backend.dangsccg.co.in/api/get_article/${encodedUrlName}/`);
                if (response.status === 200) {
                    const articleData = response.data;
                    // Replace placeholders with actual image HTML
                    let content = articleData.articles_content
                        .replace('{{{Image1}}}', articleData.article_image1 ? `<img src="https://backend.dangsccg.co.in${articleData.article_image1}" alt="${articleData.thumbnail_alt_text}" class="article-detail-image" />` : '')
                        .replace('{{{Image2}}}', articleData.article_image2 ? `<img src="https://backend.dangsccg.co.in${articleData.article_image2}" alt="${articleData.thumbnail_alt_text}" class="article-detail-image" />` : '')
                        .replace('{{{Image3}}}', articleData.article_image3 ? `<img src="https://backend.dangsccg.co.in${articleData.article_image3}" alt="${articleData.thumbnail_alt_text}" class="article-detail-image" />` : '')
                        .replace('{{{Image4}}}', articleData.article_image4 ? `<img src="https://backend.dangsccg.co.in${articleData.article_image4}" alt="${articleData.thumbnail_alt_text}" class="article-detail-image" />` : '');
                    
                    setArticle({ ...articleData, articles_content: content });
                } else {
                    setError('Failed to fetch article detail.');
                }
            } catch (error) {
                setError('Error fetching article detail.');
            }
        };

        fetchArticleDetail();
    }, [url_name]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <div className="article-detail-container">
            <div className="article-content" dangerouslySetInnerHTML={{ __html: article.articles_content }}></div>
        </div>
    );
};

export default ArticleDetail;
