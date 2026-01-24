import { View } from "react-native";
import { AppText } from "./AppHeading";
import { fonts } from "../asset";
import { fontSize } from "../asset/style/commonStyle";
import { colors } from "../constant/color";
import { AppButton } from "./button/AppButton";
import { ProfileProgress } from "./Profile/ProfileProgress";

type Step = 1 | 2 | 3;

type Props = {
  step: Step,
  onBack: () => void,
}

 const titles: Record<Step, string> = {
  1: 'Step 1 of 3',
  2: 'Step 2 of 3',
  3: 'Step 3 of 3',
}
export const ProfileHeader = ({ step ,onBack}: Props) => {


  return (
    <View style={{marginTop:30}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
        <View style={{alignSelf:'center'}}>
      <AppText title="Profile Setup" fontFamily={fonts.semiBold}
       fontSize={fontSize.veryLarge} color={colors.textColor}
       />
        <AppText title={titles[step]} color={colors.InactiveButtonColor} fontSize={fontSize.small} fontFamily={fonts.medium}/>
        </View>
        <View style={{alignSelf:'center'}}>
      {step > 1 && (
  <AppButton
    title="Back"
    variant="text"
    fontfamily={fonts.semiBold}
    fontsize={fontSize.default}
    color={colors.purple}
    onPress={onBack}
  />
)}
       </View>
       </View>
                 <ProfileProgress step={step} />

    </View>
  )
}
