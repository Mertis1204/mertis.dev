/**
 * Download Utilities
 * Helper functions for file downloads with analytics
 */

export type DownloadType = 'cv' | 'document' | 'other';

interface DownloadOptions {
  filename: string;
  type?: DownloadType;
  analytics?: boolean;
}

/**
 * Download a file from the public directory
 * @param filepath - Path to file in public directory (e.g., '/Mert_Is_CV_TR.pdf')
 * @param options - Download options
 */
export function downloadFile(filepath: string, options: DownloadOptions): void {
  const { filename, type = 'other', analytics = true } = options;

  try {
    // Create temporary anchor element
    const link = document.createElement('a');
    link.href = filepath;
    link.download = filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Track download event
    if (analytics) {
      trackDownload(filename, type);
    }

    console.log(`✅ Download started: ${filename}`);
  } catch (error) {
    console.error('❌ Download failed:', error);
    throw new Error('Failed to download file');
  }
}

/**
 * Download CV based on locale
 * @param locale - User's current locale ('tr' or 'en')
 */
export function downloadCV(locale: 'tr' | 'en'): void {
  const cvFiles = {
    tr: {
      path: '/Mert_Is_CV_TR.pdf',
      filename: 'Mert_Is_CV_TR.pdf',
    },
    en: {
      path: '/Mert_Is_CV_EN.pdf',
      filename: 'Mert_Is_CV_EN.pdf',
    },
  };

  const cv = cvFiles[locale];
  downloadFile(cv.path, {
    filename: cv.filename,
    type: 'cv',
    analytics: true,
  });
}

/**
 * Track download events (can be extended with Google Analytics, Plausible, etc.)
 */
function trackDownload(filename: string, type: DownloadType): void {
  // Log to console for development
  console.log(`📊 Download tracked: ${filename} (${type})`);

  // You can extend this with real analytics:
  // gtag('event', 'download', { filename, type });
  // plausible('Download', { props: { filename, type } });
}

/**
 * Get CV download URL for a specific locale
 */
export function getCVUrl(locale: 'tr' | 'en'): string {
  const cvFiles = {
    tr: '/Mert_Is_CV_TR.pdf',
    en: '/Mert_Is_CV_EN.pdf',
  };
  return cvFiles[locale];
}

