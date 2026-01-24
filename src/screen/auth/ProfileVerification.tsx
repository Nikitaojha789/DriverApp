import React, { useState } from 'react'
import { DrivingLicense } from '../../components/Profile/DrivingLicense'
import { VehicalDocuments } from '../../components/Profile/VehicalDocuments'
import { BankDetails } from '../../components/Profile/BankDetails'
import { AppContainer } from '../../components/AppContainer'
import { ProfileHeader } from '../../components/ProfileHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { colors } from '../../constant/color'


const ProfileVerification = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1)

  const renderStep = () => {
    switch (step) {
      case 1:
        return <DrivingLicense onNext={() => setStep(2)} />
      case 2:
        return (
          <VehicalDocuments
            onNext={() => setStep(3)}
          />
        )
      case 3:
        return <BankDetails />
      default:
        return null
    }
  }

  return (
    <SafeAreaView style={{flex:1}}>
    <AppContainer>
      <ProfileHeader step={step} onBack={() => {
    if (step > 1) {
      setStep(prev => (prev - 1) as 1 | 2 | 3)
    }}}/>
      {renderStep()}
    </AppContainer>
    
    </SafeAreaView>
  )
}

export default ProfileVerification
