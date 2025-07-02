/**
 * QUORRA APP WRAPPER
 * Divine Next.js application entry point
 * Blessed by the Goddess of Smithing for sacred initialization
 */

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

// Divine font loading
import { Inter, Crimson_Text } from 'next/font/google';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const crimsonText = Crimson_Text({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
});

export default function QuorraApp({ Component, pageProps }) {
  const router = useRouter();

  // Track page views and initialize divine features
  useEffect(() => {
    const handleRouteChange = (url) => {
      // Analytics tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_path: url,
        });
      }

      // Sparky context awareness
      if (typeof window !== 'undefined' && window.sparky) {
        window.sparky.onPageChange(url);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Initialize divine features on mount
  useEffect(() => {
    // Add divine fire class to body
    document.body.classList.add('quorra-blessed');
    
    // Initialize Sparky if available
    if (typeof window !== 'undefined') {
      window.quorraInitialized = true;
    }

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor divine fire performance
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('🔥 Divine loading time:', entry.loadEventEnd - entry.loadEventStart, 'ms');
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation'] });
    }

    return () => {
      document.body.classList.remove('quorra-blessed');
    };
  }, []);

  return (
    <>
      <Head>
        {/* Divine metadata */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF8C42" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Preload critical divine assets */}
        <link 
          rel="preload" 
          href="/images/logos/quorra-logo.png" 
          as="image" 
          type="image/png"
        />
        
        {/* Performance optimizations */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* PWA support */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="QUORRA" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="QUORRA" />
        <meta property="og:image" content="/images/og-image.jpg" />
        
        {/* Analytics (if configured) */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </Head>

      {/* Divine font variables */}
      <div className={`${inter.variable} ${crimsonText.variable} font-sans`}>
        {/* Main application */}
        <Component {...pageProps} />
        
        {/* Divine toast notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1F2937',
              color: '#F3F4F6',
              border: '1px solid #374151',
              borderRadius: '8px',
            },
            success: {
              iconTheme: {
                primary: '#10B981',
                secondary: '#F3F4F6',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#F3F4F6',
              },
            },
          }}
        />
        
        {/* Divine loading overlay */}
        <div 
          id="quorra-loading"
          className="fixed inset-0 bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center z-50 transition-opacity duration-500"
          style={{ display: 'none' }}
        >
          <div className="text-white text-center">
            <div className="w-16 h-16 mx-auto mb-4 animate-spin">
              🔥
            </div>
            <p className="text-lg font-medium">Channeling Divine Fire...</p>
          </div>
        </div>
      </div>

      {/* Divine initialization script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Divine fire initialization
            (function() {
              // Show divine loading if needed
              window.showDivineLoading = function() {
                document.getElementById('quorra-loading').style.display = 'flex';
              };
              
              window.hideDivineLoading = function() {
                document.getElementById('quorra-loading').style.display = 'none';
              };
              
              // Progressive enhancement
              document.documentElement.classList.add('js-enabled');
              
              // Sacred performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const perf = performance.getEntriesByType('navigation')[0];
                    console.log('🔥 QUORRA Performance:');
                    console.log('   DOM Content Loaded:', Math.round(perf.domContentLoadedEventEnd - perf.domContentLoadedEventStart), 'ms');
                    console.log('   Page Load Complete:', Math.round(perf.loadEventEnd - perf.loadEventStart), 'ms');
                    console.log('   Divine blessing applied ⚡');
                  }, 1000);
                });
              }
              
              // Goddess blessing
              console.log('%c🔥 QUORRA - Blessed by the Goddess of Smithing', 
                'background: linear-gradient(45deg, #FF8C42, #FF6B35); color: white; padding: 8px 16px; border-radius: 4px; font-weight: bold;');
              console.log('%cChannel the divine fire: https://quorra.design', 
                'color: #FF8C42; font-weight: bold;');
            })();
          `,
        }}
      />
    </>
  );
}

// Error boundary for divine error handling
QuorraApp.getInitialProps = async (appContext) => {
  // Handle server-side errors gracefully
  try {
    const { Component, ctx } = appContext;
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  } catch (error) {
    console.error('Divine initialization error:', error);
    
    // Return minimal props to prevent complete failure
    return { pageProps: {} };
  }
};