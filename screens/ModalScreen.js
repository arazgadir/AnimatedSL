import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { Modal } from '../components/Modal';
import { Colors } from '../theme';

export const ModalScreen = () => {

  const [visible, setVisible] = useState(false);

  const handleVisibleModal = () => {
    setVisible(true);
  }

  const handleClose = () => {
    setVisible(false);
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.openModalBtn} onPress={handleVisibleModal}>
        <Text style={styles.text}>Open Modal</Text>
      </Pressable>
      <Modal
        visible={visible}
        options={{ type: 'slide', from: 'bottom' }}
        duration={500}
        onClose={handleClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black
  },
  openModalBtn: {
   height: 50,
   borderRadius: 10
  },
  text: {
   fontSize: 24,
   color: Colors.violet,
   fontWeight: '700'
  }
});