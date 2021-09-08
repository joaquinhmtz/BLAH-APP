import React from 'react';
import './../../assets/css/info/info.css';

class Info extends React.Component {
    render () {
        
        return (
            <div className="container-info-bla">
                <div>
                    <img src="https://picsum.photos/700/400?random" alt="" />
                </div>
                <div className="info-paragraph">
                    Aquí debatimos, reflexionamos,
                    nos enojamos, reímos, lloramos,
                    CUESTIONAMOS,
                    pero NUNCA DE LOS NUNCAS
                    llegamos a una conclusión.

                    <p>Pd. Disculpa, aquí no hay verdad absoluta</p>
                </div>
            </div>
        );

    }
}

export default Info;