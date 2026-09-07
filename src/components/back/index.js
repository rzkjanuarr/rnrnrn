import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { goBack } from '../navigation/navigationRef';
import { useNavigation } from '@react-navigation/native';

const BackFABComponent = () => {
  const nav = useNavigation();
  if (!nav.canGoBack()) return null;
  return (
    <TouchableOpacity style={styles.fab} onPress={() => nav.goBack()}>
      <ChevronLeft size={22} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default BackFABComponent;
