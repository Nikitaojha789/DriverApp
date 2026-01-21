import moment from 'moment';
import {Helper} from './Helper';

export class TimeHelper {
  static getDateAndTimeFromObj = (obj: string) => {
    return moment(obj).format('DD-MMM-YYYY, hh: mm A');
  };

  static getDeliveryDateAndTime = (dateTime: string) => {
    Helper.log('dateTime', {
      dateTime,
      split: dateTime.split(' '),
    });
    const format = 'YYYY-MM-DD_hh:mm A - hh:mm A';
    if (moment(dateTime, format, true).isValid()) {
      const [datePart, timePart] = dateTime.split('_');
      const formattedDate = moment(datePart, 'YYYY-MM-DD').format(
        'DD-MMM-YYYY',
      );
      return `${formattedDate}, ${timePart}`;
    } else {
      return dateTime;
    }
  };

  static getDeliverySlots = (dateObj: any) => {
    const slots = [
      '08:00 AM - 10:00 AM',
      '10:00 AM - 12:00 PM',
      '12:00 PM - 02:00 PM',
      '02:00 PM - 04:00 PM',
      '04:00 PM - 06:00 PM',
    ];

    const selectedDate = moment(dateObj);
    const currentTime = moment();

    const availableSlots = slots.filter(slot => {
      const [startTime] = slot.split(' - ');
      const slotTime = moment(
        `${selectedDate.format('YYYY-MM-DD')} ${startTime}`,
        'YYYY-MM-DD hh:mm A',
      );

      // Check if selected date is today and slot time is after the current time, or if it's a future date
      return (
        selectedDate.isAfter(currentTime, 'day') ||
        (selectedDate.isSame(currentTime, 'day') &&
          slotTime.isAfter(currentTime))
      );
    });

    return availableSlots;
  };
}
