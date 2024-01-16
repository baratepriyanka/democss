import React from 'react';
import  { useState } from 'react';
import './demo1.css'
export default function Demo1() {

    const [rotateY, setRotateY] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransparencyActive, setIsTransparencyActive] = useState(false);

    const handlePagerItemClick = (index) => {
        const newRotateY = index * -90;
        setRotateY(newRotateY);
        setActiveIndex(index);
    };

    const handleTransparencyClick = () => {
        setIsTransparencyActive((prev) => !prev);
    };


    return (
        <div>
            <div id="css3dimageslider"className={isTransparencyActive ? 'transparency' : ''} style={{
        WebkitTransform: `rotateY(${rotateY}deg)`,
        MozTransform: `rotateY(${rotateY}deg)`,
        msTransform: `rotateY(${rotateY}deg)`,
        transform: `rotateY(${rotateY}deg)`,
      }}>
                <ul>
                    <li> <img style={{ width: "100%;", height: "100%" }} src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp" /> </li>
                    <li> <img style={{ width: " 100%;", height: "100%" }} src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" /> </li>
                    <li> <img style={{ width: " 100%;", height: "100%" }} src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp" /> </li>
                    <li> <img style={{ width: " 100%;", height: "100%" }} src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" /> </li>
                </ul>
            </div>
           
            <ul id="css3dimagePager">
                <li  className={"list-group-item list-group-item-success" + ( activeIndex === 0 ? 'active' : '' )} onClick={() => handlePagerItemClick(0)}>Güvenli İşletim Sistemi</li>
                <li  className={"list-group-item list-group-item-danger" + ( activeIndex === 1? 'active' : '' )} onClick={() => handlePagerItemClick(1)}>Solid Works</li>
                <li  className={"list-group-item list-group-item-warning" + ( activeIndex === 2 ? 'active' : '' )} onClick={() => handlePagerItemClick(2)} >Akıllı Ev sistemi</li>
                <li  className={"list-group-item list-group-item-primary" + ( activeIndex === 3 ? 'active' : '' )} onClick={() => handlePagerItemClick(3)} >Türkiye</li>
            </ul>
            <button id="css3dtransparency"  className={isTransparencyActive ? 'active' : ''} onClick={handleTransparencyClick} >Şeffaflığı Kapat</button>
        </div>
    )
}
