export type ContactFormData = {
  email: string;
  message: string;
};

export type ContactFormResponse = {
  success: boolean;
  message: string;
  timestamp?: string;
};

export type FormFieldError = {
  field: string;
  message: string;
};

export type FormValidationResult = {
  isValid: boolean;
  errors: FormFieldError[];
};
