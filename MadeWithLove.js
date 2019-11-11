import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {

        flexDirection: 'row',
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
});

const MadeWithLove = ( { color, heartColor, place, style } ) => {

    const textStyle = {

        color,
    };

    const heartStyle = {

        color: heartColor,
    };

    return (
        <View style={styles.container}>
            <Text style={textStyle}>Made with</Text>
            <Text style={heartStyle}>{' ♥︎ '}</Text>
            <Text style={textStyle}>{'in ' + place}</Text>
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
