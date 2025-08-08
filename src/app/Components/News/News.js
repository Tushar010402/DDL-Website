// src/app/Components/News/News.jsx

'use client'; // Ensure this component is rendered on the client side

import React, { useState, useEffect } from 'react';
import styles from './News.module.css'; // Import CSS Module
import Image from 'next/image'; // Import Next.js Image component

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://backend.dangsccg.co.in/api/api/newsData/');
        const data = await response.json();

        // Sort data by News_id in descending order (newest first)
        const sortedData = data.sort((a, b) => parseInt(b.News_id) - parseInt(a.News_id));

        setNewsData(sortedData);
      } catch (error) {
        console.error('Error fetching news data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading news...</p>;
  }

  return (
    <div className={styles.newsContainer}>
      <h2 className='text-[#555]'>Latest News</h2>
      {newsData.length === 0 ? (
        <p>No news available at the moment.</p>
      ) : (
        newsData.map((newsItem, index) => (
          <div className={styles.newsArticle} key={index}>
            <div className={styles.newsImage}>
              <Image
                src={`https://backend.dangsccg.co.in${newsItem.news_image}`}
                alt={newsItem.alt_text || 'News Image'}
                width={300} // Adjust width as needed
                height={200} // Adjust height as needed
                className={styles.newsImg}
                priority // Optional: load images with higher priority
              />
            </div>
            <div className={styles.newsDetails}>
              <h3 className={styles.newsHeading}>{newsItem.news_heading}</h3>
              <p className={styles.newsContent}>{newsItem.news_content}</p>
              <p className={styles.newsReleased}>Released on: {newsItem.released_date}</p>
              <a
                href={newsItem.news_link}
                className={styles.newsReadMore}
                aria-label={`Read more about ${newsItem.news_heading}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More...
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default News;
