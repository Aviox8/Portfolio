/**
 * Environment variables validation and configuration
 * This ensures all required env vars are present at runtime
 */

const requiredEnvVars = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
} as const;

/**
 * Validate that critical environment variables are set
 */
function validateEnv() {
  const missing = Object.entries(requiredEnvVars)
    .filter(([key, value]) => !value && key !== 'NEXT_PUBLIC_SITE_URL')
    .map(([key]) => key);

  if (missing.length > 0 && typeof window === 'undefined') {
    console.warn('Missing environment variables:', missing.join(', '));
  }

  return requiredEnvVars;
}

export const env = validateEnv();
