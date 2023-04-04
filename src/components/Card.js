import React from 'react'
import { useState } from 'react';

export default function Card(props) {

    console.log("data that the card gets");
    console.log(props.data);
    const data = props.data;
    const [text, setText] = useState(data.text);


    // функция, которая обрабатывает клик по карточке. Что должно происходить по клику на карточку? 
    // - определить тип карточки и в зависимости от типа карточки что-то сдлеать
    //Если карточка игровая
    // 1. Показать другой текст, если он есть
    // 2. Поменять значение переменных в сайдабре

    function handleCardClick() {
        setText(data.textFlipped);

    }

    //Здесь будет стейт карточки (меняется по клику на карточку/кнопку)
    
    //надо передавать данные в StatusBar, апдейтить переменные

    return (
        <li className = {data.cssClass} onClick = { handleCardClick }>
         { text }
        </li>
    )
}
