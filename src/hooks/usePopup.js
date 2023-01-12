import { useState } from "react";


export function UsePopup() {

    const [pop, setPop] = useState("none");
    
    function openPopUp() {
        
        setPop('else');
    }

    function removePop() {

        setPop('none');
    }

    return {

        pop, 
        openPopUp, 
        removePop,
        setPop
    }
}