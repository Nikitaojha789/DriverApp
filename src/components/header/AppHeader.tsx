import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import {h, spacer} from '../../constant/dimension';
import {ScreenHeading} from '../AppHeading';
import {BackButton} from '../button/BackButton';
import {Spacer} from '../Spacer';

interface appHeaderProps {
  title?: string;
  hideBack?: boolean;
  backPress?: Function;
  rightElement?: ReactNode;
}

export const AppHeader = ({
  title = '',
  hideBack = false,
  backPress,
  rightElement,
}: appHeaderProps) => {
  return (
    <View style={[styles.container]}>
      <Spacer size={h(0.6)} />
      <ScreenHeading title={title} />

      {!hideBack ? (
        <View
          style={{
            position: 'absolute',
            left: 0,
            zIndex:1000,
          }}>
          <BackButton onPress={backPress} />
        </View>
      ) : null}

      {rightElement ? (
        <View
          style={{
            position: 'absolute',
            right: spacer,
          }}>
          {rightElement}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: spacer,
    // marginTop: h(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
