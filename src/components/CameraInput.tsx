import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
} from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { AppText } from './AppHeading'
import { CameraIcon } from '../asset/icons/authIcon'
import { colors } from '../constant/color'

export const CameraInput = ({
  title,
  titleColor = '#000',
  titleFontSize = 14,
  titleFontFamily,
  onImagePicked,
  error,
  fileName,
}: any) => {
  const [visible, setVisible] = useState(false)
  const [image, setImage] = useState(false);

  const log = (...args: any[]) => {
    console.log('[CameraInput]', ...args)
  }

  const handleResponse = (result: any, source: 'camera' | 'gallery') => {
    log(`${source} result:`, result)

    if (result.didCancel) {
      log(`${source} cancelled by user`)
      return
    }

    if (result.errorCode) {
      console.error(
        `[CameraInput ERROR] ${source}`,
        result.errorCode,
        result.errorMessage,
      )
      return
    }

    const asset = result.assets?.[0]
    if (!asset?.uri) {
      console.warn(`${source} returned no image`)
      return
    }

    log(`${source} success`, {
      uri: asset.uri,
      fileName: asset.fileName,
      type: asset.type,
      size: asset.fileSize,
    })

onImagePicked?.({
  uri: asset.uri,
  fileName: asset.fileName || 'Selected image',
});
  }

  const openCamera = async () => {
    log('Opening camera')
    setVisible(false)
     

    try {
      const result = await launchCamera({
        mediaType: 'photo',
        quality: 0.7,
        saveToPhotos: true,
      })

      handleResponse(result, 'camera')
    } catch (err) {
      console.error('[CameraInput CRASH] camera', err)
    }
  }

  const openGallery = async () => {
    log('Opening gallery')
    setVisible(false)

    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.7,
        selectionLimit: 1,
      })

      handleResponse(result, 'gallery')
    } catch (err) {
      console.error('[CameraInput CRASH] gallery', err)
    }
  }


  return (
    <>
    {fileName? 
(
  <View style={styles.Imagecontainer}>
        <AppText
          title={fileName}
          color={titleColor}
          fontSize={titleFontSize}
          fontFamily={titleFontFamily}
        />
        </View>
      ):(
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={() => {
          log('CameraInput pressed')
          setVisible(true)
        }}
      >
        <CameraIcon />
        <AppText
          title={title}
          color={titleColor}
          fontSize={titleFontSize}
          fontFamily={titleFontFamily}
        />
      </TouchableOpacity>
     )  
      }
      {error ? (
  <AppText style={styles.errorText}
    title={error}/> 
    ) : null}


      <Modal
        transparent
        animationType="fade"
        visible={visible}
        onRequestClose={() => {
          log('Modal closed via back button')
          setVisible(false)
        }}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => {
            log('Modal dismissed by tapping outside')
            setVisible(false)
          }}
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
              onPress={() => {
                log('Modal cancelled manually')
                setVisible(false)
              }}
            >
              <Text style={[styles.optionText, { color: 'red' }]}>
                Cancel
              </Text>
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
  Imagecontainer:{
    borderWidth: 1,
    borderColor: '#8e8e8e47',
    padding: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
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
  errorText: {
  color: colors.red,
  fontSize: 12,
  textAlign: 'center',
},

})
