import { View, Text, Button } from 'react-native'
import React from 'react'
import { AppContainer } from '../AppContainer'
import { ProfileHeader } from '../ProfileHeader'
import { AppButton } from '../button/AppButton'

type Props = {
  onBack: () => void
    onNext: () => void
}


export const VehicalDocuments = ({ onNext, onBack }: Props) => {
  return (
    <View>
      <AppButton title="Back" onPress={onBack} variant='text'/>
      <AppButton title="Continue" onPress={onNext} variant='text'/>
    </View>
  )
}
