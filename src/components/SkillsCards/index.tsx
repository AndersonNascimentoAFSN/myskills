import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {styles} from './styles';

interface ISkillsCardsProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillsCards({skill, ...rest}: ISkillsCardsProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={[styles.textSkill]}>{skill}</Text>
    </TouchableOpacity>
  );
}
