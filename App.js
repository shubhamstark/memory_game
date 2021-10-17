import React, {useState} from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';
import MainHomeScreen from './src/screens/homeScreen/MainHomeScreen';
import MainMainGame from './src/screens/mainGame/MainMainGame';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [playingGame, setPlayingGame] = useState(false);

  const backgroundStyle = {
    backgroundColor: 'black',
    flex: 1, //,isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {playingGame ? (
        <MainMainGame setPlayingGame={setPlayingGame} />
      ) : (
        <MainHomeScreen setPlayingGame={setPlayingGame} />
      )}
    </SafeAreaView>
  );
};

export default App;
