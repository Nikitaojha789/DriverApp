export class Validator {
  static emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  static numberExpression = /^\d+$/;
  static nameExpression = /^[a-zA-ZÀ-ÖØ-öø-ÿ '-]+$/;
  static passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  static validateEmail = (email: string) => {
    if (email) {
      return this.emailExpression.test(email);
    }
    return false;
  };

  static validateNumber = (value: string) => {
    return this.numberExpression.test(value);
  };

  static validateMobileNumber = (value: string) => {
    if (this.numberExpression.test(value)) {
      return String(value).length == 8;
    }
    return false;
  };

  static validateName = (name: string): boolean => {
    if (name) {
      return this.nameExpression.test(name);
    }
    return false;
  };

  static validateNameLength = (name: string): boolean => {
    if (name) {
      return String(name).length <= 100;
    }
    return false;
  };

  // Validate if the provided password matches the password regular expression.
  static validatePassword = (password: string): boolean => {
    if (password) {
      return this.passwordRegex.test(password);
    }
    return false;
  };

  static removeCountryCode(number: string, countryCode = '973') {
    if (number) {
      const regex = new RegExp('^' + countryCode);
      return number.replace(regex, '');
    }
    return '';
  }
}
