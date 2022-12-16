import {Words} from '../components/Words.js';
import {Letters} from '../components/letters';
import React, {useState, useEffect, useRef} from 'react'
import { Header } from '../components/Header';

export function Wordle() {

    let myWords = [{letter : ''}];

    for (let i = 1; i < 25; i++) {

        myWords.push({letter : ''});
    }

    const [word, setWord] = useState(myWords);
    const [index, setIndex] = useState(0);
    const [doneButton, setDoneButton] = useState(false);

    useEffect (() => {


        if (index == 25) {

            return;
        }
        
        //catch the spesific element but can't seems to get it in focus()
        console.log(document.getElementsByClassName('wordle')[index])
        document.getElementsByClassName('wordle')[index].focus();
    })

    function useKey(cb) {

        const callbackRef = useRef();

        useEffect(() => {

            callbackRef.current = cb;
        })

        useEffect (() => {
            
            function handle(event) {
                
                callbackRef.current(event)
            }
            document.addEventListener('keypress', handle);
            return () => {document.removeEventListener('keypress', handle)}
        }, []);
    }

    function handleKey(e) {

        if (isABC(e.key)) {

            addWord(e.key);
        }
        else if (e.key == 'Enter' && doneButton) {

            releaseButton();
        }
    }

    function isABC(char) {

        const ABC = 'abcdefghijklmnopqrstuvwxyz';

        for (let i = 0; i < 26; i++) {

            if (ABC.charAt(i) == char.toLowerCase()) {

                return true;
            }
        }

        return false;
    }

    useKey(handleKey);


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

        word[index] = {letter : newLetter};        
        const newWord = word.slice();

        setWord(newWord);
        setIndex(index + 1);

        if (index % 5 == 4) {

            setDoneButton(true)
        }
    }

    function removeLetter() {

        if (index % 5 != 0 || doneButton) {

            word[index - 1] = {letter : ''};
            const newWord = word.slice();
            setWord(newWord);
            setIndex(index - 1);

            if (doneButton) {

                setDoneButton(false);
            }
        }
    }

    function releaseButton() {

        setDoneButton(false);
    }

  return (
    <div className="App">

        <Header/>
        <Words showOnScreen = {word}/>
        <Letters press = {addWord} done = {doneButton} release = {releaseButton} erase = {removeLetter}/>
    </div>
  );
}