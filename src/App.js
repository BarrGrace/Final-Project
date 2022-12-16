import './wordleStyle.css';
import { Wordle } from './pages/wordle';
import React, { Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';

function App() {

    return(

        <> 
        <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/wordle' element = {<Wordle/>}/>
        </Routes>
        </>
    )
}

export default App;
