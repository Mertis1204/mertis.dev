/**
 * Portfolio Data Loader
 * Type-safe portfolio data with compile-time validation
 * Static import compatible with Next.js static export
 */

import portfolioDataJSON from './portfolio.data.json';
import { PortfolioSchema, type Portfolio } from './portfolio.schema';

/**
 * Validate and export portfolio data
 * Validation happens at build time
 */
function validatePortfolioData(): Portfolio {
  try {
    const validatedData = PortfolioSchema.parse(portfolioDataJSON);
    return validatedData;
  } catch (error) {
    console.error('❌ Portfolio data validation failed:', error);
    throw new Error('Portfolio data is invalid');
  }
}

// Export validated portfolio data
export const portfolioData = validatePortfolioData();

