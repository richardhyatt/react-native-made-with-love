import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {

    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
});

const MadeWithLove = ( { color, heartColor, place, style, textStyle, heartStyle } ) => {

  const _textStyle = {

    color,
    ...textStyle,
  };

  const _heartStyle = {

    color: heartColor,
    ...heartStyle,
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={_textStyle}>Made with</Text>
      <Text style={_heartStyle}>{' ♥︎ '}</Text>
      <Text style={_textStyle}>{'in ' + place}</Text>
    </View>
  );
};

MadeWithLove.defaultProps = {

  color: 'black',
  heartColor: 'darkred',
  place: 'Toronto',
  style: {},
};

export default MadeWithLove;
