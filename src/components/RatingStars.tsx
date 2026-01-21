import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {FullStart, UnFillStar} from '../asset/icons/icons';

type RatingStarsProps = {
  rating?: number; // initial rating
  size?: number;
  editable?: boolean;
  onChange?: (rating: number) => void;
};

const RatingStars: React.FC<RatingStarsProps> = ({
  rating = 0,
  size = 13,
  editable = false,
  onChange,
}) => {
  const [currentRating, setCurrentRating] = useState(rating);

  const handlePress = (index: number) => {
    if (!editable) return;

    const newRating = index + 1;
    setCurrentRating(newRating);
    onChange?.(newRating);
  };

  const stars = [];

  for (let i = 0; i < 5; i++) {
    const isFilled = currentRating >= i + 1;
    stars.push(
      <TouchableOpacity
        key={i}
        onPress={() => handlePress(i)}
        activeOpacity={0.7}>
        {isFilled ? <FullStart size={size} /> : <UnFillStar size={size} />}
      </TouchableOpacity>,
    );
  }

  return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RatingStars;
