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
            Não há skills? Adicione skills a sua lista de habilidades.
          </Text>
        )}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.buttonSkill} key={item.id}>
            <Text style={[styles.title, styles.textSkill]}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
}
