import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export function Button({title, onAddSkills}) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.5}
      onPress={onAddSkills}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
