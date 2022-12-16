import { Header } from "../components/Header";
import React, {Link} from "react-router-dom";
import { useState } from "react";

export function Home() {

    const [user, setUser] = useState('user');

    return (

        <>
        <Header/>
        <div id = 'home'>
        <h1 id = 'homePage'>Home Page</h1>
        <h1>welcome {user}</h1>
        {user == 'user' ?
        (
            <form onSubmit = {(element) => element.preventDefault()}>
            <label>Enter you name:</label>
            <input type = 'text'></input>
            <button type = "submit" onClick = {
                
                () => setUser(document.getElementsByTagName('input')[0].value)
                }>submit</button>
            </form>
        )
         : 
        (
            <Link to = '/wordle'>
            <button>start the game</button>
            </Link>
        )}
        
        </div>
        </>
    )
}