import React from 'react';
import {View, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import { colors } from '../../constant/color';
import { AppText } from '../AppHeading';
import { h } from '../../constant/dimension';
import { fontSize } from '../../asset/style/commonStyle';
import { fonts } from '../../asset';


type TransactionItemProps = {
  title: string;
  subtitle?: string;
  amount: string;
  textColor?:string;
  date?: string;
  status?: 'completed' | 'processing';
  amountColor?: string;
  onPress?: () => void;
  marginBottom?:number;
  amountSize?:number;
  amountFamily?:string;
  textSize?:number,
  textFamily?:string,
};

export const TransactionItem = ({
  title,
  subtitle,
  amount,
  date,
  amountColor = colors.primary,
  textColor = colors.InactiveButtonColor,
  onPress,
  marginBottom= h(1),
  amountSize = fontSize.normal,
  amountFamily = fonts.semiBold,
  textSize = fontSize.normal,
  textFamily = fonts.regular
}: TransactionItemProps) => {
  return (
    <TouchableOpacity style={[styles.itemContainer,{marginBottom:marginBottom}]} onPress={onPress}>
      
      <View style={styles.left}>
        
        <AppText title={title} fontSize={textSize} fontFamily={textFamily} color={textColor}/>
        {/* <AppText
          title={subtitle}
          fontSize={13}
          color={colors.Grey}
          style={{ marginTop: 4 }}
        /> */}
      </View>
      <View style={styles.middle}>
        <AppText
          title={amount}
          fontSize={amountSize}
          fontFamily={amountFamily}
          color={amountColor}
          style={{ textAlign: 'right' }}
        />
        {/* <AppText
          title={date}
          fontSize={12}
          color={colors.Grey}
          style={{ marginTop: 4 }}
        /> */}
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: h(0.2),
    borderRadius: 12,
    //  backgroundColor: "#1d283a4d",
  },

  left: {
    flex: 1,
  },

  right: {
    alignItems: 'flex-end',
  },
   middle: {
    alignItems: 'flex-end',
    marginRight: 12,
  },
});
