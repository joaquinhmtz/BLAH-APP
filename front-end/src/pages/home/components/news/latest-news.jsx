import React from 'react';
import NewsItem from './news-item';

const LatestNews = () => {
    return (
        <div className="container-news">
            <h2>Últimas noticias relevantes</h2>
            <div className="news">
                <NewsItem />
                <NewsItem />
            </div>
        </div>
    );
}

export default LatestNews;