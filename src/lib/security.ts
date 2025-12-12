/**
 * Security Utilities
 * Helper functions for security-related operations
 */

/**
 * Obfuscate email address for anti-scraping
 * Splits email and reverses parts
 * @param email - Plain email address
 * @returns Obfuscated email string
 */
export function obfuscateEmail(email: string): string {
  const [username, domain] = email.split('@');
  return `${domain} [ta] ${username}`;
}

/**
 * Check if URL is external
 * @param url - URL to check
 * @returns True if external, false if internal
 */
export function isExternalUrl(url: string): boolean {
  try {
    const urlObj = new URL(url, window.location.origin);
    return urlObj.origin !== window.location.origin;
  } catch {
    return false;
  }
}

/**
 * Sanitize string for safe display
 * Removes potentially dangerous characters
 * @param input - Input string
 * @returns Sanitized string
 */
export function sanitizeString(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .trim();
}

/**
 * Generate secure external link attributes
 * @returns Object with rel and target attributes
 */
export function getExternalLinkAttributes() {
  return {
    target: '_blank',
    rel: 'noopener noreferrer',
  } as const;
}

