import React from 'react';
import LatestNews from './components/news/latest-news';
// import Video from './components/video';
import Animation from './components/animation';
import GridSeparator from './../home/components/shared/grid-separator';
import LatestArticles from './components/articles/latest-articles';
import Discounts from './components/redirections/discounts';
import SomethingInTheMind from './components/redirections/something-in-the-mind';
import Methodology from './components/methodology/methodology';
import ModalInit from './../../pages/home/components/modal-init';


class Home extends React.Component {
    render () {
        const columnText1 = `<p> <strong>jelouuuuuuuuuu!!</strong> Nosotros somos una agencia multitask sin ninguna sede porqueeee esos son lujos. desde a.cf creamos, generamos
        estrategias y retamos a las marcas que trabajan con nosotros para comunicar su mensaje como siempre lo esperaron de forma relevante.</p>`;
        const columnText2 = `<p> No te miento, todo el proceso no te lo haré para nada sencillo, pero te aseguro que los resultados harán que valga cada segundo. <br>
        Nunca olvides que la incertidumbre con un poco de miedo es totalmente normal cuando vas hacia algo <strong> extraordinario. </strong> </p>`;
        const columnText3 = `<h3> Retemonos </h3> <br> <h3> Y seamos </h3> <br> <h3>Extraordinarios</h3>`;
        const columnText4 = `<p> Nuestro objetivo es apoyarte para seguir intentando. <br> A fallar con la seguridad de que en algún momento lograrás ser aquello que haz tenido en
        mente desde un principio, recuerda: <br> 'si hoy no resulto, mañana hazlo mejor'. </p>`;
        
        return (
            <div className="container-home">
                <Animation />
                <GridSeparator text1={columnText1} text2={columnText2}/>
                <LatestNews />
                <SomethingInTheMind />
                <GridSeparator text1={columnText3} text2={columnText4}/>
                <LatestArticles />
                <Methodology />
                <Discounts />
                <ModalInit />
            </div>
        );

    }
}

export default Home;