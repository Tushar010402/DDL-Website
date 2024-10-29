import React, { useState, useEffect } from 'react';
import './News.css';

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
    <div className="news-container">
      <h2>Latest News</h2>
      {newsData.length === 0 ? (
        <p>No news available at the moment.</p>
      ) : (
        newsData.map((newsItem, index) => (
          <div className="news-article" key={index}>
            <div className="news-image">
              <img src={`https://backend.dangsccg.co.in${newsItem.news_image}`} alt={newsItem.alt_text} />
            </div>
            <div className="news-details">
              <h3 className="news-heading">{newsItem.news_heading}</h3>
              <p className="news-content">{newsItem.news_content}</p>
              <p className="news-released">Released on: {newsItem.released_date}</p>
              <a href={newsItem.news_link} className="news-read-more">Read More...</a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default News;
