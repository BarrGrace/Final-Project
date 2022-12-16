export function Letters({press, done, release, erase}) {

    return (

        <div>
            <div className = "letters">

            <button onClick = {press}>Q</button>
            <button onClick = {press}>W</button>
            <button onClick = {press}>E</button>
            <button onClick = {press}>R</button>
            <button onClick = {press}>T</button>
            <button onClick = {press}>Y</button>
            <button onClick = {press}>U</button>
            <button onClick = {press}>I</button>
            <button onClick = {press}>O</button>
            <button onClick = {press}>P</button>

            </div>
            <div className = "letters">

            <button onClick = {press}>A</button>
            <button onClick = {press}>S</button>
            <button onClick = {press}>D</button>
            <button onClick = {press}>F</button>
            <button onClick = {press}>G</button>
            <button onClick = {press}>H</button>
            <button onClick = {press}>J</button>
            <button onClick = {press}>K</button>
            <button onClick = {press}>L</button>
            </div>
            <div className = "letters">

            {done ? <button id = "done" onClick={release}>done</button> : <button id = "notDone"></button>}
            <button onClick = {press}>Z</button>
            <button onClick = {press}>X</button>
            <button onClick = {press}>C</button>
            <button onClick = {press}>V</button>
            <button onClick = {press}>B</button>
            <button onClick = {press}>N</button>
            <button onClick = {press}>M</button>
            <button onClick = {erase}>&#11013;</button>
            </div>

            
            {/* <input id = 'focus' autoFocus = {true} onFocus = {() => document.getElementById('focus').style.backgroundColor = 'red'}></input> */}
        </div>
    )
}
