import React from 'react';
import './../../../../assets/css/home/articles.css';
import Avatar from './../../../../assets/img/avatar.svg';

const Article = () => {
    return (
        <article className="article">
            <h3>Titulo jeje</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, molestias veritatis fugit distinctio nihil, minus, deleniti a voluptas corporis provident nobis officiis suscipit natus repellendus veniam eaque libero. Voluptas, nostrum?</p>
            <div className="separator"></div>
            <div className="author">
                <div className="avatar">
                    <img src={Avatar} alt="" />
                </div>
                <div className="author-info">
                    <p>Joaquin Hernandez</p>
                    <p>Dec 31, 2021</p>
                </div>
            </div>
        </article>
    );
}

export default Article;