import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../../colors';

const Tile = ({
  tile,
  setTilePair,
  tilePair,
  tiles,
  setTiles,
  setTurns,
  setMatches,
}) => {
  const pressHandler = () => {
    // console.log(tilePair, 'tilePair');
    if (tile.state == 'vanished') {
      return;
    }

    if (tilePair.length == 0) {
      // console.log('tilePair.length == 0');
      setTilePair([...tilePair, tile]);

      const update = {...tiles};
      update[tile.id] = {...tile, state: 'visible'};

      setTiles(update);
    } else if (tilePair.length == 1) {
      // console.log('tilePair.length == 1');
      setTilePair([...tilePair, tile]);
      let update = {...tiles};
      update[tile.id] = {...tile, state: 'visible'};
      setTiles(update);
      setTurns(p => p + 1);

      const matched =
        tile.letter === tilePair[0].letter && tile.id != tilePair[0].id;

      setTimeout(() => {
        // console.log(matched, 'matched?');
        update = {...tiles};
        update[tile.id] = {...tile, state: matched ? 'vanished' : 'hidden'};
        update[tilePair[0].id] = {
          ...tilePair[0],
          state: matched ? 'vanished' : 'hidden',
        };
        setTiles(update);
        if (matched) {
          setMatches(p => p + 1);
        }
        setTilePair([]);
      }, 500);

      setTiles(update);
    } else if (tilePair.length >= 2) {
      // console.log('tilePair.length == 2');
      return;
    }
  };

  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={[
        styles.parent,
        {
          backgroundColor:
            (tile.state != 'visible') & (tile.state != 'hidden')
              ? '#121212'
              : colors.tile,
        },
      ]}>
      {tile.state == 'visible' && (
        <Text style={styles.tileText}>{tile.letter}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Tile;

const styles = StyleSheet.create({
  parent: {
    height: Dimensions.get('window').width / 5,
    width: Dimensions.get('window').width / 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  tileText: {
    fontSize: 40,
    fontFamily: 'MuseoSans-500',
    color: 'white',
  },
});
