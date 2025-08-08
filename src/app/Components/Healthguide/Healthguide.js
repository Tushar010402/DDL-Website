'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import required Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Healthguide = ({ initialBlogs = [], initialArticles = [] }) => {
        const [blogs, setBlogs] = useState(initialBlogs);
        const [articles, setArticles] = useState(initialArticles);


  
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                await Promise.all([fetchBlogs(), fetchArticles()]);
            } catch (err) {
                setError('Failed to load content');
                console.error('Error loading content:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('https://backend.dangsccg.co.in/api/get_blogs/');
            if (response.status === 200) {
                const sortedBlogs = response.data.sort((a, b) => a.sequence - b.sequence);
                setBlogs(sortedBlogs);
            } else {
                throw new Error('Failed to fetch blogs');
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
            throw error;
        }
    };

    const fetchArticles = async () => {
        try {
            const response = await axios.get('https://backend.dangsccg.co.in/api/get_articles/');
            if (response.status === 200) {
                const sortedArticles = response.data.sort((a, b) => a.sequence - b.sequence);
                setArticles(sortedArticles);
            } else {
                throw new Error('Failed to fetch articles');
            }
        } catch (error) {
            console.error('Error fetching articles:', error);
            throw error;
        }
    };

    const swiperSettings = {
        modules: [Navigation, Pagination, Autoplay],
        spaceBetween: 20,
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: true,
        pagination: { clickable: true },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            },
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-[400px] text-red-500">
                {error}
            </div>
        );
    }

    const SectionTitle = ({ title }) => (
        <h2 className="text-4xl mb-20 text-gray-800 font-bold relative after:content-[''] after:block after:w-[60px] after:h-[3px] after:bg-red-500 after:mx-auto after:mt-2.5">
            {title}
        </h2>
    );

    const CardComponent = ({ item, type }) => {
        const imageUrl = `https://backend.dangsccg.co.in${item[`${type}_thumbnail_image`]}`;
        
        return (
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden relative text-center transition-transform duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden h-[200px] flex justify-center items-center">
                    {item[`${type}_thumbnail_image`] ? (
                        <Image
                            src={imageUrl}
                            alt={item.thumbnail_alt_text || `${type} thumbnail`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                            className="object-contain"
                            priority
                            unoptimized // Add this if you're having optimization issues
                            onError={(e) => {
                                console.error(`Error loading image: ${imageUrl}`);
                                e.target.src = '/placeholder-image.jpg'; // Add a placeholder image
                            }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100">
                            <span className="text-gray-400">No image available</span>
                        </div>
                    )}
                    <div className="unset top-2.5 left-2.5 bg-black/60 text-white px-2.5 py-1.5 text-xs rounded uppercase">
                        {new Date(item.release_date).toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric',
                        })}
                    </div>
                </div>
                <h3 className="text-lg mx-2.5 my-4 text-gray-800 font-bold text-center line-clamp-2">
                    {item[`${type}_heading`]}
                </h3>
                <Link 
                    href={`/${type}s/${item.url_name}`}
                    className="inline-block px-5 py-2.5 mb-4 bg-red-500 hover:bg-red-700 text-white text-sm font-bold rounded transition-colors duration-300"
                >
                    Read more
                </Link>
            </div>
        );
    };

    return (
        <div className="p-10 text-center bg-gray-50 mx-auto max-w-[1200px] pt-20">
            <SectionTitle title="Our Latest Blogs" />
            <Swiper {...swiperSettings}>
                {blogs.map((blog) => (
                    <SwiperSlide key={blog.id}>
                        <CardComponent item={blog} type="blog" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <hr className="my-16 border-gray-200" />

            <SectionTitle title="Our Latest Articles" />
            <Swiper {...swiperSettings}>
                {articles.map((article) => (
                    <SwiperSlide key={article.id}>
                        <CardComponent item={article} type="article" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                .swiper-pagination-bullet {
                    background: #ff0000 !important;
                    opacity: 1;
                    width: 10px;
                    height: 10px;
                }
                
                .swiper-pagination-bullet-active {
                    background: #ff0000 !important;
                }
                
                .swiper-button-prev,
                .swiper-button-next {
                    color: #333333 !important;
                    transition: color 0.3s ease;
                }
                
                .swiper-button-prev:hover,
                .swiper-button-next:hover {
                    color: #ff0000 !important;
                }
                
                .swiper-button-disabled {
                    opacity: 0.35 !important;
                }
                
                .swiper-slide {
                    display: flex !important;
                    justify-content: center !important;
                    height: auto !important;
                }
                .swiper-pagination{
                    position: unset!important;
                }
                @media (max-width: 640px) {
                    .swiper-button-prev,
                    .swiper-button-next {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Healthguide;