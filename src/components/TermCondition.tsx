import React, {useCallback} from 'react';
import {View, Text, Linking} from 'react-native';
import {AppText} from './AppHeading';
import {colors} from '../constant/color';
import {AppCheckboxButton} from './AppCheckboxButton';
import {IconButton} from './button/IconButton';
// import {privacy_policy, term_and_condition} from '../api/baseUrl';

export const TermConditionPrivacyPolicyText = ({
  privacyAccepted = false,
  onPress = () => {},
}) => {
  const onTermPress = useCallback(() => {
    try {
      Linking.openURL("term_and_condition");
    } catch (error) {}
  }, []);

  const onPrivacyPress = useCallback(() => {
    try {
      Linking.openURL("privacy_policy");
    } catch (error) {}
  }, []);

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 5,
        //alignItems: 'center'
      }}>
      <View style={{top: 1}}>
        <IconButton onPress={onPress}>
          <AppCheckboxButton isSelected={privacyAccepted} />
        </IconButton>
      </View>

      <Text style={{lineHeight: 20}}>
        <AppText title="By continue you agree to our " />
        <AppText
          title="Term & Condition "
          color={colors.secondary}
          fontWeight="bold"
          onPress={onTermPress}
        />
        <AppText title="and " />
        <AppText
          title="Privacy Policy"
          color={colors.secondary}
          fontWeight="bold"
          onPress={onPrivacyPress}
        />
      </Text>
    </View>
  );
};
