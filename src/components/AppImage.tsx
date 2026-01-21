import React, { useCallback, useState } from 'react';
import { Image, ImageProps, StyleProp, View, ViewStyle } from 'react-native';
import { colors } from '../constant/color';

interface appImageProp {
  url: string | number;
  containerStyle: StyleProp<ViewStyle>;
  resizeMode?: string;
  islocal?: boolean;
}
export const AppImage = ({
  url,
  containerStyle,
  resizeMode,
  islocal = false,
}: appImageProp) => {
  const [data, setData] = useState({
    loading: false,
  });

  const isRemote = typeof url === 'string';
  const imageSource = isRemote ? { uri: url } : url;

  return (
    <View style={containerStyle}>
      {url ? (
        <Image
          source={imageSource}
          style={{ width: '100%', height: '100%' }}
          resizeMode={resizeMode as ImageProps['resizeMode']}
        />
      ) : null}

      {data.loading ? (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: colors.placeholder,
          }}
        />
      ) : null}
    </View>
  );
};
