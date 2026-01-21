import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HowToUseTheApp from '../../screen/profile/HowToUseTheApp';
import {colors} from '../../constant/color';
import {h, w} from '../../constant/dimension';

interface AppUseModalProps {
  visible: boolean;
  onClose: () => void;
}

const AppUseModal: React.FC<AppUseModalProps> = ({visible, onClose}) => {
  const insets = useSafeAreaInsets();
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      statusBarTranslucent>
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.closeButton,
            {top: Platform.select({ios: insets.top, android: insets.top})},
          ]}
          onPress={onClose}
          activeOpacity={0.8}>
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>
        <HowToUseTheApp showHeader={false} />
      </View>
    </Modal>
  );
};

export default AppUseModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  closeButton: {
    position: 'absolute',
    top: Platform.select({ios: h(2), android: h(4)}),
    right: w(3),
    zIndex: 10,
    width: w(10),
    height: w(10),
    borderRadius: w(5),
    // backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    color: colors.white,
    fontSize: w(5),
  },
});

