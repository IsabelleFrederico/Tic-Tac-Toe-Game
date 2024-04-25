import React, { useEffect, useState, useRef } from 'react'
import { data } from '../Constant/Constant'
import x from '../img/x.png'
import o from '../img/o.png'
import './style.css'

function TicTacToe() {
    const [count, setCount] = useState(0)
    const [lock, setLock] = useState(false)
    const title = useRef(null)
    const box0 = useRef(null)
    const box1 = useRef(null)
    const box2 = useRef(null)
    const box3 = useRef(null)
    const box4 = useRef(null)
    const box5 = useRef(null)
    const box6 = useRef(null)
    const box7 = useRef(null)
    const box8 = useRef(null)
    const box9 = useRef(null)

    const arrayBox = [box0, box1, box2, box3, box4, box5, box6, box7, box8, box9]

    useEffect(() => {

    }, [count])

    const toggle = (e, num) => {
        if (lock) {
            return 0
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${x}'/>`;
            data[num] = "x"
            setCount(count + 1)
        } else {
            e.target.innerHTML = `<img src='${o}'/>`;
            data[num] = "o"
            setCount(count + 1)
        }
        winOrLose()
    }

    const winOrLose = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                return youWon(data[a]);
            }
        }
        return null;
    }

    const youWon = (winner) => {
        setLock(true)
        if (winner === "x") {
            title.current.innerHTML = `Congratulations: <img src='${x}'/> win!`;
        } else {
            title.current.innerHTML = `Congratulations: <img src='${o}'/> win!`
        }
    }

    const cleanData = () => {
        for (let i = 0; i < data.length; i++) {
            data[i] = ''
        }
    }

    const reset = () => {
        setLock(false)
        cleanData()
        title.current.innerHTML = `Tic Tac Toe Game`
        arrayBox.map((e) => { e.current.innerHTML = `` })

    }

    return (
        <div className='container'>
            <h1 className='title' ref={title}>Tic Tac Toe Game</h1>
            <div className='board'>
                <div className='row1'>
                    <div className='boxes' ref={box0} onClick={(e) => { toggle(e, 0) }}></div>
                    <div className='boxes' ref={box1} onClick={(e) => { toggle(e, 1) }}></div>
                    <div className='boxes' ref={box2} onClick={(e) => { toggle(e, 2) }}></div>
                </div>
                <div className='row2'>
                    <div className='boxes' ref={box3} onClick={(e) => { toggle(e, 3) }}></div>
                    <div className='boxes' ref={box4} onClick={(e) => { toggle(e, 4) }}></div>
                    <div className='boxes' ref={box5} onClick={(e) => { toggle(e, 5) }}></div>
                </div>
                <div className='row3'>
                    <div className='boxes' ref={box6} onClick={(e) => { toggle(e, 6) }}></div>
                    <div className='boxes' ref={box7} onClick={(e) => { toggle(e, 7) }}></div>
                    <div className='boxes' ref={box8} onClick={(e) => { toggle(e, 8) }}></div>
                </div>
            </div>
            <button className='buttonReset' onClick={() => reset()}>Reset</button>
        </div>
    );
}

export default TicTacToe;