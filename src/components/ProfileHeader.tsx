import { View } from "react-native";
import { AppContainer } from "./AppContainer";
import { AppText } from "./AppHeading";
import { fonts } from "../asset";
import { fontSize } from "../asset/style/commonStyle";
import { colors } from "../constant/color";
import { AppButton } from "./button/AppButton";

type Step = 1 | 2 | 3;


type Props = {
  step: Step,
}

 const titles: Record<Step, string> = {
  1: 'step 1 of 3',
  2: 'step 2 of 3',
  3: 'step 3 of 3',
}
export const ProfileHeader = ({ step }: Props) => {


  return (
    <View style={{marginTop:50}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
        <View>
      <AppText title="Profile Setup" fontFamily={fonts.semiBold}
       fontSize={fontSize.veryLarge} color={colors.textColor}
       />
        <AppText title={titles[step]} color="red"/>
        </View>
        <View style={{alignSelf:'center'}}>
       <AppButton title="Back" variant="text"/>
       </View>
       </View>
           
    </View>
  )
}
