import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {color: '#ffff', fontSize: 18, fontWeight: 'bold'},
  greeting: {color: '#ffff'},
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
  listEmptyText: {
    color: '#FFFF',
    fontSize: 14,
    textAlign: 'center',
  },
});
