import { useState, useEffect, ImgHTMLAttributes } from 'react';
import { isMobile, isLowBandwidth } from '../utils/deviceDetection';

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  mobileSrc?: string;
  lowQualitySrc?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * Responsive image component that automatically serves optimized images
 * based on device type and bandwidth
 */
export function ResponsiveImage({
  src,
  alt,
  mobileSrc,
  lowQualitySrc,
  className = '',
  loading = 'lazy',
  ...props
}: ResponsiveImageProps) {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Determine the best image source based on conditions
    let selectedSrc = src;

    if (isLowBandwidth() && lowQualitySrc) {
      selectedSrc = lowQualitySrc;
    } else if (isMobile() && mobileSrc) {
      selectedSrc = mobileSrc;
    }

    setImageSrc(selectedSrc);
  }, [src, mobileSrc, lowQualitySrc]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    // Fallback to original src if optimized version fails
    if (imageSrc !== src) {
      setImageSrc(src);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-lg" />
      )}
      <img
        src={imageSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
}
