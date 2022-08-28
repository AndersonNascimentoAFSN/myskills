import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 7,
    alignItems: 'center',
  },
  buttonText: {color: '#ffffff', fontWeight: 'bold', fontSize: 17},
});
