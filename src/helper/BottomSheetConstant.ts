export class BottomSheetConstant {
  static time = 500;
  static getAddressMenuList = () => {
    const arr = ['Delete'];
    return arr;
  };

  static callAfterBottomSheetTimeout = (callback: () => void) => {
    setTimeout(callback, this.time);
  };
}
