export function Letters({letterList ,press, done, release, erase}) {

    const letters_1 = letterList.slice(0, 10);
    const letters_2 = letterList.slice(10, 19);
    const letters_3 = letterList.slice(19, 27);

    return (

        <div>
            <div className = "letters">

            {letters_1.map((element, unique_id) =>(
                
                <button key = {unique_id} onClick = {press} style = {{backgroundColor: element.colour}}>{element.letter}</button>
            ))}

            </div>
            <div className = "letters">

            {letters_2.map((element, unique_id) =>(
                
                <button key = {unique_id} onClick = {press} style = {{backgroundColor: element.colour}}>{element.letter}</button>
            ))}
            </div>
            <div className = "letters">

            {done ? <button id = "done" onClick={release}>done</button> : <button id = "notDone"></button>}

            {letters_3.map((element, unique_id) =>(
                
                <button key = {unique_id} onClick = {press} style = {{backgroundColor: element.colour}}>{element.letter}</button>
            ))}

            <button onClick = {erase}>&#11013;</button>
            </div>
        </div>
    )
}
