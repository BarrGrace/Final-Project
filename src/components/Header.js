export function Header({openPopUp}){

    return (

        <div className="header">

            <div>Wordle</div>
            <button onClick={() => openPopUp()}>&#10068;</button>
        </div>
    )
}