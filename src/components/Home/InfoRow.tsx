import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../constant/color';
import { fontSize } from '../../asset/style/commonStyle';
import { w } from '../../constant/dimension';
import { fonts } from '../../asset';
import { AppText } from '../AppHeading';
import { LocationIcon } from '../../asset/icons/HomeIcon';

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  title: string;
  subtitle?: string;
  containerStyle?: ViewStyle;
  bgColor:string,
}

export const InfoRow = ({
  icon,
  label,
  title,
  subtitle,
  containerStyle,
  bgColor = '#1e88e536',
}: InfoRowProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.iconWrapper,{backgroundColor:bgColor}]}>{icon}</View>

      <View style={styles.textContainer}>
        <AppText style={styles.label} title={label}/>
        <AppText style={styles.title} title={title}/>
        {subtitle && <AppText style={styles.subtitle} title={subtitle}/>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconWrapper: {
    // width: w(10),
    // height: w(10),
    padding:8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: w(3),
    // backgroundColor:'#1e88e536'
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: fontSize.small,
    fontFamily: fonts.regular,
    color: colors.textColor,
    marginBottom: w(0.5),
  },
  title: {
    fontSize: fontSize.default,
    fontFamily: fonts.semiBold,
    color: colors.textColor,
  },
  subtitle: {
    fontSize: fontSize.normal,
    fontFamily: fonts.regular,
    color: colors.InactiveButtonColor,
    marginTop: w(0.5),
  },
});
