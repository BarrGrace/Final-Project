export function Letters({press, done, release}) {

    return (

        <div>
            <div className = "letters">

            <button onClick = {press}>a</button>
            <button onClick = {press}>b</button>
            <button onClick = {press}>c</button>
            <button onClick = {press}>d</button>
            <button onClick = {press}>e</button>
            <button onClick = {press}>f</button>
            <button onClick = {press}>g</button>
            <button onClick = {press}>h</button>
            <button onClick = {press}>i</button>

            </div>
            <div className = "letters">

            <button onClick = {press}>k</button>
            <button onClick = {press}>l</button>
            <button onClick = {press}>m</button>
            <button onClick = {press}>n</button>
            <button onClick = {press}>o</button>
            <button onClick = {press}>p</button>
            <button onClick = {press}>q</button>
            <button onClick = {press}>r</button>
            </div>
            <div className = "letters">

            <button onClick = {press}>s</button>
            <button onClick = {press}>t</button>
            <button id = "space"></button>
            <button onClick = {press}>u</button>
            <button onClick = {press}>v</button>
            </div>

            {done ? <center><button id = "done" onClick={release}>done</button></center> : ''}
        </div>
    )
}
