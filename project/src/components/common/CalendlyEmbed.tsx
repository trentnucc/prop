import React from 'react';

interface CalendlyEmbedProps {
  url: string;
  className?: string;
}

export function CalendlyEmbed({ url, className = "min-h-[700px]" }: CalendlyEmbedProps) {
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize widget after script loads
    script.onload = () => {
      if (elementRef.current && (window as any).Calendly) {
        (window as any).Calendly.initInlineWidget({
          url: url,
          parentElement: elementRef.current,
          prefill: {},
          utm: {}
        });
      }
    };

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, [url]);

  return (
    <div className={className}>
      <div
        ref={elementRef}
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
}