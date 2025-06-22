import React from 'react';
import { View, StyleSheet } from 'react-native';

const TabBar = () => {
  return (
    <View style={styles.tabBar}>
      <View style={[styles.tabDot, { backgroundColor: 'green' }]} />
      <View style={styles.tabDot} />
      <View style={styles.tabDot} />
      <View style={styles.tabDot} />
      <View style={styles.tabDot} />
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  tabDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ccc',
  },
});

export default TabBar;
