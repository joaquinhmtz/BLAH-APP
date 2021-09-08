import React from 'react';
import { useHistory } from "react-router-dom";

const SideTab = () => {
    let history = useHistory();

    function GoTo() {
        history.push("/info");
    }

    return(
        <div className="sidetab" onClick={GoTo}>
            <span>BLÁAAAAAAAAA</span>
        </div>
    );
}

export default SideTab;