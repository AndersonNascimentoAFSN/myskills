import React from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export default function SkillsCards({skills}) {
  return (
    <>
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {skills.map(({id, name}) => (
          <TouchableOpacity style={styles.buttonSkill} key={id}>
            <Text style={[styles.title, styles.textSkill]}>{name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView> */}

      <FlatList
        data={skills}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Your list is empty. Add skills to your list.
          </Text>
        )}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.buttonSkill}>
            <Text style={[styles.title, styles.textSkill]}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
}
