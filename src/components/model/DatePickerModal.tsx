import React from 'react';
import {View, Text, Modal, Pressable, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {fonts} from '../../asset';
import {colors} from '../../constant/color';

interface DatePickerModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectDate: (date: string) => void;
  selectedDate: string;
  title?: string;
  maxDate?: any;
}
interface Day {
  dateString: string;
  year: number;
  month: number;
  day: number;
}

const DatePickerModal: React.FC<DatePickerModalProps> = ({
  visible,
  onClose,
  onSelectDate,
  selectedDate,
  title = 'Select Date',
  maxDate
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>

          <Calendar
            maxDate={maxDate}
            onDayPress={(day: Day) => {
              onSelectDate(day.dateString);
              onClose();
            }}
            markedDates={{
              [selectedDate]: {selected: true, selectedColor: colors.closebtnBgcolor},
            }}
          />

          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.overlayBgcolor,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.medium,
    marginBottom: 10,
    textAlign: 'center',
    color: colors.textColor,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: colors.closebtnBgcolor,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  closeText: {
    color: colors.white,
    fontFamily: fonts.medium,
  },
});

export default DatePickerModal;
