import { StyleSheet, View } from "react-native"
import { AppText } from "../AppHeading"
import { colors } from "../../constant/color"
import { fonts } from "../../asset"
import { fontSize } from "../../asset/style/commonStyle"
import { w } from "../../constant/dimension"

type PayOutCardProps = {
  icon: React.ReactNode
  iconBg?: string
  value: string
  label: string
  Payment:string
  paymentColor?:string
}

export const PayOutCard = ({ icon, iconBg = colors.white, value, label,Payment ,paymentColor = colors.textColor}: PayOutCardProps) => {
  return (
    <View style={styles.card}>
      <View style={[styles.iconWrap, { backgroundColor: iconBg }]}>
        {icon}
      </View>
    <View>
      <AppText title={value} style={styles.value} />
      <AppText title={label} style={styles.label} />
</View>
<View style={styles.paymentWrapper}>
<AppText title={Payment} style={[styles.payment,{color:paymentColor}]} />
</View>
    </View>
  )
}
const styles = StyleSheet.create({
     card: {
    backgroundColor: colors.white,
    flexDirection:'row',
    borderRadius: 16,
    padding: 10,
    // marginBottom:2,
    flex:1,
    gap:10,
  },
  iconWrap: {
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  value: {
    fontFamily: fonts.medium,
    fontSize: fontSize.normal,
    color: colors.textColor,
   lineHeight: fontSize.normal + 4 ,
  }, 
  label: {
    fontFamily: fonts.regular,
    fontSize: fontSize.small,
    color: colors.InactiveButtonColor,
    marginTop: 2,
  },
  paymentWrapper:{
//   justifyContent:'flex-end',
marginLeft:w(32),
  justifyContent: 'center',
  },
  payment: {
    fontFamily: fonts.semiBold,
    fontSize: fontSize.default,
    // textAlign:'right',
    marginTop: 2,
  },
})