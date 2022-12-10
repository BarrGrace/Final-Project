export function Wordle({showOnScreen}) {
    
    return(

        <div className="placeGrid">
            <div className = "words">
            {showOnScreen.map((letter, unique_id) =>(
                
                <div className='wordle' id = {unique_id}>{letter}</div>
            ))}                
                
            </div>
        </div>
    )
}