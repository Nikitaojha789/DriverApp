import { View, Text } from 'react-native'
import React from 'react'
import { AppContainer } from '../AppContainer'
import { ProfileHeader } from '../ProfileHeader'
import { AppButton } from '../button/AppButton'

type Props = {
  onBack: () => void
}

export const BankDetails = ({ onBack }: Props) => {
  return (
    <View>
      <AppButton title="Back" onPress={onBack} variant='text'/>
    </View>
  )
}
