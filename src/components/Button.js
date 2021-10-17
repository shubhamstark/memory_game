import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../colors';

const Button = ({onPress, color, name, borderRadius}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.buttonView,
            {backgroundColor: color, borderRadius: borderRadius},
          ]}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

Button.defaultProps = {
  color: colors.accent,
  borderRadius: 16,
};

export default Button;

const styles = StyleSheet.create({
  buttonView: {
    height: 36,
    width: '100%', // to allow it to have width of parent View.
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'MuseoSans-500',
  },
});
