// MongoDB collection names — single source of truth, so the collection name is
// not duplicated as a magic string across services and plugins.

export const OCR_REGISTRATION_COLLECTION = 'ocr-registration'
export const EMAIL_VERIFICATION_COLLECTION = 'email-verifications'
export const EMAIL_VERIFICATION_RATE_LIMIT_COLLECTION =
  'email-verification-rate-limits'
