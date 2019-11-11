# react-native-made-with-love

## Installation
Install via npm.

	npm install react-native-made-with-love --save


## Usage

```js
import MadeWithLove from 'react-native-made-with-love';

// render code:

function MyPage() {

    return (

        <MadeWithLove/>
    );
}
```

Which will produce:

![Default Values](/images/defaults.png)

Changing the `place` property allows the location to be set to your favorite city


## Properties

### `color`

Color to be used for the text. Default is `black`

### `heartColor`

Color to be used for the heart. Default is `darkred`

### `place`

Place to be displayed after the heart. Default is `"Toronto"`

### `style`

Styling to be applied to the container that surrounds the text.

### `textStyle`

Styling applied to the text

### `heartStyle`

Styling applied to the heart
