import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';

const MainHomeScreen = ({setPlayingGame}) => {
  return (
    <View style={styles.parentView}>
      <View style={styles.logoTitleView}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo.png')}
        />
        <Text style={styles.gameTitle}>Memory Game </Text>
      </View>
      <View style={styles.buttons}>
        <Button
          name="Play"
          onPress={() => {
            setPlayingGame(true);
          }}
        />
      </View>
    </View>
  );
};

export default MainHomeScreen;

const styles = StyleSheet.create({
  parentView: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  buttons: {
    width: '80%',
    height: '40%',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  gameTitle: {
    fontSize: 40,
    fontFamily: 'GreatVibes-Regular',
    color: 'white',
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoTitleView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
