'use client';

import { useCallback, useState } from 'react';

interface FormSubmitOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
  resetTimeout?: number;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormState {
  status: FormStatus;
  error: string;
}

export function useFormSubmit(options: FormSubmitOptions = {}) {
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    error: '',
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (formData: Record<string, string>): string | null => {
    if (!formData.name?.trim()) {
      return 'Name is required';
    }
    if (!formData.email?.trim()) {
      return 'Email is required';
    }
    if (!validateEmail(formData.email)) {
      return 'Please enter a valid email';
    }
    if (!formData.message?.trim()) {
      return 'Message is required';
    }
    if (formData.message.trim().length < 10) {
      return 'Message must be at least 10 characters';
    }
    return null;
  };

  const reset = useCallback(() => {
    setFormState({ status: 'idle', error: '' });
  }, []);

  const submit = useCallback(
    async (formData: Record<string, string>) => {
      // Validate form
      const validationError = validateForm(formData);
      if (validationError) {
        setFormState({ status: 'error', error: validationError });
        options.onError?.(validationError);
        return;
      }

      setFormState({ status: 'loading', error: '' });

      try {
        // Your submission logic will go here
        // This is a placeholder for actual submission
        
        setFormState({ status: 'success', error: '' });
        options.onSuccess?.();

        setTimeout(
          () => reset(),
          options.resetTimeout ?? 5000
        );
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Submission failed. Please try again.';
        setFormState({ status: 'error', error: message });
        options.onError?.(message);
      }
    },
    [options, reset]
  );

  return {
    ...formState,
    submit,
    reset,
    isLoading: formState.status === 'loading',
    isSuccess: formState.status === 'success',
    isError: formState.status === 'error',
  };
}
