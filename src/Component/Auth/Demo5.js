import React from 'react';
import './demo5.css';

export default function Demo5() {
    return (
        <div>
            <div className="container">
                <h1>Choose your favourite group</h1>
                <div className="cardList">
                    <div className="card">
                        <div className="card__bg" style={{backgroundImage: "url('http://lorempixel.com/245/145/animals')"}}></div>
                    </div>
                    <div className="card">
                        <div className="card__bg" style={{backgroundImage: "url('http://lorempixel.com/245/146/animals')"}}></div>
                    </div>
                    <div className="card">
                        <div className="card__bg" style={{backgroundImage: "url('http://lorempixel.com/245/140/animals')"}}></div>
                    </div><span className="cardList__title">Group 1</span>
                </div>
                <div className="cardList">
                    <div className="card">
                        <div className="card__bg" style={{backgroundImage: "url('http://lorempixel.com/245/146/animals')"}}></div>
                    </div>
                    <div className="card">
                        <div className="card__bg" style={{backgroundImage: "url('http://lorempixel.com/245/147/animals')"}}></div>
                    </div>
                    <div className="card">
                        <div className="card__bg" style={{backgroundImage: "url('http://lorempixel.com/245/141/animals')"}}></div>
                    </div><span className="cardList__title">Group 2</span>
                </div>
                <div className="cardList">
                    <div className="card">
                        <div className="card__bg" style={{backgroundImage: "url('http://lorempixel.com/245/147/animals')"}}></div>
                    </div>
                    <div className="card">
                        <div className="card__bg" style={{backgroundImage: "url('http://lorempixel.com/245/148/animals')"}}></div>
                    </div>
                    <div className="card">
                        <div className="card__bg" style={{backgroundImage: "url('http://lorempixel.com/245/142/animals')"}}></div>
                    </div><span className="cardList__title">Group 3</span>
                </div>
                <div className="cardList">
                    <div className="card">
                        <div className="card__bg" style={{backgroundImage: "url('http://lorempixel.com/245/148/animals')"}}></div>
                    </div>
                    <div className="card">
                        <div className="card__bg" style={{backgroundImage: "url('http://lorempixel.com/245/149/animals')"}}></div>
                    </div>
                    <div className="card">
                        <div className="card__bg" style={{backgroundImage: "url('http://lorempixel.com/245/143/animals')"}}></div>
                    </div><span className="cardList__title">Group 4</span>
                </div>
            </div>
        </div>
    )
}
