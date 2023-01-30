import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { width } from '../constants';
import { Colors } from '../theme';

const SWITCH_TRACK_COLOR = {
  true: Colors.darkViolet,
  false: Colors.grey,
};


export const SwitchScreen = () =>  {
  const [theme, setTheme] = useState('light');

  const progress = useDerivedValue(() => {
    return withTiming(theme === 'dark' ? 1 : 0);
  });

  const animtyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.background, Colors.dark.background]
    );

    return {
      backgroundColor,
    };
  });

  const middleBoxStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.circle, Colors.dark.circle]
    );

    return {
      backgroundColor,
    };
  });

  const titleStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.text, Colors.dark.text]
    );
    return {
      color,
    };
  });

  return (
    <Animated.View style={[styles.container, animtyle]}>
        {theme === 'light' &&
      <Animated.Text style={[styles.text, titleStyle]}>Light mode</Animated.Text> }
      <Animated.View style={[styles.middleBox, middleBoxStyle]}>
        <Switch
          value={theme === 'dark'}
          onValueChange={(toggled) => {
            setTheme(toggled ? 'dark' : 'light');
          }}
          trackColor={SWITCH_TRACK_COLOR}
          thumbColor={Colors.violet}
        />
      </Animated.View>
      { theme === 'dark' &&
      <Animated.Text style={[styles.lightText, titleStyle]}>Dark mode</Animated.Text>
      }
    </Animated.View>
  );
}

const SIZE = width * 0.7;

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleBox: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.05,
    shadowRadius: 15,
    shadowOffset: {
      height: 20,
      width: 0,
    },
    shadowColor: Colors.black,
    backgroundColor: Colors.light.circle,
    elevation: 8,
  },
  text: {
    position: 'absolute',
    fontSize: 40,
    fontWeight: '700',
    letterSpacing: 8,
    textTransform: 'uppercase',
    top: 90,
  },
  lightText: {
    position: 'absolute',

    fontSize: 40,
    fontWeight: '700',
    letterSpacing: 8,
    textTransform: 'uppercase',
    bottom: 90,
  },
});