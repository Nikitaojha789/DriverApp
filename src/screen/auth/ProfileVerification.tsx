import React, { useState } from 'react'
import { DrivingLicense } from '../../components/Profile/DrivingLicense'
import { VehicalDocuments } from '../../components/Profile/VehicalDocuments'
import { BankDetails } from '../../components/Profile/BankDetails'
import { AppContainer } from '../../components/AppContainer'
import { ProfileHeader } from '../../components/ProfileHeader'


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
            onBack={() => setStep(1)}
          />
        )
      case 3:
        return <BankDetails onBack={() => setStep(2)} />
      default:
        return null
    }
  }

  return (
    <AppContainer>
      <ProfileHeader step={step} />
      {renderStep()}
    </AppContainer>
  )
}

export default ProfileVerification
