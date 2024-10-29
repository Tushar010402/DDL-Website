import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './BlogDetail.css';

const BlogDetail = () => {
    const { url_name } = useParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogDetail = async () => {
            try {
                // Encode the URL name
                const encodedUrlName = encodeURIComponent(url_name);
                const response = await axios.get(`https://backend.dangsccg.co.in/api/get_blog/${encodedUrlName}/`);
                if (response.status === 200) {
                    const blogData = response.data;
                    // Replace placeholders with actual image HTML
                    let content = blogData.blogs_content
                        .replace('{{{Image1}}}', blogData.blog_image1 ? `<img src="https://backend.dangsccg.co.in${blogData.blog_image1}" alt="${blogData.thumbnail_alt_text}" class="blog-detail-image" />` : '')
                        .replace('{{{Image2}}}', blogData.blog_image2 ? `<img src="https://backend.dangsccg.co.in${blogData.blog_image2}" alt="${blogData.thumbnail_alt_text}" class="blog-detail-image" />` : '')
                        .replace('{{{Image3}}}', blogData.blog_image3 ? `<img src="https://backend.dangsccg.co.in${blogData.blog_image3}" alt="${blogData.thumbnail_alt_text}" class="blog-detail-image" />` : '')
                        .replace('{{{Image4}}}', blogData.blog_image4 ? `<img src="https://backend.dangsccg.co.in${blogData.blog_image4}" alt="${blogData.thumbnail_alt_text}" class="blog-detail-image" />` : '');
                    
                    setBlog({ ...blogData, blogs_content: content });
                } else {
                    setError('Failed to fetch blog detail.');
                }
            } catch (error) {
                setError('Error fetching blog detail.');
            }
        };

        fetchBlogDetail();
    }, [url_name]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div className="blog-detail-container">
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.blogs_content }}></div>
        </div>
    );
};

export default BlogDetail;
