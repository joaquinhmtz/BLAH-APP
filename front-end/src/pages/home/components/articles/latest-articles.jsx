import React from 'react';
import Article from './article';
import './../../../../assets/css/home/articles.css';

const LatestArticles = () => {
    return (
        <div className="container-articles">
            <div className="header-articles">
                <h2>Últimas novedades</h2>
            </div>
            <div className="articles">
                <Article />
                <Article />
                <Article />
            </div>
        </div>
    );
}

export default LatestArticles;