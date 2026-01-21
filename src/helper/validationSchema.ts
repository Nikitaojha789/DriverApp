import * as yup from 'yup';

export const loginSchema = yup.object({
  phoneNumber: yup
    .string()
    .trim()
    .matches(/^[0-9]+$/, 'Phone number must be digits only')
    .min(10, 'Phone number must be at least 10 digits')
    .max(10, 'Phone number must be 10 digits')
    .required('Phone number is required'),
});

export const otpSchema = yup.object({
  otp: yup
    .string()
    .trim()
    .matches(/^[0-9]+$/, 'OTP must be digits only')
    .length(6, 'OTP must be 6 digits')
    .required('OTP is required'),
});

export const personalDetailsSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name must not exceed 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Full name must contain only letters and spaces')
    .required('Full name is required'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email address is required'),
});

export const addressDetailsSchema = yup.object({
  companyGstNumber: yup
    .string()
    .trim()
    .min(15, 'GST number must be at least 15 characters')
    .max(15, 'GST number must be exactly 15 characters')
    .matches(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      'Please enter a valid GST number (e.g., 27AAAAA0000A1Z5)',
    )
    .required('Company GST Number is required'),
  companyAddress: yup
    .string()
    .trim()
    .min(10, 'Company address must be at least 10 characters')
    .max(200, 'Company address must not exceed 200 characters')
    .required('Company address is required'),
  city: yup
    .string()
    .trim()
    .min(2, 'City must be at least 2 characters')
    .max(50, 'City must not exceed 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'City must contain only letters and spaces')
    .required('City is required'),
  state: yup
    .string()
    .trim()
    .min(2, 'State must be at least 2 characters')
    .max(50, 'State must not exceed 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'State must contain only letters and spaces')
    .required('State is required'),
  pincode: yup
    .string()
    .trim()
    .matches(/^[0-9]{6}$/, 'Pincode must be exactly 6 digits')
    .required('Pincode is required'),
});

export const onboardingFormSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name must not exceed 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Full name must contain only letters and spaces')
    .required('Full name is required'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email address is required'),
  companyGstNumber: yup
    .string()
    .trim()
    .min(15, 'GST number must be at least 15 characters')
    .max(15, 'GST number must be exactly 15 characters')
    .matches(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      'Please enter a valid GST number (e.g., 27AAAAA0000A1Z5)',
    )
    .required('Company GST Number is required'),
  companyAddress: yup
    .string()
    .trim()
    .min(10, 'Company address must be at least 10 characters')
    .max(200, 'Company address must not exceed 200 characters')
    .required('Company address is required'),
  city: yup
    .string()
    .trim()
    .min(2, 'City must be at least 2 characters')
    .max(50, 'City must not exceed 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'City must contain only letters and spaces')
    .required('City is required'),
  state: yup
    .string()
    .trim()
    .min(2, 'State must be at least 2 characters')
    .max(50, 'State must not exceed 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'State must contain only letters and spaces')
    .required('State is required'),
  pincode: yup
    .string()
    .trim()
    .matches(/^[0-9]{6}$/, 'Pincode must be exactly 6 digits')
    .required('Pincode is required'),
});

export const solarSystemDetailsSchema = yup.object({
  systemCapacity: yup
    .string()
    .trim()
    .matches(/^[0-9]+(\.[0-9]+)?\s*(kW|kw|KW)?$/, 'Please enter a valid capacity (e.g., 5 kW, 10 kW)')
    .required('System Capacity is required'),
  installationYear: yup
    .string()
    .trim()
    .matches(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/, 'Please enter date in dd-mm-yyyy format (e.g., 15-03-2024)')
    .test('valid-date', 'Please enter a valid date', function(value) {
      if (!value) return true;
      const [day, month, year] = value.split('-').map(Number);
      const date = new Date(year, month - 1, day);
      return (
        date.getDate() === day &&
        date.getMonth() === month - 1 &&
        date.getFullYear() === year
      );
    })
    .required('Installation Year is required'),
  installationLocation: yup
    .string()
    .trim()
    .min(2, 'Installation location must be at least 2 characters')
    .max(100, 'Installation location must not exceed 100 characters')
    .required('Installation Location is required'),
  inverterBrand: yup
    .string()
    .trim()
    .min(2, 'Inverter brand must be at least 2 characters')
    .max(100, 'Inverter brand must not exceed 100 characters')
    .required('Inverter Brand is required'),
  panelBrand: yup
    .string()
    .trim()
    .min(2, 'Panel brand must be at least 2 characters')
    .max(100, 'Panel brand must not exceed 100 characters')
    .required('Panel Brand is required'),
});
