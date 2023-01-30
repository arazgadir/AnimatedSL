import { useNavigation } from '@react-navigation/native'
import React, { useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable, Animated, Dimensions } from 'react-native'
import { Colors } from '../theme';

export const HomeScreen = () => {

    const moveAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation()

    useEffect(() => {
        Animated.sequence([
            Animated.timing(moveAnim, {
                duration: 2000,
                toValue: Dimensions.get('window').width / 1.6,
                delay: 0,
                useNativeDriver: false,
            }),
            Animated.timing(moveAnim, {
                duration: 2000,
                toValue: 0,
                delay: 0,
                useNativeDriver: false,
            }),
        ]).start();
        Animated.timing(fadeAnim, {
            duration: 2000,
            toValue: 1,
            delay: 2000,
            useNativeDriver: false,
        }).start();
    }, [moveAnim, fadeAnim]);

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.home}>
                    <Animated.View style={[styles.logoContainer, { marginLeft: moveAnim }]}>
                        <Text style={[styles.logoText]}>H</Text>
                        <Animated.Text style={[styles.logoText, { opacity: fadeAnim }]}>
                            ome
                        </Animated.Text>
                    </Animated.View>
                    <Animated.View style={[styles.logoContainer, { marginLeft: moveAnim }]}>
                        <Text style={[styles.logoText]}>S</Text>
                        <Animated.Text style={[styles.logoText, { opacity: fadeAnim }]}>
                            creen
                        </Animated.Text>
                    </Animated.View>
                </View>
                <Animated.View style={{ marginLeft: moveAnim, }}>
                    <Animated.View style={[styles.buttonsView, { opacity: fadeAnim }]}>

                        <Pressable style={styles.button} onPress={() => navigation.navigate('SwitchScreen')}>
                            <Text style={styles.btnText}>go to Switch</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => navigation.navigate('ModalScreen')}>
                            <Text style={styles.btnText}>go to Modal</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => navigation.navigate('ProductList')}>
                            <Text style={styles.btnText}>go to product</Text>
                        </Pressable>
                    </Animated.View >

                </Animated.View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkBlue,
    },
    contentContainer: {
        top: '30%',
        alignItems: 'center',
    },
    home: {
        marginVertical: 50
    },
    text: {
        fontSize: 82,
        fontWeight: '800'
    },
    logoContainer: {
        flexDirection: 'row',
    },
    logoText: {
        fontSize: 65,
        marginTop: 20,
        color: Colors.white,
        fontWeight: '700',
    },
    button: {
        height: 40,
        backgroundColor: Colors.red,
        width: 150,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    buttonsView: {
        position: 'absolute',
    },
    btnText: {
        fontSize: 18
    }
});