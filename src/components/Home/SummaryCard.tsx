import { StyleSheet, View } from "react-native"
import { AppText } from "../AppHeading"
import { colors } from "../../constant/color"
import { fonts } from "../../asset"
import { fontSize } from "../../asset/style/commonStyle"

type CardProps = {
  icon: React.ReactNode
  iconBg: string
  value: string
  label: string
}

export const SummaryCard = ({ icon, iconBg, value, label }: CardProps) => {
  return (
    <View style={styles.card}>
      <View style={[styles.iconWrap, { backgroundColor: iconBg }]}>
        {icon}
      </View>

      <AppText title={value} style={styles.value} />
      <AppText title={label} style={styles.label} />
    </View>
  )
}
const styles = StyleSheet.create({
     card: {
    width: '48%',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
     shadowColor: '#74747463',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.14,
    shadowRadius: 2,
    // // Android shadow
    elevation:4,
    borderWidth:1,
    borderColor:'#adabab0f'
  },
  iconWrap: {
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  value: {
    fontFamily: fonts.bold,
    fontSize: fontSize.largeMedium,
    color: colors.black,
   lineHeight: fontSize.normal + 4 ,
  },
  label: {
    fontFamily: fonts.regular,
    fontSize: fontSize.normal,
    color: colors.textColor,
    marginTop: 2,
  },
})