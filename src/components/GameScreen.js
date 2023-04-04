import React from 'react'
import StatusBar from './StatusBar';
import Card from './Card';
import GameButton from './GameButton';
import { useState } from 'react';
import statusBarVariables from '../data/status-bar-left-data.json'
/* import statusBarVariables from '../data/status-bar-top-data.json' */


export default function GameScreen(props) {

    //Достаю Screen из пропсов
    const screen = props.screen;

    //достаю то, что небходимо из screen
    const background = screen.background;
    const screenCSS = screen.cssClass;
    const cardsContainerData = screen.elements.cardsContainer;
    const cardsContainerCss = cardsContainerData.cssClass;
    const statusBarData = screen.elements.statusBar;
    
    //temporary solution
    var buttonText = screen.elements.gameButton.text


    //React states 
    //стейт.показываем карточки или нет. 
    const [show, showCards] = useState(undefined);

    //стейт. показываем статус бар или нет
    const [display, showStatusBar] = useState(undefined);

    //стейт. временно кнопка всё время есть, этот стейт показывает текст кнопки.
    const [text, setButtonText] = useState(buttonText);

    //данные для сайдбара
    const [sidebarScore, setSidebarScore] = useState();
     
    console.log("What I am passing to statusBarData");
    console.log(statusBarData)
 
    // Функция, которая обрабатывает клик. Сейчас нужна для того, чтобы начать отрисовывать карточки и сайдбар
    // ВАЖНО!!! алгоритм как получать функции ??? 1) функции описаны в приложении (простой вариант), 
    //2) часть имён функций / все имена функций присылает сервер  (существенное усложнение - кто пишет эти функции? откуда в приложении берется код этих функций? итд)
    
    //пока что меняю стейты после нажатия кнопки. Клик на кнопку начать игру -> нарисовали карточки, нарисовали статус-бар, поменяли текст кнопки. Всё это наброски-черновик     
    function handleClick() {
       showCards(true); 
       /* временно захордкожен текст кнопки, чуть позже добавлю GameScreen начала игры, когда на экране ещё нет карточек, а другая инфо (напр. Название игры, кнопка начать игру)*/
       setButtonText("Далее");
       showStatusBar(true);
    } 

    
    //Карточки <Card/> отрисовываются в цикле. Для этого нужен массив id карточек cardsList (из screen), его я добавила в _game.json
    const cardsArr = screen.elements.cardsContainer.cardsList;
    


    return ( 
        <div className = { screenCSS } style = {{ backgroundImage: `url(${background})` }}>
           
            <div className = { cardsContainerCss }>
                
           { 
            /* Здесь рисуем карточки. Рисовать или нет - см. стейт */
            show ? cardsArr.map(cardId => (
            <Card key = {cardId} data = {screen.elements.cardsContainer.cards[cardId]}/>
            )) : console.log("I am not showing cards")
           } 
           
           { /* Кнопка в дальнейшем тоже будет рисовать в зависимости от условия (например, смотрим есть ли она в объекте screen) */ }
            <GameButton onClick = { handleClick }>{ text }</GameButton>

   

            {/* временная кнопка TEST - попробовать поменять стейт внутри App с помощью коллбэка и получить экран.  */}
            <GameButton onClick = { props.function }>test</GameButton>
            </div>
            {   /* Статус бар тоже будeм смотреть, есть ли он в screen или нет. Для этого в стейт в значение по умолчанию будет передаваться что-то из объекта screen) */
                display ? <StatusBar data = { statusBarData } variables = { statusBarVariables }/> : console.log("I am not showing status bar")
            }
            
            
        </div>
    )
}

