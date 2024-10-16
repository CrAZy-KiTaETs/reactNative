import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

const sections = [
  { title: 'Fruit', items: ['Apple', 'Orange', 'Banana'] },
  { title: 'Vegetables', items: ['Cucumber', 'Carrot', 'Potato'] },
];

export default function Appd() {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );

  return (
    <SectionList
      sections={sections}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={(item, index) => item + index}
      getItem={(section, index) => section.items[index]}
      getItemCount={section => section.items.length}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
  headerContainer: {
    padding: 5,
    backgroundColor: '#eee',
  },
  headerText: {
    fontWeight: 'bold',
  },
});
