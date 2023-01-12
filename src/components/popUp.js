import { Link } from "react-router-dom";

export function Popup({Popup, removePopUp}) {
    console.log('im here')

    if (Popup === 'none') return null;

    if (Popup === 'win' || Popup === 'lose') {

        return (

            <div className="popFinish">
            You {Popup}<br/>
            <Link to = '/'><button onClick={() => removePopUp()}>continue</button></Link>
            </div>
        )
    }

    return (

        <>
        <div className = "pop">
        <button onClick={() => removePopUp()}>X</button><br/>
        <ul>
            <li>Each guess must be a valid 5-letter word.</li>
            <li>The colour of the tiles will change:
                <ul>
                    <li>Green is the correct word, in the correct place.</li>
                    <li>Orange is the correct word, in a different place.</li>
                </ul>
            </li>
            <li>Press the keyboard or letters to guess the word.</li>
            <li>After entering a 5 letter word press 'Enter' or click 'done'.</li>
        </ul>
        </div>
        </>
    )
}