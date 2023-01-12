import {Words} from '../components/Words.js';
import {Letters} from '../components/letters';
import React, {useState, useEffect, useRef} from 'react'
import { Header } from '../components/Header';
import { Popup } from '../components/popUp.js';

export function Wordle() {

    const guessWord = 'snake';
    const Wordlecolour = 'beige';
    let myWords = [{letter : '', colour : Wordlecolour}];

    for (let i = 1; i < 25; i++) {

        myWords.push({letter : '', colour: Wordlecolour});
    }

    const [word, setWord] = useState(myWords);
    const [index, setIndex] = useState(0);
    const [doneButton, setDoneButton] = useState(false);
    const focusWord = useRef(null);
    const [pop, setPop] = useState('none');

    useEffect (() => {

        if (focusWord.current) {

            focusWord.current.focus();
        }
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

        word[index] = {letter : newLetter, colour: Wordlecolour};        
        const newWord = word.slice();

        setWord(newWord);
        setIndex(index + 1);


        if (index % 5 == 4) {

            setDoneButton(true)
        }
    }

    function removeLetter() {

        if (index % 5 != 0 || doneButton) {

            word[index - 1] = {letter : '', colour : Wordlecolour};
            const newWord = word.slice();
            setWord(newWord);
            setIndex(index - 1);

            if (doneButton) {

                setDoneButton(false);
            }
        }
    }

    function letterInGuessWord(letter) {

        for (let i = 0; i < 5; i++) {

            if (letter === guessWord.charAt(i)) {

                return true;
            }
        }

        return false;
    }

    function releaseButton() {

        let indexOfGuessWord = 0;
        let fiveLettersCorrect = 0;
        
        for (let i = index - 5; i < index; i++) {

            if(word[i].letter === guessWord.charAt(indexOfGuessWord++)) {

                word[i].colour = 'green';
                fiveLettersCorrect++;
            }
            else if(letterInGuessWord(word[i].letter)) {

                word[i].colour = 'orange';
            }
            else{

                word[i].colour = 'gray';
            }
        }

        if (fiveLettersCorrect == 5) {

            setPop('win');
        }
        if (index >= 25) {

            setPop('lose');
        }

        const newWords = word.slice();
        setWord(newWords);
        setDoneButton(false);
    }
    function openPopUp() {

        if (pop === 'none') {

            setPop('else');
        }
    }

    function removePop() {

        setPop('none');
    }


  return (
    <div className="App">

        <Header openPopUp={openPopUp}/>
        <Popup Popup = {pop} removePopUp = {removePop}/>
        <Words focusRef={focusWord} focusIndex={index} showOnScreen = {word}/>
        <Letters press = {addWord} done = {doneButton} release = {releaseButton} erase = {removeLetter}/>
    </div>
  );
}