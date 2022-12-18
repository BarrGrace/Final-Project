export function Words({showOnScreen, focusIndex, focusRef}) {

    return(

        <div className="placeGrid">
            <div className = "words">
            {showOnScreen.map((element, unique_id) =>(
                
                <div ref={unique_id === focusIndex ? focusRef : null} className='wordle' key = {unique_id}>{element.letter.toUpperCase()}</div>
            ))}           
                
            </div>
        </div>
    )
}