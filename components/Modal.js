import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Dimensions, Animated, Easing, Text, Pressable } from 'react-native'
import { height } from '../constants'
import { Colors } from '../theme';


export const Modal = ({ visible, options, duration, onClose }) => {
    const startPointY = options?.from === 'bottom' ? height : -height;
    const transY = useRef(new Animated.Value(startPointY));

    useEffect(() => {
        if (visible) {
            Animate(0);
        } else {
            Animate(startPointY);
        }
    }, [visible]);

    const Animate = (toValue) => {
        Animated.timing(transY.current, {
            toValue,
            duration,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true
        }).start();
    }

    const onPress = () => {
        onClose();
    }

    const setBackgroundOpacity = () => {
        if (startPointY >= 0) {
            return transY.current.interpolate({
                inputRange: [0, startPointY],
                outputRange: [0.7, 0],
                extrapolate: 'clamp'
            })
        } else {
            return transY.current.interpolate({
                inputRange: [startPointY, 0],
                outputRange: [0, 0.7],
                extrapolate: 'clamp'
            })
        }
    }

    return (
        <>
            <Animated.View pointerEvents='none' style={[styles.outerContainer, { opacity: setBackgroundOpacity() }]} />
            <Animated.View style={[styles.container, { transform: [{ translateY: transY.current }] }]}>
                <View style={styles.innerContainer}>
                    <Pressable style={styles.closeModalBtn} onPress={onPress}>
                        <Text style={styles.text}>Close Modal</Text>
                    </Pressable>
                </View>
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.violet,
    },
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContainer: {
        width: '90%',
        height: '80%',
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    closeModalBtn: {
        height: 50,
        borderRadius: 10
    },
    text: {
        fontSize: 24,
        color: Colors.black,
        fontWeight: '700'
    },

})