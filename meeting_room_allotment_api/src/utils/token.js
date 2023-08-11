import crypto from 'crypto';

/**
 * Generate a Random Token
 * @return {String}
 */
export function generateKey() {
  return crypto.randomBytes(20).toString('hex');
}
