
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import data from '../helpers/mockData';
import { Transition, Transitioning } from 'react-native-reanimated';
import { Colors } from '../theme';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export const ProductList = () => {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>FOOTBALL CLUBS </Text>

      </View>
      <Transitioning.View
        ref={ref}
        transition={transition}
        style={styles.container}>
        {data.map(({ backGround, textColor, name, info }, index) => {
          return (
            <TouchableOpacity
              key={name}
              onPress={() => {
                ref.current.animateNextTransition();
                setCurrentIndex(index === currentIndex ? null : index);
              }}
              style={styles.cardContainer}
              activeOpacity={0.9}>
              <View style={[styles.card, { backgroundColor: backGround }]}>
                <Text style={[styles.heading, { color: textColor }]}>{name}</Text>
                {index === currentIndex && (
                  <View style={styles.infoList}>
                    {info.map((item) => (
                      <Text key={item} style={[styles.body, { color: textColor }]}>
                        {item}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </Transitioning.View>
    </View>

  );
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1
  },
  headerView: {
    height: 110,
    backgroundColor: Colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 34,
    color: Colors.black,
    top: 20,
    fontWeight: '900'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 34,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  body: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    textAlign: 'center',
  },
  infoList: {
    marginTop: 20,
  },
});