import "./TicTacToe.css";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";
import { useRef, useState } from "react";

let data = ["", "", "", "", "", "", "", "", ""];


const TicTacToe = () => {
    let [xscore, setXscore] = useState(0);
    let [oscore, setOscore] = useState(0);
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);

    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num] = "X";
            setCount(count + 1);
        } else {
            e.target.innerHTML = `<img src='${circle_icon}'>`;
            data[num] = "O";
            setCount(count + 1);
        }
        checkWin();
    };

    let titleref = useRef("");
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);
    let leads = useRef(null)
    let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9]

    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        } else if (
            data[3] === data[4] &&
            data[4] === data[5] &&
            data[5] !== ""
        ) {
            won(data[5]);
        } else if (
            data[6] === data[7] &&
            data[7] === data[8] &&
            data[8] !== ""
        ) {
            won(data[8]);
        } else if (
            data[0] === data[3] &&
            data[3] === data[6] &&
            data[6] !== ""
        ) {
            won(data[6]);
        } else if (
            data[1] === data[4] &&
            data[4] === data[7] &&
            data[7] !== ""
        ) {
            won(data[7]);
        } else if (
            data[2] === data[5] &&
            data[5] === data[8] &&
            data[8] !== ""
        ) {
            won(data[8]);
        } else if (
            data[0] === data[4] &&
            data[4] === data[8] &&
            data[8] !== ""
        ) {
            won(data[8]);
        } else if (
            data[2] === data[4] &&
            data[4] === data[6] &&
            data[6] !== ""
        ) {
            won(data[6]);
        } else if (!data.includes("")) {
            won("draw");
        }
    };

    const won = (winner) => {
        setLock(true);
        if (winner === "draw") {
            titleref.current.innerHTML = "its a Draw Reset and try again";
        } else if (winner === "X") {
            titleref.current.innerHTML = `Congratulations <img src=${cross_icon}> WINS`;
            setXscore(++xscore);
            
        } else if (winner === "O") {
            titleref.current.innerHTML = `Congratulations <img src=${circle_icon}> WINS`;
            setOscore(++oscore);
        }
        if (xscore > oscore){
            leads.current.innerHTML = `X leads by ${xscore-oscore}`
        }
        else if(oscore > xscore){
            leads.current.innerHTML = `O leads by ${oscore-xscore}`
        }
        else{
            leads.current.innerHTML = ``
        }
        
    };

    const reset = () => {
        data = ["", "", "", "", "", "", "", "", ""];
        setLock(false);
        titleref.current.innerHTML = "Tic Tac Toe Game in <span>React</span>";
        box_array.map((box)=>{
            box.current.innerHTML = ""
        })
        setCount(0)
    };

    const restart = ()=>{
        reset()
        setXscore(0)
        setOscore(0)
        leads.current.innerHTML = ``
    }

    return (
        <div className="container">
            <h1 className="title" ref={titleref}>
                Tic Tac Toe Game in <span>React</span>
            </h1>
                <span id="leads" ref={leads}></span>
            <div className="scores">
                <h1>
                    X - score-<span>{`[${xscore}]`}</span>
                </h1>
                <h1>
                    O - score <span>{`[${oscore}]`}</span>
                </h1>
            </div>
            <div className="board">
                <div className="row-1">
                    <div
                        className="boxes"
                        ref = {box1}
                        onClick={(e) => {
                            toggle(e, 0);
                        }}
                    ></div>
                    <div
                        className="boxes"
                        ref = {box2}
                        onClick={(e) => {
                            toggle(e, 1);
                        }}
                    ></div>
                    <div
                        className="boxes"
                        ref = {box3}
                        onClick={(e) => {
                            toggle(e, 2);
                        }}
                    ></div>
                </div>
                <div className="row-2">
                    <div
                        className="boxes"
                        ref = {box4}
                        onClick={(e) => {
                            toggle(e, 3);
                        }}
                    ></div>
                    <div
                        className="boxes"
                        ref = {box5}
                        onClick={(e) => {
                            toggle(e, 4);
                        }}
                    ></div>
                    <div
                        className="boxes"
                        ref = {box6}
                        onClick={(e) => {
                            toggle(e, 5);
                        }}
                    ></div>
                </div>
                <div className="row-3">
                    <div
                        className="boxes"
                        ref = {box7}
                        onClick={(e) => {
                            toggle(e, 6);
                        }}
                    ></div>
                    <div
                        className="boxes"
                        ref = {box8}
                        onClick={(e) => {
                            toggle(e, 7);
                        }}
                    ></div>
                    <div
                        className="boxes"
                        ref = {box9}
                        onClick={(e) => {
                            toggle(e, 8);
                        }}
                    ></div>
                </div>
            </div>
            <button className="reset" onClick={reset}>
                Reset
            </button>
            <button className="restart" onClick={restart}>New Game</button>
        </div>
    );
};
export default TicTacToe;
