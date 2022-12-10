import './wordleStyle.css';
import {Wordle} from './wordle.js';
import {Letters} from './letters';
import React, {useState, useEffect, useRef} from 'react'

function App() {

    let myWords = [];

    for (let i = 0; i < 25; i++) {

        myWords.push('');
    }

    const [word, setWord] = useState(myWords);
    const [index, setIndex] = useState(0);
    const [doneButton, setDoneButton] = useState(false);

    function useKey(cb) {

        const callbackRef = useRef(cb);

        useEffect(() => {

            callbackRef.current = cb;
        })

        useEffect (() => {
            
            function handle(event) {

                callbackRef.current(event)
            }
            document.addEventListener('keypress', handle);
            return () => document.removeEventListener('keypress', handle)
        }, []);
    }

    function handleEnter(e) {

        addWord(e.key)
    }

    useKey(handleEnter)

    function handleTheButton(button) {

        if (typeof button == 'string') {

            return button;
        }
        return button.target.innerText
    }

    function addWord(button) {

        if (doneButton || index == 25){

            return;            
        }

        let newLetter = handleTheButton(button);

        word[index] = newLetter;        
        const newWord = word.slice();

        setWord(newWord);
        setIndex(index + 1)

        if (index % 5 == 4) {

            setDoneButton(true)
        }
    }

    function releaseButton() {

        setDoneButton(false);
    }

  return (
    <div className="App">

        <Wordle showOnScreen = {word}/>
        <Letters press = {addWord} done = {doneButton} release = {releaseButton}/>
    </div>
  );
}

export default App;
