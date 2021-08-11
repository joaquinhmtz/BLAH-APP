import React from 'react';
import Avatar from './../../../assets/img/avatar.svg';
import './../../../assets/css/news.css';

const NewsItem = () => {
    return (
        <div className="news-item">
            <div className="header-image">
                <img src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68" alt="" />
            </div>
            <div className="news-item-content">
                <h3>title jejej</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio delectus sed praesentium officiis, a nisi unde eligendi ex repellat commodi blanditiis libero illum! Dolorem sed a perspiciatis laboriosam praesentium?</p>
                <div className="separator"></div>
                <div className="author-news">
                    <div className="avatar-news">
                        <img src={Avatar} alt="" />
                    </div>
                    <div className="author-info">
                        <p>Joaquin Hernandez</p>
                        <p>Dec 31, 2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;