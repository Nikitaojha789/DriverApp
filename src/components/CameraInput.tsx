import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  Alert,
} from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { AppText } from './AppHeading'
import { CameraIcon } from '../asset/icons/authIcon'
import { colors } from '../constant/color'

type Props = {
  title: string
  titleColor?: string
  titleFontSize?: number
  titleFontFamily?: string
  onImagePicked?: (uri: string) => void
}

export const CameraInput = ({
  title,
  titleColor = '#000',
  titleFontSize = 14,
  titleFontFamily,
  onImagePicked,
}: Props) => {
  const [visible, setVisible] = useState(false)

  const openCamera = async () => {
    setVisible(false)
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 0.7,
      saveToPhotos: true,
    })

    if (!result.didCancel && result.assets?.[0]?.uri) {
      onImagePicked?.(result.assets[0].uri)
    }
  }

  const openGallery = async () => {
    setVisible(false)
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.7,
      selectionLimit: 1,
    })

    if (!result.didCancel && result.assets?.[0]?.uri) {
      onImagePicked?.(result.assets[0].uri)
    }
  }

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={() => setVisible(true)}
      >
        <CameraIcon />
        <AppText
          title={title}
          color={titleColor}
          fontSize={titleFontSize}
          fontFamily={titleFontFamily}
        />
      </TouchableOpacity>

      {/* MODAL */}
      <Modal
        transparent
        animationType="fade"
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setVisible(false)}
        >
          <View style={styles.modal}>
            <TouchableOpacity style={styles.option} onPress={openCamera}>
              <Text style={styles.optionText}>Open Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={openGallery}>
              <Text style={styles.optionText}>Choose from Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.option, styles.cancel]}
              onPress={() => setVisible(false)}
            >
              <Text style={[styles.optionText, { color: 'red' }]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#8e8e8e47',
    padding: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  overlay: {
    flex: 1,
    backgroundColor: '#00000060',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 12,
    paddingVertical: 8,
  },
  option: {
    padding: 16,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  cancel: {
    borderTopWidth: 1,
    borderColor: '#eee',
  },
})
