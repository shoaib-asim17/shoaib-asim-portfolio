"use client"; 

import "./globals.css";
import { ThemeProvider } from './ThemeContext'; 
import { metadata } from './metadata'; 
import Navbar from '../components/Navbar';
import VantaBackground from '../components/VantaBackground';

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <link rel="icon" type="image/svg+xml" href="/shoaib asim.png" />
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords.join(', ')} />
          <meta name="author" content={metadata.creator} />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="theme-color" content={metadata.themeColor} />
          <meta name="color-scheme" content={metadata.colorScheme} />
          
          {/* Open Graph */}
          <meta property="og:type" content={metadata.openGraph.type} />
          <meta property="og:locale" content={metadata.openGraph.locale} />
          <meta property="og:url" content={metadata.openGraph.url} />
          <meta property="og:title" content={metadata.openGraph.title} />
          <meta property="og:description" content={metadata.openGraph.description} />
          <meta property="og:site_name" content={metadata.openGraph.siteName} />
          <meta property="og:image" content={metadata.openGraph.images[0].url} />
          <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
          <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
          <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
          
          {/* Twitter */}
          <meta name="twitter:card" content={metadata.twitter.card} />
          <meta name="twitter:title" content={metadata.twitter.title} />
          <meta name="twitter:description" content={metadata.twitter.description} />
          <meta name="twitter:image" content={metadata.twitter.images[0]} />
          <meta name="twitter:creator" content={metadata.twitter.creator} />
          
          {/* Additional Meta Tags */}
          <link rel="canonical" href={metadata.alternates.canonical} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="Shoaib Asim Portfolio" />
        </head>
        <body>
          <VantaBackground />
          <Navbar />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
