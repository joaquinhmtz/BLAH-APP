import React from 'react';
import LatestNews from './components/news/latest-news';
// import Video from './components/video';
import Animation from './components/animation';
import LatestArticles from './components/articles/latest-articles';
import Discounts from './components/redirections/discounts';
import SomethingInTheMind from './components/redirections/something-in-the-mind';
import Methodology from './components/methodology/methodology';
import ModalInit from './../../pages/home/components/modal-init';


class Home extends React.Component {
    render () {
        

        return (
            <div className="container-home">
                <Animation />
                {/* <Video /> */}
                <LatestNews />
                <SomethingInTheMind />
                <LatestArticles />
                <Methodology />
                <Discounts />
                <ModalInit />
            </div>
        );

    }
}

export default Home;