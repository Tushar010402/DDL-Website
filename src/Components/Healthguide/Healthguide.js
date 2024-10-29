import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import styles from './Healthguide.module.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Healthguide = () => {
    const [blogs, setBlogs] = useState([]);
    const [articles, setArticles] = useState([]); // State for articles

    useEffect(() => {
        fetchBlogs();
        fetchArticles(); // Fetch articles as well
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('https://backend.dangsccg.co.in/api/get_blogs/');
            if (response.status === 200) {
                const sortedBlogs = response.data.sort((a, b) => a.sequence - b.sequence);
                setBlogs(sortedBlogs);
            } else {
                console.error('Failed to fetch blogs.');
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    const fetchArticles = async () => {
        try {
            const response = await axios.get('https://backend.dangsccg.co.in/api/get_articles/');
            if (response.status === 200) {
                const sortedArticles = response.data.sort((a, b) => a.sequence - b.sequence);
                setArticles(sortedArticles);
            } else {
                console.error('Failed to fetch articles.');
            }
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    return (
        <div className={styles['hg-container']}>
            <h2 className={styles['hg-title']}>Our Latest Blogs</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {blogs.map((blog) => (
                    <SwiperSlide key={blog.id}>
                        <div className={styles['hg-card']}>
                            <div className={styles['hg-image-wrapper']}>
                                <img
                                    src={`https://backend.dangsccg.co.in${blog.blog_thumbnail_image}`}
                                    alt={blog.thumbnail_alt_text}
                                    className={styles['hg-image']}
                                />
                                <div className={styles['hg-date-overlay']}>
                                    {new Date(blog.release_date).toLocaleDateString('en-US', {
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </div>
                            </div>
                            <h3 className={styles['hg-blog-title']}>{blog.blog_heading}</h3>
                            <Link to={`/blogs/${blog.url_name}`} className={styles['hg-read-more-button']}>
                                Read more
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <hr className={styles['hg-divider']} /> {/* Horizontal line */}

            <h2 className={styles['hg-title']}>Our Latest Articles</h2> {/* Title for Articles */}
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {articles.map((article) => (
                    <SwiperSlide key={article.id}>
                        <div className={styles['hg-card']}>
                            <div className={styles['hg-image-wrapper']}>
                                <img
                                    src={`https://backend.dangsccg.co.in${article.article_thumbnail_image}`}
                                    alt={article.thumbnail_alt_text}
                                    className={styles['hg-image']}
                                />
                                <div className={styles['hg-date-overlay']}>
                                    {new Date(article.release_date).toLocaleDateString('en-US', {
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </div>
                            </div>
                            <h3 className={styles['hg-blog-title']}>{article.article_heading}</h3>
                            <Link to={`/articles/${article.url_name}`} className={styles['hg-read-more-button']}>
                                Read more
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Healthguide;
