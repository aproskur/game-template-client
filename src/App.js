
import game from './data/_game.json'
import GameScreen from './components/GameScreen'
import { useCallback } from 'react';
import { useState } from 'react';


function App() {

 
  //Приложение будет получать от сервера только screen, но мне сейчас нужен таймлайн, 
  //чтобы отображать экраны последовательно, пока нет API
  const timeline = game.timeline;
  const screenId = timeline[0];  //временно захардкожен первый элемент массива таймлайн

  //Это захардкоженный второй скрин gameScreen2 из _game.json, чтобы быстрее посмотреть, как всё работает
  const newTest = game.gameScreens[timeline[1]];


  //  стейт. обновляет currentScreen. CurrentScreen передаётся в компонент GameScreen  
  // когда будет api, useState в значение по умолчанию вместо game.gameScreens[timeline[0]] будет передаваться экран, полученый от api
  const [currentScreen, setScreen] = useState(game.gameScreens[timeline[0]]);


  //функция, имя которой передаётся в GameScreen
  //Должна запрашивать следующий экран и обновлять стейт приложения, чтобы передать новый экран в GameScreen
  //Сейчас захордкожен следующий экран  game.gameScreens[timeline[1]];. когда будет api, внутри этой фунции 
  //будет делаться запрос нового экрана (GET).
  // стейт обновляется, и в GameScreen уходит новый экран
    const handleSetScreen = useCallback(() => {
      const newScreen =  newTest;
      setScreen(newScreen);
    }, ); 

  //в GameScreen передаю экран currentScreen и callback handleSetScreen
  return (
    <>
      <GameScreen function = { handleSetScreen } screen = { currentScreen }/>
    </>
  );
}

export default App;
