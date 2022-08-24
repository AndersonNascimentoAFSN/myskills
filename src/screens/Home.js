import React, {useState} from 'react';
import uuid from 'react-native-uuid';

import {
  Text,
  View,
  Platform,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button/Button';
import Skills from '../components/Skills/Skills';

export function Home() {
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState([]);

  function handleAddSkill() {
    const isExistingSkill = skills.find(({name}) => name === skill.name);

    if (!isExistingSkill && !!skill) {
      setSkills(prevState => [...prevState, {id: uuid.v4(), name: skill}]);
    }
    setSkill('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Anderson Nascimento</Text>

      <View style={styles.spacing}>
        <TextInput
          style={styles.input}
          placeholder="New Skills"
          placeholderTextColor="#555"
          onChangeText={setSkill}
          value={skill}
        />
      </View>

      <Button title="Add" onAddSkills={handleAddSkill} />

      <View style={styles.containerSkills}>
        <Text style={[styles.title, styles.spacingSkills]}>My Skills</Text>

        {/* {skills.map(({id, name}) => (
          <TouchableOpacity style={styles.buttonSkill} key={id}>
            <Text style={[styles.title, styles.textSkill]}>{name}</Text>
          </TouchableOpacity>
        ))} */}

        <Skills skills={skills} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {color: '#ffff', fontSize: 18, fontWeight: 'bold'},
  input: {
    backgroundColor: '#1f1e25',
    color: '#ffff',
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  spacing: {marginBottom: 20},
  spacingSkills: {marginBottom: 10},
  containerSkills: {marginTop: 30},
});
