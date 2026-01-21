import {ShowSnakeBar} from '../components/Snakebar';
import {Store} from '../store/store';

export class Helper {
  static log = (msg: string, data: any) => {
    if (__DEV__) {
      console.log(`----------${msg}========>>>`, JSON.stringify(data));
    }
  };

  static getId = (id: string) => {
    return `#${id}`;
  };

  static showToast = (msg = 'Hi', color = 'rgb(255, 50, 50)') => {
    //Console.log("🚀 ~ Helper ~ showToast= ~ msg:", msg)
    ShowSnakeBar(msg, color);
  };
  
  static formatDateTime =(dateStr) => {
  const date = new Date(dateStr);
  return `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`;
}


  static getInitials = (name: string | undefined) => {
    if (!name) return '';
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  };

  static getTextAvator = (name = '') => {
    let ava = '';
    if (String(name).includes(' ')) {
      const res = String(name).split(' ');
      if (res.length > 1) {
        ava = res[0].charAt(0);
        ava = ava + res[1].charAt(0);
      }
      if (res.length == 1) {
        ava = res[0].charAt(0);
      }
    }
    return ava;
  };

  static isEmpty = (value: any) => {
    return ['', '', null, undefined].includes(value);
  };

  static getOtp = () => {
    return Math.floor(1000 + Math.random() * 9000);
  };

  static addSpaceToUnit(text: string) {
    return text.replace(/(\d+)([a-zA-Z]+)/, '$1 $2');
  }

  static getUniqueId = () => {
    return Math.floor(10000000 + Math.random() * 90000000);
  };

  static hexToRgb = (hex: string, opacity = 1) => {
    hex = hex.replace(/^#/, '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity})`;
  };

  static getPrice = (price: number) => {
    const formattedPrice = new Intl.NumberFormat('en-BH', {
      style: 'currency',
      currency: 'BHD',
      minimumFractionDigits: 3,
    }).format(price);
    return formattedPrice;
  };
}
