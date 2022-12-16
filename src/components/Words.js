export function Words({showOnScreen}) {

    return(

        <div className="placeGrid">
            <div className = "words">
            {showOnScreen.map((element, unique_id) =>(
                
                <div className='wordle' key = {unique_id}>{element.letter.toUpperCase()}</div>
            ))}           
                
            </div>
        </div>
    )
}