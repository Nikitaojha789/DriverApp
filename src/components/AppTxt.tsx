import React from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';

export interface AppTxtProps {
  title: string;
  style?: TextStyle;
  center?: boolean;
}

export const AppTxt: React.FC<AppTxtProps> = ({ title, style, center }) => {
  return (
    <Text style={[styles.text, center && styles.center, style]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
  center: {
    textAlign: 'center',
  },
});