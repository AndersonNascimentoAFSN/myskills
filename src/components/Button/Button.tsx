import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {styles} from './styles';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest}: IButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
