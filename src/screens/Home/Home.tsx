import React, {useEffect, useState} from 'react';

import {Text, View, TextInput, SafeAreaView, FlatList} from 'react-native';
import {Button} from '../../components/Button/Button';
import {SkillsCards} from '../../components/SkillsCards';
import {styles} from './styles';

type skill = {
  id: number;
  name: string;
};

export function Home() {
  const [skill, setSkill] = useState<string>('');
  const [skills, setSkills] = useState<skill[]>([]);
  const [greeting, setGreeting] = useState<string>('');

  function generateSkillsId(array: skill[]) {
    const newId = array[array.length - 1]?.id + 1 || 1;
    return newId;
  }

  function handleAddSkill() {
    const isExistingSkill = skills.find(({name}) => name === skill);

    const newSkill = {id: generateSkillsId(skills), name: skill};

    if (!isExistingSkill && !!skill) {
      setSkills(prevState => [...prevState, newSkill]);
    }
    setSkill('');
  }

  function handleRemoveSkill(id: number) {
    setSkills(prevState => prevState.filter(item => item.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    switch (true) {
      case currentHour < 12:
        return setGreeting('Good Morning');
      case currentHour >= 12 && currentHour < 18:
        return setGreeting('Good Afternoon');
      case currentHour > 18:
        return setGreeting('Good Night');
      default:
        '';
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Anderson Nascimento</Text>

      <Text style={styles.greeting}>{greeting}</Text>

      <View style={styles.spacing}>
        <TextInput
          style={styles.input}
          placeholder="New Skills"
          placeholderTextColor="#555"
          onChangeText={setSkill}
          value={skill}
        />
      </View>

      <Button title="Add" onPress={handleAddSkill} />

      <View style={styles.containerSkills}>
        <Text style={[styles.title, styles.spacingSkills]}>My Skills</Text>

        {/* <ScrollView showsVerticalScrollIndicator={false}>
        {skills.map(({id, name}) => (
          <TouchableOpacity style={styles.buttonSkill} key={id}>
            <Text style={[styles.title, styles.textSkill]}>{name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView> */}
        <FlatList
          data={skills}
          // keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Your list is empty. Add skills to your list.
            </Text>
          )}
          renderItem={({item}) => (
            <SkillsCards
              skill={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
