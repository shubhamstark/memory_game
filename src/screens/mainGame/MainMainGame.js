import React, {useState} from 'react';
import {Image, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import {generateRandomTiles} from '../../common/helperFunctions';
import Button from '../../components/Button';
import Tile from '../../components/Tile';

import AsyncStorage from '@react-native-async-storage/async-storage';

const MainMainGame = ({setPlayingGame}) => {
  const [tiles, setTiles] = useState(generateRandomTiles());
  const [tilePair, setTilePair] = useState([]);
  const [matches, setMatches] = useState(0);
  const [turns, setTurns] = useState(0);

  const returnHome = () => {
    setPlayingGame(false);
  };

  const restart = () => {
    setTiles(generateRandomTiles());
    setMatches(0);
    setTurns(0);
    setTilePair([]);
  };

  const gameOver = () => {
    if (matches == 8) {
      AsyncStorage.getItem('HIGH_SCORE').then(highScore => {
        console.log(highScore, 'highScore');
        if (highScore == null || parseInt(highScore) > parseInt(turns)) {
          AsyncStorage.setItem('HIGH_SCORE', JSON.stringify(turns));
        }
        let msg;
        if (highScore != null) {
          msg = `game over,your score = ${turns} turns, Your previous best = ${highScore} turns.`;
        } else {
          msg = `game over,your score = ${turns} turns, Your previous best = not available`;
        }
        ToastAndroid.show(msg, ToastAndroid.LONG);
      });
    }
  };
  gameOver();

  return (
    <View style={styles.parentView}>
      <View style={styles.matchesTurns}>
        <View style={styles.score}>
          <Text style={styles.scoreText}>Matches</Text>
          <Text style={styles.scoreText}>{matches}</Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.scoreText}>Turns</Text>
          <Text style={styles.scoreText}>{turns}</Text>
        </View>
      </View>
      <View style={styles.imageView}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo.png')}
        />
      </View>
      <View style={styles.tileContainer}>
        {Object.values(tiles).map(tile => {
          return (
            <Tile
              tile={tile}
              key={tile.id}
              setTilePair={setTilePair}
              tilePair={tilePair}
              tiles={tiles}
              setTiles={setTiles}
              setMatches={setMatches}
              setTurns={setTurns}
            />
          );
        })}
      </View>
      <View style={styles.bottomButtonsConatiner}>
        <View style={styles.button}>
          <Button onPress={returnHome} borderRadius={5} name="Menu" />
        </View>
        <View style={styles.button}>
          <Button onPress={restart} borderRadius={5} name="Restart" />
        </View>
      </View>
    </View>
  );
};

export default MainMainGame;

const styles = StyleSheet.create({
  parentView: {
    margin: 10,
    justifyContent: 'space-between',
    flex: 1,
  },
  matchesTurns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  score: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonsConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 80,
  },
  tileContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    // backgroundColor: 'red',
    justifyContent: 'center',
  },
  scoreText: {
    fontFamily: 'MuseoSans-500',
    fontSize: 22,
    color: 'white',
  },
  logo: {
    width: 150,
    height: 150,
  },
  imageView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
