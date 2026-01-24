import { View, Text, Button } from 'react-native'
import React from 'react'
import { AppButton } from '../button/AppButton'

type Props = {
  onNext: () => void
}
export const DrivingLicense = ({ onNext }: Props) => {
  return (
    <View>
      <AppButton title="Continue" onPress={onNext} variant='text'/>
    </View>
  )
}

