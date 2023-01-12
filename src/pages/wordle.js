import {Words} from '../components/Words.js';
import {Letters} from '../components/letters';
import React, {useState, useEffect, useRef} from 'react'
import { Header } from '../components/Header';
import { Popup } from '../components/popUp.js';

export function Wordle() {

    const guessWord = 'snake';
    const Wordlecolour = 'beige';
    const lettercolor = 'white';
    let myWords = [{letter : '', colour : Wordlecolour}];

    for (let i = 1; i < 25; i++) {

        myWords.push({letter : '', colour: Wordlecolour});
    }

    let myLetters = [
        {letter: 'Q', colour: lettercolor}, {letter: 'W', colour: lettercolor}, {letter: 'E', colour: lettercolor}, {letter: 'R', colour: lettercolor}, {letter: 'T', colour: lettercolor}, {letter: 'Y', colour: lettercolor}, {letter: 'U', colour: lettercolor}, {letter: 'I', colour: lettercolor}, {letter: 'O', colour: lettercolor}, {letter: 'P', colour: lettercolor},
        {letter: 'A', colour: lettercolor}, {letter: 'S', colour: lettercolor}, {letter: 'D', colour: lettercolor}, {letter: 'F', colour: lettercolor}, {letter: 'G', colour: lettercolor}, {letter: 'H', colour: lettercolor}, {letter: 'J', colour: lettercolor}, {letter: 'K', colour: lettercolor}, {letter: 'L', colour: lettercolor}, 
        {letter: 'Z', colour: lettercolor}, {letter: 'X', colour: lettercolor}, {letter: 'C', colour: lettercolor}, {letter: 'V', colour: lettercolor}, {letter: 'B', colour: lettercolor}, {letter: 'N', colour: lettercolor}, {letter: 'M', colour: lettercolor}
    ];

    const [word, setWord] = useState(myWords);
    const [index, setIndex] = useState(0);
    const [doneButton, setDoneButton] = useState(false);
    const focusWord = useRef(null);
    const [pop, setPop] = useState('none');
    const [letters, setLetters] = useState(myLetters);

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
        else if (e.key === 'Enter' && doneButton) {

            releaseButton();
        }
    }

    function isABC(char) {

        const ABC = 'abcdefghijklmnopqrstuvwxyz';

        for (let i = 0; i < 26; i++) {

            if (ABC.charAt(i) === char.toLowerCase()) {

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

        if (doneButton || index === 25){

            return;            
        }

        let newLetter = handleTheButton(button).toLowerCase();

        word[index] = {letter : newLetter, colour: Wordlecolour};        
        const newWord = word.slice();

        setWord(newWord);
        setIndex(index + 1);


        if (index % 5 === 4) {

            setDoneButton(true)
        }
    }

    function removeLetter() {

        if (index % 5 !== 0 || doneButton) {

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

    function chageKeyboardColour(letter, colour) {

        for (let i = 0; i < 26; i++) {

            if (letters[i].letter.toLocaleLowerCase() === letter) {

                if (letters[i].colour === 'green' && colour === 'orange') {

                    return;
                }
                if (letters[i].colour === 'orange' && colour === 'gray') {

                    return;
                }
                letters[i].colour = colour;
                break;
            }
        }
    }

    function releaseButton() {

        let indexOfGuessWord = 0;
        let fiveLettersCorrect = 0;
        
        for (let i = index - 5; i < index; i++) {

            if(word[i].letter === guessWord.charAt(indexOfGuessWord++)) {

                word[i].colour = 'green';
                chageKeyboardColour(word[i].letter, 'green');
                fiveLettersCorrect++;
            }
            else if(letterInGuessWord(word[i].letter)) {

                word[i].colour = 'orange';
                chageKeyboardColour(word[i].letter, 'orange');
            }
            else{

                word[i].colour = 'gray';
                chageKeyboardColour(word[i].letter, 'gray');
            }
        }

        if (fiveLettersCorrect === 5) {

            setPop('success');
        }
        else if (index >= 25) {

            setPop('fail');
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
        <Letters letterList = {letters} press = {addWord} done = {doneButton} release = {releaseButton} erase = {removeLetter}/>
    </div>
  );
}